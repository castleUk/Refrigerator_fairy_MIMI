package com.example.demo.dto;

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

  private int count;

  private Long itemId;




  public static InventoryItemDto of(InventoryItem inventoryItem) {
    return InventoryItemDto
      .builder().inventoryItemId(inventoryItem.getId()).count(inventoryItem.getCount()).itemId(inventoryItem.getItem().getId()).build();

  }
  
}
