package com.example.demo.repository;

import static org.junit.jupiter.api.Assertions.assertEquals;

import javax.persistence.EntityManager;
import javax.persistence.EntityNotFoundException;
import javax.persistence.PersistenceContext;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.dto.FreezerRequestDto;
import com.example.demo.entity.Freezer;
import com.example.demo.entity.Inventory;

@SpringBootTest
@Transactional
public class InventoryTest {
  
  @Autowired
  InventoryRepository inventoryRepository;

  @Autowired
  FreezerRepository freezerRepository;

  @PersistenceContext
  EntityManager em;

  public Freezer createFreezer(){
    FreezerRequestDto freezerRequestDto  = new FreezerRequestDto();
    freezerRequestDto.setName("프리저001");
    return Freezer.createFreezer(freezerRequestDto);

  }

  @Test
  @DisplayName("인벤토리 프리저 엔티티 매핑 조회 테스트")
  public void 암튼그래(){
    Freezer freezer = createFreezer();
    freezerRepository.save(freezer);

    Inventory inventory = new Inventory();
    inventory.setFreezer(freezer);
    inventoryRepository.save(inventory);

    em.flush();
    em.clear();

    Inventory savedInventory = inventoryRepository.findById(inventory.getId()).orElseThrow(EntityNotFoundException::new);
    assertEquals(savedInventory.getFreezer().getId(), freezer.getId());


    

  }


  
  
}
