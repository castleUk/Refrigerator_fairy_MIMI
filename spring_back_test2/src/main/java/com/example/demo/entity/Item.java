package com.example.demo.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.example.demo.dto.ItemRequestDto;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Item  extends BaseEntity{

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(nullable = false)
  private String name;

  @Column(nullable = false)
  private String img;

  @Column(nullable = false)
  private int per;

  @Column(nullable = false)
  private int kcal;

  @Column(nullable = false)
  private int fat;

  @Column(nullable = false)
  private int chol;

  @Column(nullable = false)
  private int sodium;

  @Column(nullable = false)
  private int potassium;

  @Column(nullable = false)
  private int carb;

  @Column(nullable = false)
  private int protein;


  public void updateItem(ItemRequestDto itemRequestDto){
    this.name = itemRequestDto.getName();
    this.img = itemRequestDto.getImg();
    this.per = itemRequestDto.getPer();
    this.kcal = itemRequestDto.getKcal();
    this.fat = itemRequestDto.getFat();
    this.chol = itemRequestDto.getChol();
    this.sodium = itemRequestDto.getSodium();
    this.potassium = itemRequestDto.getPotassium();
    this.carb = itemRequestDto.getCarb();
    this.protein = itemRequestDto.getProtein();
  }

}
