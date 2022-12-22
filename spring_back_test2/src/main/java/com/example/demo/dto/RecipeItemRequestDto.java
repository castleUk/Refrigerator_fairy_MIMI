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
public class RecipeItemRequestDto {
  
  private String recipeName;

  private String itemName;

  private int itemCount;

}
