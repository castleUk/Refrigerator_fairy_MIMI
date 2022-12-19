package com.example.demo.controller;

import com.example.demo.dto.FreezerRequestDto;
import com.example.demo.entity.Member;
import com.example.demo.service.FreezerService;
import com.example.demo.service.MemberService;
import java.util.List;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/freezer")
@Log4j2
public class FreezerController {

  private final MemberService memberService;
  private final FreezerService freezerService;

  //냉장고 추가
  @PostMapping("/add")
  public ResponseEntity<FreezerRequestDto> register(
    @RequestBody FreezerRequestDto freezerRequestDto
  ) {
    String email = memberService.getMyInfoBySecurity().getEmail();
    return ResponseEntity.ok(
      freezerService.addFreezer(freezerRequestDto, email)
    );
  }

  //냉장고 전체 목록
  @GetMapping
  public List<FreezerRequestDto> getAllFreezers() {
    String email = memberService.getMyInfoBySecurity().getEmail();
    return freezerService.freezerList(email);
  }

  //냉장고 읽기
  @GetMapping("/{id}")
  public FreezerRequestDto get(@PathVariable("id") int id){
    log.info("3333" + id);
    String email = memberService.getMyInfoBySecurity().getEmail();
    return freezerService.getFreezer(email, id);

  }

  

}
