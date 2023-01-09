package com.example.demo.dto.response;

import lombok.Builder;
import lombok.Getter;

@Getter
public class ItemRespDto {

  private Long id;

  private String name;

  @Builder
  public ItemRespDto(Long id, String name) {
    this.id = id;
    this.name = name;
  }
}
