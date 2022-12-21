package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.RecipeItem;

public interface RecipeItemRepository extends JpaRepository<RecipeItem, Long>{
  
}
