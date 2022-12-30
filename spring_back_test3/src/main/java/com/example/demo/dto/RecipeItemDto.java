package com.example.demo.dto;

import com.example.demo.entity.Item;
import com.example.demo.entity.Recipe;
import com.example.demo.entity.RecipeItem;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class RecipeItemDto {

  private Long id;

  private Item item;

  @JsonIgnore
  private Recipe recipe;

  public static RecipeItemDto of(RecipeItem recipeItem) {
    return RecipeItemDto
      .builder()
      .item(recipeItem.getItem())
      .recipe(recipeItem.getRecipe())
      .build();
  }
}
