package com.example.demo.service;

import com.example.demo.config.SecurityUtil;
import com.example.demo.dto.MemberResponseDto;
import com.example.demo.entity.Member;
import com.example.demo.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class MemberService {

  private final MemberRepository memberRepository;
  private final PasswordEncoder passwordEncoder;

  public MemberResponseDto getMyInfoBySecurity() { //헤더에 있는 token 값을 토대로 Member의 data를건네주는 메소드
    return memberRepository
      .findById(SecurityUtil.getCurrentMemberId())
      .map(MemberResponseDto::of)
      .orElseThrow(() -> new RuntimeException("로그인 유저 정보가 없습니다"));
  }

  @Transactional
  public MemberResponseDto changeMemberNickname(String userEmail, String userName) { //닉네임 변경
    Member member = memberRepository
      .findByUserEmail(userEmail)
      .orElseThrow(() -> new RuntimeException("로그인 유저 정보가 없습니다"));
    member.setUserName(userName);
    return MemberResponseDto.of(memberRepository.save(member));
  }

  @Transactional
  public MemberResponseDto changeMemberPassword( //패스워드 변경
    String userEmail,
    String exUserPw,
    String newUserPw
  ) {
    Member member = memberRepository
      .findById(SecurityUtil.getCurrentMemberId())
      .orElseThrow(() -> new RuntimeException("로그인 유저 정보가 없습니다"));
    if (!passwordEncoder.matches(exUserPw, member.getUserPw())) {
      throw new RuntimeException("비밀번호가 맞지 않습니다");
    }
    member.setUserPw(passwordEncoder.encode((newUserPw)));
    return MemberResponseDto.of(memberRepository.save(member));
  }
}
