package com.example.demo.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.example.demo.dto.response.ApiFdRespDto;
import com.example.demo.dto.response.CMRespDto;
import com.example.demo.service.ApiFdService;


import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/recomend")
@RequiredArgsConstructor
public class ApiFdContorller {
    
    private final ApiFdService apiFdService;
    

    //조건에  따른 레시피 목록
    @GetMapping("/{Api_standard}")
    private ResponseEntity<?> SearchStandardFd(@PathVariable("Api_standard") String Api_standard ){
       List<ApiFdRespDto> ApiFdResDtoList =  apiFdService.StandardRecomend(Api_standard);

       return new ResponseEntity<>(
        CMRespDto
          .builder()
          .code(1)
          .msg("기준에 따른 레시피 이름 찿기 성공")
          .body(ApiFdResDtoList)
          .build(),
        HttpStatus.OK
      );
}
}