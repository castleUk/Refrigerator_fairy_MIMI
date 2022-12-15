package com.example.demo.dto;

import com.example.demo.entity.Item;

public class ItemRequestDto {

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

  public Item toEntity() {
    return Item
      .builder()
      .name(name)
      .img(img)
      .per(per)
      .kcal(kcal)
      .fat(fat)
      .chol(chol)
      .sodium(sodium)
      .potassium(potassium)
      .carb(carb)
      .protein(protein)
      .build();
  }
}
