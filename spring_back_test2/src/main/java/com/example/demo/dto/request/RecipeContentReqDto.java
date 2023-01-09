package com.example.demo.dto.request;

import com.example.demo.entity.RecipeList;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class RecipeContentReqDto {

  private String recipeName;

  private String imgUrl;

  private String recipeList;

  public static RecipeContentReqDto of(RecipeList recipeList) {
    return RecipeContentReqDto
      .builder()
      .recipeName(recipeList.getRecipe().getName())
      .recipeList(recipeList.getRecipeList())
      .imgUrl(recipeList.getImgUrl())
      .build();
  }
}
