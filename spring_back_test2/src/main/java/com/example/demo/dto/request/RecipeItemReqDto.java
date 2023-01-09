package com.example.demo.dto.request;

import com.example.demo.entity.Item;
import com.example.demo.entity.Recipe;
import com.example.demo.entity.RecipeItem;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RecipeItemReqDto {

  private Long id;

  private Item item;

  private Recipe recipe;

  private int count;

  public RecipeItem toEntity() {
    return RecipeItem
      .builder()
      .id(id)
      .item(item)
      .recipe(recipe)
      .count(count)
      .build();
  }
}
