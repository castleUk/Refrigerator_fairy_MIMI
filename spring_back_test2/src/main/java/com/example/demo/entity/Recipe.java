package com.example.demo.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.example.demo.dto.RecipeDto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Recipe extends BaseEntity{

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "recipe_id")
  private Long id;

  @Column(nullable = false)
  private String name;

  @Column(nullable = false)
  private String imgUrl;

  public void change(RecipeDto recipeDto){
    this.name = recipeDto.getName();
    this.imgUrl = recipeDto.getImgUrl();

  }

}
