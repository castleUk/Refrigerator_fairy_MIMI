package com.example.demo.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class InventoryItem  extends BaseEntity{

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


  public static InventoryItem createInventoryItem(Inventory inventory, Item item , int count){
    InventoryItem inventoryItem = new InventoryItem();
    inventoryItem.setInventory(inventory);
    inventoryItem.setItem(item);
    inventoryItem.setCount(count);
    return inventoryItem;
  }

  public void addCount(int count){
    this.count += count;
  }
}
