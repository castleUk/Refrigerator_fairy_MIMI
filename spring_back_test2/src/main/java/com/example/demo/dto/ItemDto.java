package com.example.demo.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ItemDto {

  private Long id;

  private String name;

  private String img;

  private int per;

  private int kcal;

  private int fat;

  private int chol;

  private int sodium;

  private int potassium;

  private int carb;

  private int protein;
}
