package com.example.demo.dto;

import com.example.demo.entity.Recipe;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class RecipeDto {

  private Long id;

  private String name;



  public static RecipeDto of(Recipe recipe) {
    return RecipeDto
      .builder().name(recipe.getName()).build();
  }
}
