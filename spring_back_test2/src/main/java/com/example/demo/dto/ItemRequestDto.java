package com.example.demo.dto;

import com.example.demo.entity.Item;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.modelmapper.ModelMapper;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ItemRequestDto {

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

  public ItemRequestDto(final Item item) {
    this.id = item.getId();
    this.name = item.getName();
    this.img = item.getImg();
    this.per = item.getPer();
    this.kcal = item.getKcal();
    this.fat = item.getFat();
    this.chol = item.getChol();
    this.sodium = item.getSodium();
    this.potassium = item.getPotassium();
    this.carb = item.getCarb();
    this.protein = item.getProtein();
  }

  public static Item item(final ItemRequestDto dto) {
    return Item
      .builder()
      .id(dto.getId())
      .name(dto.getName())
      .img(dto.getImg())
      .per(dto.getPer())
      .kcal(dto.getKcal())
      .fat(dto.getFat())
      .chol(dto.getChol())
      .sodium(dto.getSodium())
      .potassium(dto.getPotassium())
      .carb(dto.getCarb())
      .protein(dto.getProtein())
      .build();
  }
}
