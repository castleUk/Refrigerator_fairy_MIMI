package com.example.demo.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.example.demo.dto.InventoryItemDto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class InventoryItem extends BaseEntity {

  @Id
  @GeneratedValue
  @Column(name = "inventory_item_id")
  private Long id;

  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "inventory_id")
  private Inventory inventory;

  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "item_id")
  private Item item;

  @Column
  private int count;

  public static InventoryItem createInventoryItem(
    Inventory inventory,
    Item item,
    int count
  ) {
    return InventoryItem
      .builder()
      .inventory(inventory)
      .item(item)
      .count(count)
      .build();
  }

  public void addCount(int count) {
    this.count += count;
  }

  public void change(InventoryItemDto inventoryItemDto){
    InventoryItemDto.builder().count(inventoryItemDto.getCount());
  }
  
}
