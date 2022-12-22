package com.example.demo.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.RecipeItemRequestDto;
import com.example.demo.dto.RecipeItemResponseDto;
import com.example.demo.service.RecipeItemService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/recipeItem")
public class RecipeItemController {

  private final RecipeItemService recipeItemService;

  @PostMapping("/add") //레시피아이템 추가
  public ResponseEntity<?> addRecipe(@RequestBody RecipeItemRequestDto dto)
    throws Exception {
    return ResponseEntity.ok(recipeItemService.addRecipeItem(dto));
  }

  @GetMapping("/{name}") //해당 레시피의 레시피아이템 전체조회
  public List<RecipeItemResponseDto> readAllRecipeItem(@PathVariable("name") String name){
    return recipeItemService.recipeSearch(name);
  }

  @GetMapping("/recipe/{name}") //해당 레시피의 레시피아이템 전체조회
  public List<RecipeItemResponseDto> readAllItemRecipe(@PathVariable("name") String name){
    return recipeItemService.itemSearch(name);
  }

  @DeleteMapping
  public void deleteRecipeItem(@RequestBody RecipeItemRequestDto dto){
    recipeItemService.deleteRecipeItem(dto);
  }
}
