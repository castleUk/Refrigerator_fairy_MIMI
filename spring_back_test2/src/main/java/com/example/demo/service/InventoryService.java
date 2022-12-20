package com.example.demo.service;

import com.example.demo.dto.InventoryItemDto;
import com.example.demo.entity.Freezer;
import com.example.demo.entity.Inventory;
import com.example.demo.entity.InventoryItem;
import com.example.demo.entity.Item;
import com.example.demo.entity.Member;
import com.example.demo.repository.FreezerRepository;
import com.example.demo.repository.InventoryItemRepository;
import com.example.demo.repository.InventoryRepository;
import com.example.demo.repository.ItemRepository;
import com.example.demo.repository.MemberRepository;

import java.util.List;
import java.util.Optional;
import javax.persistence.EntityNotFoundException;
import javax.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Transactional
@Log4j2
public class InventoryService {

  private final ItemRepository itemRepository;
  private final FreezerRepository freezerRepository;
  private final InventoryRepository inventoryRepository;
  private final InventoryItemRepository inventoryItemRepository;
  private final MemberRepository memberRepository;

  public Long addInventory(InventoryItemDto inventoryItemDto, String email, int index) {
    Item item = itemRepository
      .findById(inventoryItemDto.getItemId())
      .orElseThrow(EntityNotFoundException::new);
    log.info("1111111111111111111111111" + item);

    Member member = memberRepository.findByEmail(email).orElseThrow();
    log.info("222222222222222222222222" + member);
    List<Freezer> freezer = freezerRepository.findByMemberId(member.getId());
    log.info("33333333333333333333333333" + freezer);
    Inventory inventory = inventoryRepository.findByFreezerId(freezer.get(index).getId());
    log.info("4444444444444444444444444444" + inventory);

    if (inventory == null) {
      inventory = Inventory.createInventory(freezer.get(index));
      inventoryRepository.save(inventory);
    }

    InventoryItem savedInventoryItem = inventoryItemRepository.findByInventoryIdAndItemId(
      inventory.getId(),
      item.getId()
    );
    log.info("5555555555555555555555555" + savedInventoryItem);

    if (savedInventoryItem != null) {
      savedInventoryItem.addCount(inventoryItemDto.getCount());
      log.info("메롱1");
      return savedInventoryItem.getId();
    } else {
      InventoryItem inventoryItem = InventoryItem.createInventoryItem(
        inventory,
        item,
        inventoryItemDto.getCount()
      );
      log.info(inventoryItem);
      inventoryItemRepository.save(inventoryItem);
      log.info("메롱2");
      return inventoryItem.getId();
    }
  }
}
