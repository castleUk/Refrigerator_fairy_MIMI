package com.example.demo.dto;

import com.example.demo.entity.RecipeItem;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class RecipeItemResponseDto {

  private String recipeName;

  private String itemName;

  private int itemCount;

  public static RecipeItemResponseDto of(RecipeItem recipeItem) {
    return RecipeItemResponseDto
      .builder()
      .recipeName(recipeItem.getRecipe().getName())
      .itemName(recipeItem.getItem().getName())
      .itemCount(recipeItem.getCount())
      .build();
  }
}
