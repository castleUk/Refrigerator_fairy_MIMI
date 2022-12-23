package com.example.demo.service;

import com.example.demo.entity.Member;
import com.example.demo.repository.MemberRepository;
import java.util.Collections;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CustomUserDetailsService implements UserDetailsService {

  private final MemberRepository memberRepository;

  @Override
  public UserDetails loadUserByUsername(String username)  //실행한 loadUserByUsername은 받은 email을 통해 user가 실제로 존재하는지 알아보는
    throws UsernameNotFoundException {
    return memberRepository
      .findByUserEmail(username)
      .map(this::createUserDetails)
      .orElseThrow(() ->
        new UsernameNotFoundException(username + " 을 DB에서 찾을 수 없습니다")
      );
  }

  private UserDetails createUserDetails(Member member) {
    GrantedAuthority grantedAuthority = new SimpleGrantedAuthority(
      member.getAuthority().toString()
    );

    return new User(
      String.valueOf(member.getId()),
      member.getUserPw(),
      Collections.singleton(grantedAuthority)
    );
  }
}
