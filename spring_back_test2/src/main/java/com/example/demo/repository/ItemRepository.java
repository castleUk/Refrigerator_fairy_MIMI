package com.example.demo.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.Item;


@Repository
public interface ItemRepository extends JpaRepository<Item, Long> {
  Optional<Item> findByName(String name);
  List<Item> findByNameContaining(String name);


  
  
}
