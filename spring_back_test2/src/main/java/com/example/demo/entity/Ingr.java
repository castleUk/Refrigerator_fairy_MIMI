package com.example.demo.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Ingr {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "ing_id")
  private Long id;

  @Column
  private String name;

  @Column
  private String img;

  @Column
  private int kcal;

  @Builder
  public Ingr(String name, String img, int kcal) {
    this.name = name;
    this.img = img;
    this.kcal = kcal;
  }
}
