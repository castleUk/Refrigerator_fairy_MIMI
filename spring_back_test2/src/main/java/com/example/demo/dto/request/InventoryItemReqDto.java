package com.example.demo.dto.request;

import java.util.Date;

import com.example.demo.entity.Inventory;
import com.example.demo.entity.InventoryItem;
import com.example.demo.entity.Item;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class InventoryItemReqDto {

  private Long id;

  private Item item;

  private Inventory inventory;

  private int count;

  private String storage;

  private Date expDate;

  private Date regDate;


  public InventoryItem toEntity() {
    return InventoryItem.builder().id(id).item(item).inventory(inventory).regDate(regDate).storage(storage).expDate(expDate).count(count).build();
  }



  // public static InventoryItemReqDto of(InventoryItem inventoryItem) {
  //   return InventoryItemReqDto
  //     .builder()
  //     .inventoryItemId(inventoryItem.getId())
  //     .count(inventoryItem.getCount())
  //     .itemName(inventoryItem.getItem().getName())
  //     .itemImg(inventoryItem.getItem().getImg())
  //     .storage(inventoryItem.getStorage())
  //     .expDate(inventoryItem.getExpDate())
  //     .regDate(inventoryItem.getRegDate())
  //     .build();
  // }
}
