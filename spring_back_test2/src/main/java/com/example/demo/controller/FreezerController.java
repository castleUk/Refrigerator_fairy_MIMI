package com.example.demo.controller;

import com.example.demo.dto.FreezerRequestDto;
import com.example.demo.service.FreezerService;
import com.example.demo.service.MemberService;
import java.util.List;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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
  public ResponseEntity<FreezerRequestDto> registerFreezer(
    @RequestBody FreezerRequestDto freezerRequestDto
  ) {
    String email = memberService.getMyInfoBySecurity().getUserEmail();
    log.info(email);
    log.info("여기까지 왔음 진짜임");
    return ResponseEntity.ok(
      freezerService.addFreezer(freezerRequestDto, email)
    );
  }

  //냉장고 전체 목록
  @GetMapping
  public List<FreezerRequestDto> readAllFreezer() {
    String email = memberService.getMyInfoBySecurity().getUserEmail();
    return freezerService.freezerList(email);
  }

  //냉장고 읽기
  @GetMapping("/{index}")
  public FreezerRequestDto readOneFreezer(@PathVariable("index") int index) {
    String email = memberService.getMyInfoBySecurity().getUserEmail();
    return freezerService.getFreezer(email, index);
  }

  //냉장고수정
  @PutMapping("/{index}")
  public void updateFreezer(
    @PathVariable("index") int index,
    @RequestBody FreezerRequestDto requestDto
  ) {
    log.info(requestDto.getName());
    log.info("333333333333");
    String email = memberService.getMyInfoBySecurity().getUserEmail();
    log.info(email);

    freezerService.update(email, index, requestDto);
  }

  //냉장고 삭제
  @DeleteMapping("/{index}")
  public void deleteFreezer(@PathVariable("index") int index) {
    String email = memberService.getMyInfoBySecurity().getUserEmail();
    freezerService.delete(email, index);
  }
}
