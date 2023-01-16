package com.example.demo.dto.response;

import lombok.Builder;
import lombok.Getter;

@Getter
public class RecipeItemRespDto {

  private String recipeName;

  private String itemName;

  private String recipeImg;

  @Builder
  public RecipeItemRespDto(
    String recipeName,
    String itemName,
    String recipeImg
  ) {
    this.recipeName = recipeName;
    this.itemName = itemName;
    this.recipeImg = recipeImg;
  }
}
