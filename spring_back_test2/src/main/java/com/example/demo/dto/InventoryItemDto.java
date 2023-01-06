package com.example.demo.dto;

import java.util.Date;

import com.example.demo.entity.InventoryItem;
import com.example.demo.entity.Item;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class InventoryItemDto {

  private Long inventoryItemId;

  private String itemName;

  private int count;

  private String storage;

  private String itemImg;

  private Date expDate;

  private Date regDate;


  public static InventoryItemDto of(InventoryItem inventoryItem) {
    return InventoryItemDto
      .builder()
      .inventoryItemId(inventoryItem.getId())
      .count(inventoryItem.getCount())
      .itemName(inventoryItem.getItem().getName())
      .itemImg(inventoryItem.getItem().getImg())
      .storage(inventoryItem.getStorage())
      .expDate(inventoryItem.getExpDate())
      .regDate(inventoryItem.getRegDate())
      .build();
  }
}
