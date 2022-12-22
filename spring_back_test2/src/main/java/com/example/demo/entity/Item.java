package com.example.demo.entity;

import com.example.demo.dto.ItemDto;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
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
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
public class Item extends BaseEntity {

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

  public void change(ItemDto itemDto) {
    this.name = itemDto.getName();
    this.img = itemDto.getImg();
    this.per = itemDto.getPer();
    this.kcal = itemDto.getKcal();
    this.fat = itemDto.getFat();
    this.chol = itemDto.getChol();
    this.sodium = itemDto.getSodium();
    this.potassium = itemDto.getPotassium();
    this.carb = itemDto.getCarb();
    this.protein = itemDto.getProtein();
  }
}
