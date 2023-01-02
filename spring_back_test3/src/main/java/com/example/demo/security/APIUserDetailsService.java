package  com.example.demo.security;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import  com.example.demo.entity.Member;
import  com.example.demo.dto.APIUserDTO;
import  com.example.demo.repository.APIUserRepository;
import  com.example.demo.repository.MemberRepository;

import java.util.List;
import java.util.Optional;

@Service
@Log4j2
@RequiredArgsConstructor
public class APIUserDetailsService implements UserDetailsService {

    //주입
    private final MemberRepository memberRepository;

    @Override
    public UserDetails loadUserByUsername(String userEmail) throws UsernameNotFoundException {
        log.info("username:" +userEmail);
        Optional<Member> result = memberRepository.findByUserEmail(userEmail);
        

        Member member = result.orElseThrow(() -> new UsernameNotFoundException("Cannot find mid"));

        log.info("APIUserDetailsService apiUser-------------------------------------");

        MemberRequestDto dto =  new MemberRequestDto(
                member.getUserEmail()
                member.getUserPw(),
                List.of(new SimpleGrantedAuthority("ROLE_USER")));

        log.info(dto);

        return dto;
    }
}
