package com.example.demo.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class InventoryItemDetailDto {
  
  private Long InventoryItemId;

  private String ItemName;

  private int count;

  private String imgUrl;

  public InventoryItemDetailDto(Long InventoryItemId, String itemName, int count, String imgUrl){
    this.InventoryItemId = InventoryItemId;
    this.ItemName = itemName;
    this.count = count;
    this.imgUrl = imgUrl;
  }


}
