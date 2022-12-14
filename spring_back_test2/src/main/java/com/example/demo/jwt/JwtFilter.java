package com.example.demo.jwt;

import java.io.IOException;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.OncePerRequestFilter;

@RequiredArgsConstructor
public class JwtFilter extends OncePerRequestFilter {

  public static final String AUTHORIZATION_HEADER = "Authorization";
  public static final String BEARER_PREFIX = "Bearer ";
  private final TokenProvider tokenProvider;

  private String resolveToken(HttpServletRequest request) {    // Request Header 에서 토큰 정보를 꺼내오는 메소드
    String bearerToken = request.getHeader(AUTHORIZATION_HEADER);
    if (
      StringUtils.hasText(bearerToken) && bearerToken.startsWith(BEARER_PREFIX)
    ) {
      return bearerToken.substring(7);
    }
    return null;
  }



  //필터링을 실행하는 메소드 resolve을 통해 토큰정보를 꺼내온 다음 , validateToken으로 토큰이 유효한지 검사를해서, 유효 하다면
  //Authetication 을 가져와서 SecurityContext에 저장한다.

  //SecurityContext에서 허가된 uri 이외의 모든 리퀘스트 요청은 이 필터를 거치게 되며, 토큰 정보가 없거나 유효치 않으면 정상적으로 수행되지 않음
  // 반대로 REquest가 정상적으로 Controller 까지 도착하면, SeccurityContrext에 Member Id가 존재한다는 것이 보장된다.
  @Override
  protected void doFilterInternal(  
    HttpServletRequest request,
    HttpServletResponse response,
    FilterChain filterChain
  ) throws ServletException, IOException {
    String jwt = resolveToken(request);

    if (StringUtils.hasText(jwt) && tokenProvider.validateToken(jwt)) {
      Authentication authentication = tokenProvider.getAuthentication(jwt);
      SecurityContextHolder.getContext().setAuthentication(authentication);
    }

    filterChain.doFilter(request, response);
  }
}
