package com.example.demo.dto.response;

import lombok.Builder;
import lombok.Getter;

@Getter
public class RecipeItemRespDto {

  private String recipeName;

  private String itemName;

  private int itemCount;

  @Builder
  public RecipeItemRespDto(String recipeName, String itemName, int itemCount) {
    this.recipeName = recipeName;
    this.itemName = itemName;
    this.itemCount = itemCount;
  }
}
