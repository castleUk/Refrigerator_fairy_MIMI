package com.example.demo.dto;

import org.modelmapper.ModelMapper;

import com.example.demo.entity.Item;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
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


  private static ModelMapper modelMapper = new ModelMapper();

  public Item createItem(){
    return modelMapper.map(this, Item.class);
  }

  public static ItemRequestDto of(Item item){
    return modelMapper.map(item, ItemRequestDto.class);
  }
}
