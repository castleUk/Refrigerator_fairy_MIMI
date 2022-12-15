package com.example.demo.entity;

import java.time.LocalDate;
import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

import org.hibernate.annotations.CreationTimestamp;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Inventory {

  @OneToOne(mappedBy = "inventory")
  private Inventory inventory;

  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "ingr_id")
  private Ingr ingr;

  @Column
  private int count;

  @CreationTimestamp
  @Column
  private LocalDateTime addDate = LocalDateTime.now();

  @Column
  private LocalDate exDate;

  @Column
  private String storage;

  @Builder
  public Inventory(int count, Inventory inventory, Ingr ingr, LocalDate exDate, String storage){
    this.count = count;
    this.inventory = inventory;
    this.exDate = exDate;
    this.storage = storage;
    this.ingr = ingr;
    
  }


  






  
}
