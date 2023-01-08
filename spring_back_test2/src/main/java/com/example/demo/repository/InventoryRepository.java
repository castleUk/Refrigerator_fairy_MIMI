package com.example.demo.repository;

import com.example.demo.entity.Inventory;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InventoryRepository extends JpaRepository<Inventory, Long> {
  Inventory findByFreezerId(Long freezerid);
  // List<Inventory> findAllByFreezer(String ??);
}
