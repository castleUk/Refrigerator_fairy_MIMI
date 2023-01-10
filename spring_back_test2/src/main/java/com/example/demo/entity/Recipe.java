package com.example.demo.entity;

import com.example.demo.dto.request.RecipeReqDto;
import com.example.demo.dto.response.RecipeRespDto;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Recipe extends BaseEntity {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "recipe_id")
  private Long id;

  @Column(nullable = false)
  private String name;

  public void change(RecipeReqDto recipeReqDto) {
    this.name = recipeReqDto.getName();
  }

  public RecipeRespDto toDto() {
    return RecipeRespDto.builder().id(id).name(name).build();
  }
}
