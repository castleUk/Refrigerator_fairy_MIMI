package com.example.demo.controller;

import com.example.demo.dto.request.RecipeContentReqDto;
import com.example.demo.service.RecipeListService;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/recipeList")
public class RecipeListController {

  private final RecipeListService recipeListService;

  @PostMapping("/add") //레시피아이템 추가
  public ResponseEntity<?> addRecipe(@RequestBody RecipeContentReqDto dto)
    throws Exception {
    return ResponseEntity.ok(recipeListService.addRecipeList(dto));
  }

  @GetMapping("/{recipeName}") //해당 레시피의 레시피아이템 전체조회
  public List<RecipeContentReqDto> readAllRecipeItem(
    @PathVariable("recipeName") String RecipeName
  ) {
    return recipeListService.recipeListSearch(RecipeName);
  }
  //   @GetMapping("/recipe/{name}") //해당 레시피의 레시피아이템 전체조회
  //   public List<RecipeItemResponseDto> readAllItemRecipe(
  //     @PathVariable("name") String name
  //   ) {
  //     return recipeItemService.itemSearch(name);
  //   }

  //   @DeleteMapping
  //   public void deleteRecipeItem(@RequestBody RecipeItemRequestDto dto) {
  //     recipeItemService.deleteRecipeItem(dto);
  //   }
}
