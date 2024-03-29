package com.example.demo.dto.response;

import lombok.Builder;
import lombok.Getter;

@Getter
public class RecipeItemRespDto {

  private Long id;

  private String recipeName;

  private Long recipeId;

  private String itemName;

  private String itemCount;

  private String recipeImg;

  private Integer count;

  @Builder
  public RecipeItemRespDto(
    Long id,
    String recipeName,
    String itemName,
    String recipeImg,
    String itemCount,
    Long recipeId,
    Integer count
  ) {
    this.id = id;
    this.recipeName = recipeName;
    this.itemName = itemName;
    this.recipeImg = recipeImg;
    this.recipeImg = recipeImg;
    this.itemCount = itemCount;
    this.recipeId = recipeId;
    this.count = count;
  }
}
