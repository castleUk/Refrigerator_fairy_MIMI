package com.example.demo.dto;

import com.example.demo.entity.RecipeList;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class RecipeListRequestDto {

  private String recipeName;

  private String imgUrl;

  private String recipeList;

  public static RecipeListRequestDto of(RecipeList recipeList) {
    return RecipeListRequestDto
      .builder()
      .recipeName(recipeList.getRecipe().getName())
      .recipeList(recipeList.getRecipeList())
      .imgUrl(recipeList.getImgUrl())
      .build();
  }
}
