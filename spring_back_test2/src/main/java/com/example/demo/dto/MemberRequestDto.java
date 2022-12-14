package com.example.demo.dto;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.example.demo.entity.Authority;
import com.example.demo.entity.Member;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class MemberRequestDto {

  private String email;
  private String password;
  private String nickname;

  public Member toMember(PasswordEncoder passwordEncoder) {
    return Member
      .builder()
      .email(email)
      .password(passwordEncoder.encode(password))
      .nickname(nickname)
      .authority(Authority.ROLE_USER)
      .build();
  }

  public UsernamePasswordAuthenticationToken toAuthentication() {
    return new UsernamePasswordAuthenticationToken(email, password);
  }
}

//Request를 받을때 쓰이는 dto. 
//UsernamePasswordAuthenticationToken를 반환하여 아이디와 비밀번호가 일치하는지 검증하는 로직을 넣을수 있게 된다.