package com.example.demo.dto;

import com.example.demo.entity.Item;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ItemResponseDto {

  private String name;


  public static ItemResponseDto of(Item item) {
    return ItemResponseDto
      .builder()
      .name(item.getName())
      .build();
  }
  
}
