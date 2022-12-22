package com.example.demo.service;

import com.example.demo.dto.FreezerRequestDto;
import com.example.demo.entity.Freezer;
import com.example.demo.entity.Member;
import com.example.demo.repository.FreezerRepository;
import com.example.demo.repository.MemberRepository;
import java.util.List;
import java.util.stream.Collectors;
import javax.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Transactional
@Log4j2
public class FreezerService {

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
    List<FreezerRequestDto> freezerRequestDto = freezerRepository
      .findByMemberId(member.getId())
      .stream()
      .map(FreezerRequestDto::of)
      .collect(Collectors.toList());
    return freezerRequestDto;
  }

  //로그인 된 아이디의 냉장고 개별조회(index 0~2)
  public FreezerRequestDto getFreezer(String email, int index) {
    Member member = memberRepository.findByEmail(email).orElseThrow();
    List<FreezerRequestDto> freezerRequestDto = freezerRepository
      .findByMemberId(member.getId())
      .stream()
      .map(FreezerRequestDto::of)
      .collect(Collectors.toList());
    return freezerRequestDto.get(index);
  }

  //로그인 된 아이디의 냉장고 개별수정(index 0~2)
  public FreezerRequestDto update(
    String email,
    int index,
    FreezerRequestDto requestDto
  ) {
    Member member = memberRepository.findByEmail(email).orElseThrow();
    List<FreezerRequestDto> result = freezerRepository
      .findByMemberId(member.getId())
      .stream()
      .map(FreezerRequestDto::of)
      .collect(Collectors.toList());

    FreezerRequestDto dto = result.get(index);
    Freezer newFreezer = dto.toEntity();
    newFreezer.setName(requestDto.getName());
    return FreezerRequestDto.of(freezerRepository.save(newFreezer));
  }

  //로그인 된 아이디의 냉장고 개별삭제(index 0~2)
  public void delete(String email, int index) {
    Member member = memberRepository.findByEmail(email).orElseThrow();
    List<FreezerRequestDto> result = freezerRepository
      .findByMemberId(member.getId())
      .stream()
      .map(FreezerRequestDto::of)
      .collect(Collectors.toList());

    FreezerRequestDto dto = result.get(index);
    Freezer newFreezer = dto.toEntity();
    freezerRepository.delete(newFreezer);
  }
}
