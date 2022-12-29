package com.example.demo.service;

import com.example.demo.dto.RecipeItemDto;
import com.example.demo.dto.RecipeItemRequestDto;
import com.example.demo.dto.RecipeItemResponseDto;
import com.example.demo.entity.Item;
import com.example.demo.entity.Recipe;
import com.example.demo.entity.RecipeItem;
import com.example.demo.repository.ItemRepository;
import com.example.demo.repository.RecipeItemRepository;
import com.example.demo.repository.RecipeRepository;
import java.util.List;
import java.util.stream.Collectors;
import javax.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Transactional
public class RecipeItemService {

  private final RecipeItemRepository recipeItemRepository;
  private final RecipeRepository recipeRepository;
  private final ItemRepository itemRepository;

  //레시피아이템 등록
  public RecipeItemDto addRecipeItem(RecipeItemRequestDto dto) {
    RecipeItem savedRecipeItem = recipeItemRepository.findByRecipeNameAndItemName(
      dto.getRecipeName(),
      dto.getItemName()
    );
    if (savedRecipeItem != null) {
      savedRecipeItem.addCount(dto.getItemCount());
      return null;
    } else {
      Recipe recipe = recipeRepository.findByName(dto.getRecipeName());
      Item item = itemRepository.findByName(dto.getItemName());
      RecipeItem recipeItem = RecipeItem
        .builder()
        .item(item)
        .recipe(recipe)
        .count(dto.getItemCount())
        .build();
      return RecipeItemDto.of(recipeItemRepository.save(recipeItem));
    }
  }

  //레시피 아이템 리스트
  public List<RecipeItemResponseDto> recipeSearch(String name) {
    List<RecipeItem> recipeItemList = recipeItemRepository.findByRecipeName(
      name
    );
    List<RecipeItemResponseDto> recipeItemListDto = recipeItemList
      .stream()
      .map(RecipeItemResponseDto::of)
      .collect(Collectors.toList());

    return recipeItemListDto;
  }

  //재료로 검색시 만들수 있는 레시피
  public List<RecipeItemResponseDto> itemSearch(String name) {
    List<RecipeItem> recipeItemList = recipeItemRepository.findByItemName(name);
    List<RecipeItemResponseDto> recipeItemListDto = recipeItemList
      .stream()
      .map(RecipeItemResponseDto::of)
      .collect(Collectors.toList());

    return recipeItemListDto;
  }

  //삭제
  public void deleteRecipeItem(RecipeItemRequestDto dto) {
    RecipeItem savedRecipeItem = recipeItemRepository.findByRecipeNameAndItemName(
      dto.getRecipeName(),
      dto.getItemName()
    );
    recipeItemRepository.delete(savedRecipeItem);
  }
}
