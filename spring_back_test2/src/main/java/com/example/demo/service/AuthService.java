package com.example.demo.service;

import com.example.demo.dto.MemberRequestDto;
import com.example.demo.dto.MemberResponseDto;
import com.example.demo.dto.TokenDto;
import com.example.demo.entity.Member;
import com.example.demo.jwt.TokenProvider;
import com.example.demo.repository.MemberRepository;
import javax.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Transactional
public class AuthService {

  private final AuthenticationManagerBuilder managerBuilder;
  private final MemberRepository memberRepository;
  private final PasswordEncoder passwordEncoder;
  private final TokenProvider tokenProvider;

  public MemberResponseDto signup(MemberRequestDto requestDto) {  //회원가입을 하는 메소드
    if (memberRepository.existsByEmail(requestDto.getEmail())) {
      throw new RuntimeException("이미 가입되어 있는 유저입니다");
    }

    
    Member member = requestDto.toMember(passwordEncoder);
    return MemberResponseDto.of(memberRepository.save(member));
  }

  public TokenDto login(MemberRequestDto requestDto) { //로그인 메소드
    UsernamePasswordAuthenticationToken authenticationToken = requestDto.toAuthentication();

    Authentication authentication = managerBuilder
      .getObject()
      .authenticate(authenticationToken);

    return tokenProvider.generateTokenDto(authentication);
  }
}

// LOGIN 메소드
// 1. login 메소드는MemberRequestDto에 있는 메소드 toAuthentication를 통해 생긴 UsernamePasswordAuthenticationToken 타입의 데이터를 가지게된다.
// 2. 주입받은 Builder를 통해 AuthenticationManager를 구현한 ProviderManager를 생성한다.
// 3. 이후 ProviderManager는 데이터를 AbstractUserDetailsAuthenticationProvider 의 자식 클래스인 DaoAuthenticationProvider 를 주입받아서 호출한다.
// 4. DaoAuthenticationProvider 내부에 있는 authenticate에서 retrieveUser을 통해 DB에서의 User의 비밀번호가 실제 비밀번호가 맞는지 비교한다.
// 5. retrieveUser에서는 DB에서의 User를 꺼내기 위해, CustomUserDetailService에 있는 loadUserByUsername을 가져와 사용한다.
// 6. 여기서 위에서 만든 loadUserByUsername이 사용됨을 알 수 있다.
