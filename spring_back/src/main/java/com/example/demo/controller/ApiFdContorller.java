package com.example.demo.controller;

import com.example.demo.dto.response.ApiFdListRespDto;
import com.example.demo.dto.response.ApiFdRespDto;
import com.example.demo.dto.response.CMRespDto;
import com.example.demo.service.ApiFdService;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/recommend")
@RequiredArgsConstructor
public class ApiFdContorller {

  private final ApiFdService apiFdService;

  //조건에  따른 레시피 목록
  @GetMapping("/{standard}")
  private ResponseEntity<?> SearchStandardFd(
    @PathVariable("standard") String standard
  ) {
    ApiFdListRespDto dto = apiFdService.StandardRecommend(standard);

    return new ResponseEntity<>(
      CMRespDto
        .builder()
        .code(1)
        .msg("기준에 따른 레시피 이름 찿기 성공")
        .body(dto)
        .build(),
      HttpStatus.OK
    );
  }
}
