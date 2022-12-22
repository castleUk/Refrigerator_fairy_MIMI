package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import com.example.demo.entity.InventoryItem;

public interface InventoryItemRepository extends JpaRepository<InventoryItem, Long>{
  InventoryItem findByInventoryIdAndItemId(Long inventoryId, Long itemId);
  List<InventoryItem> findByInventoryId(Long inventoryId);


}
