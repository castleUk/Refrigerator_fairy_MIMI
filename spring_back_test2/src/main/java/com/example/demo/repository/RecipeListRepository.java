package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.RecipeList;

public interface RecipeListRepository  extends JpaRepository<RecipeList, Long>{
    
}
