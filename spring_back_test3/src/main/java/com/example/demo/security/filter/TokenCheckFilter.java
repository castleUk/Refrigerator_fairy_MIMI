package com.example.demo.security.filter;

import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.security.SignatureException;

import java.io.IOException;
import java.util.Map;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.hibernate.cache.spi.support.AccessedDataClassification;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.filter.OncePerRequestFilter;
import com.example.demo.security.APIUserDetailsService;
import com.example.demo.security.exception.AccessTokenException;
import com.example.demo.util.JWTUtil;

//특정한 경로를 호출할 때 이 토큰들을 검사하고, 문제가 없을때만 접근을 가능하도록 구성

@Log4j2
@RequiredArgsConstructor
public class TokenCheckFilter extends OncePerRequestFilter { //OncePerRequestFilter는 하나의 요청에 대해서 한번씩 동작하는 필터

  private final APIUserDetailsService apiUserDetailsService;
  private final JWTUtil jwtUtil;

  @Override
  protected void doFilterInternal(
    HttpServletRequest request,
    HttpServletResponse response,
    FilterChain filterChain
  ) throws ServletException, IOException {
    String path = request.getRequestURI();

    // /api로 시작하는 url이 아니면 토큰 검사 안함
    if (!path.startsWith("/api")) {
      filterChain.doFilter(request, response);
      return;
    }

    log.info("Token Check Filter..................");
    log.info("JWTUtil: " + jwtUtil);

    try {
      validateAccessToken(request);
      filterChain.doFilter(request, response);
    } catch (AccessTokenException accessTokenException) {
      accessTokenException.sendResponseError(response);
    }

    try {
      Map<String, Object> payload = validateAccessToken(request);

      //userId
      String userId = (String)payload.get("userId");

      log.info(userId);

      UserDetails userDetails = apiUserDetailsService.loadUserByUsername(userId);

      UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());

      SecurityContextHolder.getContext().setAuthentication(authentication);
      filterChain.doFilter(request, response);

    } catch (AccessTokenException accessTokenException) {
      accessTokenException.sendResponseError(response);
      
    }



  }





  private Map<String, Object> validateAccessToken(HttpServletRequest request)
    throws AccessTokenException {
    String headerStr = request.getHeader("Authorization");

    if (headerStr == null || headerStr.length() < 8) {
      throw new AccessTokenException(AccessTokenException.TOKEN_ERROR.UNACCEPT);
    }

    //Bearer 생략
    String tokenType = headerStr.substring(0, 6);
    String tokenStr = headerStr.substring(7);

    if (tokenType.equalsIgnoreCase("Bearer") == false) {
      throw new AccessTokenException(AccessTokenException.TOKEN_ERROR.BADTYPE);
    }

    try {
      Map<String, Object> values = jwtUtil.validateToken(tokenStr);

      return values;
    } catch (MalformedJwtException malformedJwtException) {
      log.error("malformedJwtException==============================");
      throw new AccessTokenException(AccessTokenException.TOKEN_ERROR.MALFORM);
    } catch (SignatureException signatureException) {
      log.error("SignatureException==============================");
      throw new AccessTokenException(AccessTokenException.TOKEN_ERROR.BADSIGN);
    } catch (ExpiredJwtException expiredJwtException) {
      log.error("expiredJwtException==============================");
      throw new AccessTokenException(AccessTokenException.TOKEN_ERROR.EXPIRED);
    }
    
  }









}
