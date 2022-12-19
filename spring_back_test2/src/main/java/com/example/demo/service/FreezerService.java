package com.example.demo.service;

import com.example.demo.dto.FreezerRequestDto;
import com.example.demo.entity.Freezer;
import com.example.demo.entity.Member;
import com.example.demo.repository.FreezerRepository;
import com.example.demo.repository.MemberRepository;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collector;
import java.util.stream.Collectors;

import javax.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Transactional
@Log4j2
public class FreezerService {

  private final MemberService memberService;
  private final MemberRepository memberRepository;
  private final FreezerRepository freezerRepository;

  //냉장고 등록
  public FreezerRequestDto addFreezer(
    FreezerRequestDto freezerRequestDto,
    String email
  ) {
    Member member = memberRepository.findByEmail(email).orElseThrow();
    String name = freezerRequestDto.getName();

    Freezer freezer = Freezer.createFreezer(member, name);

    log.info("Freezer :" + freezer);

    return FreezerRequestDto.of(freezerRepository.save(freezer));
  }

  //로그인 된 아이디의 냉장고 리스트 조회
  public List<FreezerRequestDto> freezerList(String email) {
    Member member = memberRepository.findByEmail(email).orElseThrow();
    List<FreezerRequestDto> freezerRequestDto = freezerRepository.findByMemberId(member.getId()).stream().map(FreezerRequestDto::of).collect(Collectors.toList());
    

    return freezerRequestDto;
  }

  //냉장고 조회
  public FreezerRequestDto getFreezer(String email, int id){
    Member member = memberRepository.findByEmail(email).orElseThrow();
    List<FreezerRequestDto> freezerRequestDto = freezerRepository.findByMemberId(member.getId()).stream().map(FreezerRequestDto::of).collect(Collectors.toList());
    return freezerRequestDto.get(id);

    
  }

  public void modifyFreezer(FreezerRequestDto freezerRequestDto) {
    Optional<Freezer> result = freezerRepository.findById(
      freezerRequestDto.getId()
    );

    Freezer freezer = result.orElseThrow();

    freezer.changeName(freezerRequestDto.getName());
    freezerRepository.save(freezer);
  }
}
