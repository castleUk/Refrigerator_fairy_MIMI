package com.example.demo.service;

import java.util.List;
import javax.transaction.Transactional;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.example.demo.dto.response.RecipeItemResponseDto;

@SpringBootTest
@Transactional
public class RecipeItemSerachTest {

  @Autowired
  RecipeItemService recipeItemService;

  @Test
  void 재료로검색() {
    String 재료이름 = "양파";

    List<RecipeItemResponseDto> list = recipeItemService.itemSearch(재료이름);
    System.out.println(list);
  }
}
