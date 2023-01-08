package com.example.demo.util;

import java.nio.charset.StandardCharsets;
import java.security.Key;
import java.time.ZonedDateTime;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Component;

import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import lombok.extern.log4j.Log4j2;

@Component
@Log4j2
public class JWTUtil {

  // @Value("${org.zerock.jwt.secret}")
  // private String key;

  Key key = Keys.hmacShaKeyFor("MyNickNameisErjuerAndNameisMinsu".getBytes(StandardCharsets.UTF_8));

  public String generateToken(Map<String, Object> valueMap, int days) {
    log.info("generateKey......." + key);

    //헤더부분
    Map<String, Object> headers = new HashMap<>();
    headers.put("typ", "JWT");
    headers.put("alg", "HS256");

    //payload 부분 설정
    Map<String, Object> payloads = new HashMap<>();
    payloads.putAll(valueMap);

    //테스트시에는 짧은 유효 기간

    int time = (60 * 24) * days; //테스트는 분단위로 나중에 60*24 (일) 단위로 변경

    //JWT 문자열 생성
    String jwtStr = Jwts
      .builder()
      .setHeader(headers)
      .setClaims(payloads)
      .setIssuedAt(Date.from(ZonedDateTime.now().toInstant()))
      .setExpiration(
        Date.from(ZonedDateTime.now().plusMinutes(time).toInstant()) // 유효기간을 plusMinutes 로 설정함 나중엔  plusDays로 바꿔야함
      )
      .signWith(key, SignatureAlgorithm.HS256)
      .compact();

    return jwtStr;
  }

  public Map<String, Object> validateToken(String token) throws JwtException {
    Map<String, Object> claim = null;

    claim =
      Jwts
        .parserBuilder()
        .setSigningKey(key) // Set key
        .build()
        .parseClaimsJws(token) // 파싱 및 검증, 실패시 에러
        .getBody();

      log.info(claim);
    return claim;
  }
}