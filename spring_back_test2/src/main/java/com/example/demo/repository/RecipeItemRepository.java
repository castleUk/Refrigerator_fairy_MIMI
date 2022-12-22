package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.RecipeItem;

public interface RecipeItemRepository extends JpaRepository<RecipeItem, Long>{
  RecipeItem findByRecipeNameAndItemName(String recipeName, String itemName);
  List<RecipeItem> findByRecipeName(String recipeName);
  List<RecipeItem> findByItemName(String itemName);
  
}
