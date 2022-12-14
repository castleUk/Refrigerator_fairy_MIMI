package com.example.demo.jwt;

import java.security.Key;
import java.util.Arrays;
import java.util.Collection;
import java.util.Date;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import com.example.demo.dto.TokenDto;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.UnsupportedJwtException;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import lombok.extern.log4j.Log4j2;



@Component
@Log4j2
public class TokenProvider {

  private static final String AUTHORITIES_KEY = "auth";
  private static final String BEARER_TYPE = "bearer";
  private static final long ACCESS_TOKEN_EXPIRE_TIME = 1000 * 60 * 30;  //토큰 만료시간
  private final Key key;

  // 주의점: 여기서 @Value는 `springframework.beans.factory.annotation.Value`소속이다! lombok의 @Value와 착각하지 말것!
  //     * @param secretKey
  public TokenProvider(@Value("${jwt.secret}") String secretKey) {  //yml에 있는 scret key를 가져온 다음 이것을 decode
    byte[] keyBytes = Decoders.BASE64.decode(secretKey);
    this.key = Keys.hmacShaKeyFor(keyBytes);
  }

  // 토큰 생성
  public TokenDto generateTokenDto(Authentication authentication) {
    String authorities = authentication
      .getAuthorities()
      .stream()
      .map(GrantedAuthority::getAuthority)
      .collect(Collectors.joining(","));

    long now = (new Date()).getTime();

    Date tokenExpiresIn = new Date(now + ACCESS_TOKEN_EXPIRE_TIME);

    System.out.println(tokenExpiresIn);

    String accessToken = Jwts
      .builder()
      .setSubject(authentication.getName())
      .claim(AUTHORITIES_KEY, authorities)
      .setExpiration(tokenExpiresIn)
      .signWith(key, SignatureAlgorithm.HS512)
      .compact();

    return TokenDto
      .builder()
      .grantType(BEARER_TYPE)
      .accessToken(accessToken)
      .tokenExpiresIn(tokenExpiresIn.getTime())
      .build();
  }


  //토큰을 받았을때 토큰의 인증을 꺼내는 메소드
  public Authentication getAuthentication(String accessToken) {   
    Claims claims = parseClaims(accessToken); //String 형태의 토큰을 claims 형태로 생성

    if (claims.get(AUTHORITIES_KEY) == null) {
      throw new RuntimeException("권한 정보가 없는 토큰입니다.");
    }

    Collection<? extends GrantedAuthority> authorities = Arrays // GrantedAuthority을 상속받은 타입만이 사용 가능한 Collection을 반환한다.
      .stream(claims.get(AUTHORITIES_KEY).toString().split(","))
      .map(SimpleGrantedAuthority::new)
      .collect(Collectors.toList());
      //그리고 stream을 통한 함수형 프로그래밍으로 claims형태의 토큰을 알맞게 정렬한 이후 SimpleGrantedAuthority형태의 새 List를 생성한다. 여기에는 인가가 들어있다.
       // 이후 Spring Security에서 유저의 정보를 담는 인터페이스인 UserDetails에 token에서 발췌한 정보와, 아까 생성한 인가를 넣고,
      UserDetails principal = new User(claims.getSubject(), "", authorities);
   
    
    return new UsernamePasswordAuthenticationToken(principal, "", authorities);
    // 이를 다시 UsernamePasswordAuthenticationToken안에 인가와 같이 넣고 반환한다.
  }

  public boolean validateToken(String token) { //토큰을 검증하기 위한 메소드다.
    try {
      Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(token);
      return true;
    } catch (
      io.jsonwebtoken.security.SecurityException | MalformedJwtException e
    ) {
      log.info("잘못된 JWT 서명입니다.");
    } catch (ExpiredJwtException e) {
      log.info("만료된 JWT 토큰입니다.");
    } catch (UnsupportedJwtException e) {
      log.info("지원되지 않는 JWT 토큰입니다.");
    } catch (IllegalArgumentException e) {
      log.info("JWT 토큰이 잘못되었습니다.");
    }
    return false;
  }

  private Claims parseClaims(String accessToken) {
    try {
      return Jwts.parserBuilder()
        .setSigningKey(key)
        .build()
        .parseClaimsJws(accessToken)
        .getBody();
    } catch (ExpiredJwtException e) {
      return e.getClaims();
    }
  }
}
