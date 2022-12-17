package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.InventoryItem;

public interface InventoryItemRepository extends JpaRepository<InventoryItem, Long>{
  InventoryItem findByInventoryIdAndItemId(Long inventoryId, Long itemId);
  
}
