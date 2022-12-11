package org.zerock.api01.service;



import org.modelmapper.ModelMapper;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.zerock.api01.domain.Member;
import org.zerock.api01.domain.MemberRole;
import org.zerock.api01.dto.MemberJoinDTO;
import org.zerock.api01.repository.MemberRepository;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;

@Log4j2
@Service
@RequiredArgsConstructor
public class MemberServiceImpl implements MemberService{

    private final ModelMapper modelMapper;

    private final MemberRepository memberRepository;

    private final PasswordEncoder passwordEncoder;

    @Override
    public void join(MemberJoinDTO memberJoinDTO) throws MidExistException{

        // String ruser_id = memberJoinDTO.getRuser_id();

        // boolean exist = memberRepository.existsById(ruser_id);

        // if(exist){
        //     throw new MidExistException();
        // }

        Member member = modelMapper.map(memberJoinDTO, Member.class);
        member.changePassword(passwordEncoder.encode(memberJoinDTO.getUserPw()));
        member.addRole(MemberRole.USER);

        log.info("=======================");
        log.info(member);
        log.info(member.getRoleSet());

        memberRepository.save(member);

    }
}
