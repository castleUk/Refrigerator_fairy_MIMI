package com.example.demo.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.RecipeDto;
import com.example.demo.service.RecipeService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/recipe")
public class RecipeController {

  
  private final RecipeService recipeService;

  @PostMapping("/add")  //상품추가
  public ResponseEntity<Long> addRecipe(
    @RequestBody RecipeDto recipeDto
  ) throws Exception {
   
  return ResponseEntity.ok(recipeService.register(recipeDto));
  }

  @PutMapping("/{recipeId}")  //레시피 수정 망
  public void modifyRecipe(@PathVariable("recipeId") Long recipeId, @RequestBody RecipeDto recipeDto)throws Exception {
    recipeService.modify(recipeDto);
  }

  @GetMapping  // 레시피 목록 받기
  public ResponseEntity<List<RecipeDto>> readAllRecipe() throws Exception {
    return ResponseEntity.ok(recipeService.readAll());
  }

  @GetMapping("/{recipeId}")
  public ResponseEntity<RecipeDto> readOneRecipe(@PathVariable("recipeId") Long recipeId) throws Exception{
    return ResponseEntity.ok(recipeService.readOne(recipeId));
  }


  @DeleteMapping("/{recipeId}")
  public void deleteRecipe(@PathVariable("itemId") Long recipeId) throws Exception{
    recipeService.remove(recipeId);
  }
  
}
