package com.example.demo.dto.response;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Getter
public class RecipeRespDto {

  private Long id;

  private String name;

  private String img;

  @Builder
  public RecipeRespDto(Long id, String name, String img) {
    this.id = id;
    this.name = name;
    this.img = img;
  }
}
