package com.example.demo.dto.response;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Getter
public class rulletRespDto {

  private Long id;

  private String text;

  private String image;

  private Integer count;

  @Builder
  public rulletRespDto(Long id, String text, String image, Integer count) {
    this.id = id;
    this.text = text;
    this.image = image;
    this.count = count;
  }
}