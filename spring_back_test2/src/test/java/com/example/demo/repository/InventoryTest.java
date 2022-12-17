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
import com.example.demo.dto.InventoryItemDto;
import com.example.demo.entity.Freezer;
import com.example.demo.entity.Inventory;
import com.example.demo.entity.InventoryItem;
import com.example.demo.entity.Item;
import com.example.demo.entity.Member;
import com.example.demo.service.InventoryService;

@SpringBootTest
@Transactional
public class InventoryTest {

  @Autowired
  ItemRepository itemRepository;

  @Autowired
  MemberRepository memberRepository;

  @Autowired
  InventoryService inventoryService;

  @Autowired
  InventoryItemRepository InventoryItemRepository;
  
  @Autowired
  InventoryRepository inventoryRepository;

  @Autowired
  FreezerRepository freezerRepository;

  public Item saveItem(){
    Item item = Item.builder().name("장바구니담기 테스트").carb(0).chol(0).fat(0).img("df").kcal(0).per(0).potassium(0).protein(0).sodium(0).build();
    return itemRepository.save(item);
  }


  public Freezer createFreezer(){
    Freezer freezer = Freezer.builder().name("프리저").build();
    return freezerRepository.save(freezer);
  }

  public Member saveMember(){
    Member member = Member.builder().email("test@test.com").nickname("dfdf").password("test").build();
    return memberRepository.save(member);
  }

  

  @Test
  @DisplayName("인벤토리 프리저 엔티티 매핑 조회 테스트")
  public void addCart(){
    Item item = saveItem();
    Member member =  saveMember();
    Freezer freezer = createFreezer();

    InventoryItemDto inventoryItemDto = new InventoryItemDto();
    inventoryItemDto.setCount(5);
    inventoryItemDto.setItemId(item.getId());

    Long inventoryItemId = inventoryService.addInventory(inventoryItemDto, "test4");

    // InventoryItem inventoryitem = InventoryItemRepository.findById(inventoryItemId).orElseThrow();

    // assertEquals(item.getId(), inventoryitem.getItem().getId());
    // assertEquals(inventoryItemDto.getCount(), inventoryitem.getCount());


  }

    

  }


