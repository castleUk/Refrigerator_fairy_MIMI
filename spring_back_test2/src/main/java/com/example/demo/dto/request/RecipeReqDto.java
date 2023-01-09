package com.example.demo.dto.request;

import com.example.demo.entity.Recipe;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RecipeReqDto {

  private Long id;

  private String name;

  public Recipe toEntity() {
    return Recipe.builder().id(id).name(name).build();
  }
}
