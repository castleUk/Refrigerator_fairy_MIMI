package com.example.demo.repository;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.example.demo.entity.Freezer;
import com.example.demo.entity.Inventory;
import com.example.demo.entity.Member;

@SpringBootTest
public class testst {

  @Autowired
  FreezerRepository freezerRepository;

  @Autowired
  InventoryRepository inventoryRepository;

  @Test
  public void testInsert(){
    Long id = 5L;

    Member member = Member.builder().id(id).build();

    Freezer freezer = Freezer.builder().member(member).name("테스트").build();

    freezerRepository.save(freezer);
  }

  @Test
  public void testInventory(){
    Long id = 1L;

    Freezer freezer = Freezer.builder().id(id).build();

    Inventory inventory = Inventory.builder().freezer(freezer).build();

    inventoryRepository.save(inventory);

  }
  
}
