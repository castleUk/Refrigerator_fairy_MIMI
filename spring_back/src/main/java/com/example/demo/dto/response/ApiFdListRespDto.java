package com.example.demo.dto.response;

import java.util.List;

import lombok.Builder;
import lombok.Getter;

@Getter
public class ApiFdListRespDto {

  List<ApiFdRespDto> dtoList;

  @Builder
  public ApiFdListRespDto(List<ApiFdRespDto> dtoList) {
    this.dtoList = dtoList;
  }
}
