package org.zerock.api01.security.filter;

import java.io.IOException;
import java.io.InputStreamReader;
import java.io.Reader;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.AbstractAuthenticationProcessingFilter;

import com.google.gson.Gson;

import lombok.extern.log4j.Log4j2;

@Log4j2
public class APILoginFilter extends AbstractAuthenticationProcessingFilter {

  public APILoginFilter(String defaultFilterProcessesUrl) {
    super(defaultFilterProcessesUrl);
  }

  @Override
  public Authentication attemptAuthentication(
    HttpServletRequest request,
    HttpServletResponse response
  ) throws AuthenticationException, IOException, ServletException {
    log.info("APILoginFilter-----------------------------------");

    if (request.getMethod().equalsIgnoreCase("GET")) {
      log.info("GET METHOD NOT SUPPORT");
      return null;
    }

    // log.info("-----------------------------------------");
    // log.info(request.getMethod());

    //POST 방식으로 요청이 들어올때 JSON 문자열을 처리

    Map<String, String> jsonData = parseRequestJSON(request);

    log.info("jsonData: " + jsonData);

    UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(
      jsonData.get("userId"),
      jsonData.get("userPw")
    );
    return getAuthenticationManager().authenticate(authenticationToken);
  }

  private Map<String, String> parseRequestJSON(HttpServletRequest request) {
    //JSON 데이터를 분석해서 id, pw 전달 값을 Map으로 처리
    try (Reader reader = new InputStreamReader(request.getInputStream())) {
      Gson gson = new Gson();

      return gson.fromJson(reader, Map.class);
    } catch (Exception e) {
      log.error(e.getMessage());
    }
    return null;
  }
}
