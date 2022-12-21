package com.example.demo.service;

import com.example.demo.dto.RecipeDto;
import com.example.demo.entity.Recipe;
import com.example.demo.repository.RecipeRepository;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import javax.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

@Service
@Transactional
@RequiredArgsConstructor
public class RecipeService {

  private final RecipeRepository recipeRepository;

  private final ModelMapper modelMapper;

  //레시피 등록
  public Long register(RecipeDto recipeDto) {
    Recipe recipe = modelMapper.map(recipeDto, Recipe.class);
    return recipeRepository.save(recipe).getId();
  }

  //레시피 조회
  public RecipeDto readOne(Long id) {
    Optional<Recipe> result = recipeRepository.findById(id);
    Recipe recipe = result.orElseThrow();
    RecipeDto recipeDto = modelMapper.map(recipe, RecipeDto.class);
    return recipeDto;
  }

  //레시피 수정
  public void modify(RecipeDto recipeDto) {
    Optional<Recipe> result = recipeRepository.findById(recipeDto.getId());
    Recipe recipe = result.orElseThrow();
    recipe.change(recipeDto);
    recipeRepository.save(recipe);
  }

  //삭제 처리
  public void remove(Long id) {
    recipeRepository.deleteById(id);
  }

  // 전체 목록
  public List<RecipeDto> readAll() {
    List<Recipe> result = recipeRepository.findAll();
    List<RecipeDto> resultList = result
      .stream()
      .map(Recipe -> modelMapper.map(Recipe, RecipeDto.class))
      .collect(Collectors.toList());
    return resultList;
  }
}
