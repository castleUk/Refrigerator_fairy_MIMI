package com.example.demo.dto;

import com.example.demo.entity.Authority;
import com.example.demo.entity.Member;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class MemberRequestDto {

  private String userEmail;
  private String userPw;
  private String userName;

  public Member toMember(PasswordEncoder passwordEncoder) {
    return Member
      .builder()
      .userEmail(userEmail)
      .userPw(passwordEncoder.encode(userPw))
      .userName(userName)
      .authority(Authority.ROLE_USER)
      .build();
  }

  public UsernamePasswordAuthenticationToken toAuthentication() {
    return new UsernamePasswordAuthenticationToken(userEmail, userPw);
  }
}
//Request를 받을때 쓰이는 dto.
//UsernamePasswordAuthenticationToken를 반환하여 아이디와 비밀번호가 일치하는지 검증하는 로직을 넣을수 있게 된다.
