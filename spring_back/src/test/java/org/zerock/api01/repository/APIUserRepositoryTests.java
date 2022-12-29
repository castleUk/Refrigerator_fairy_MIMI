package org.zerock.api01.repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.crypto.password.PasswordEncoder;

import lombok.extern.log4j.Log4j2;

@SpringBootTest
@Log4j2
public class APIUserRepositoryTests {

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private MemberRepository memberRepository;

    // @Test
    // public void testInserts() {
    //     IntStream.rangeClosed(1,100).forEach(i -> {
    //         Member member = Member.builder()
    //                 .ruser_id("member"+i)
    //                 .ruser_pw( passwordEncoder.encode("1111") )
    //                 .build();

    //         memberRepository.save(member);
    //     });
    // }
}
