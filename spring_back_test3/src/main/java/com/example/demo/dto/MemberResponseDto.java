package com.example.demo.dto;

import com.example.demo.entity.Member;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class MemberResponseDto {

  private String userEmail;
  private String userName;

  public static MemberResponseDto of(Member member) {
    return MemberResponseDto
      .builder()
      .userEmail(member.getUserEmail())
      .userName(member.getUserName())
      .build();
  }
}
//Response를 보낼때 쓰이는 dto
