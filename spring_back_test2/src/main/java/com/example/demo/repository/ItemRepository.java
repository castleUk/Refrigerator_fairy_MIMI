package com.example.demo.repository;

import org.springframework.stereotype.Repository;

import com.example.demo.entity.Item;

@Repository
public interface ItemRepository extends JpaRepository<Item, Long> {
  Item findItemById(Long id);
  
}
