package com.example.demo.service;

import com.example.demo.dto.InventoryItemDto;
import com.example.demo.dto.ItemDto;
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
import java.util.stream.Collectors;
import javax.persistence.EntityNotFoundException;
import javax.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Transactional
@Log4j2
public class InventoryService {

  private final ModelMapper modelMapper;

  private final ItemRepository itemRepository;
  private final FreezerRepository freezerRepository;
  private final InventoryRepository inventoryRepository;
  private final InventoryItemRepository inventoryItemRepository;
  private final MemberRepository memberRepository;

  //인벤토리 추가 및 아이템 담기
  public Long addInventory(
    InventoryItemDto inventoryItemDto,
    String userEmail,
    int index
  ) {
    Item item = itemRepository
      .findById(inventoryItemDto.getItemId())
      .orElseThrow(EntityNotFoundException::new);

    Member member = memberRepository.findByUserEmail(userEmail).orElseThrow();
    List<Freezer> freezer = freezerRepository.findByMemberId(member.getId());
    Inventory inventory = inventoryRepository.findByFreezerId(
      freezer.get(index).getId()
    );

    if (inventory == null) {
      inventory = Inventory.createInventory(freezer.get(index));
      inventoryRepository.save(inventory);
    }

    InventoryItem savedInventoryItem = inventoryItemRepository.findByInventoryIdAndItemId(
      inventory.getId(),
      item.getId()
    );

    if (savedInventoryItem != null) {
      savedInventoryItem.addCount(inventoryItemDto.getCount());
      return savedInventoryItem.getId();
    } else {
      InventoryItem inventoryItem = InventoryItem.createInventoryItem(
        inventory,
        item,
        inventoryItemDto.getCount()
      );
      inventoryItemRepository.save(inventoryItem);
      return inventoryItem.getId();
    }
  }

  // 전체 리스트 조회
  public List<InventoryItemDto> readAllInventoryItemList(
    String userEmail,
    int index
  ) {
    Member member = memberRepository.findByUserEmail(userEmail).orElseThrow();
    List<Freezer> freezer = freezerRepository.findByMemberId(member.getId());
    Inventory inventory = inventoryRepository.findByFreezerId(
      freezer.get(index).getId()
    );
    List<InventoryItemDto> inventoryItem = inventoryItemRepository
      .findByInventoryId(inventory.getId())
      .stream()
      .map(InventoryItemDto::of)
      .collect(Collectors.toList());
    return inventoryItem;
  }

  // 개별 조회
  public ItemDto readOneInventoryItem(String userEmail, int index, Long itemId) {
    Member member = memberRepository.findByUserEmail(userEmail).orElseThrow();
    List<Freezer> freezer = freezerRepository.findByMemberId(member.getId());
    Inventory inventory = inventoryRepository.findByFreezerId(
      freezer.get(index).getId()
    );
    Item inventoryItem = inventoryItemRepository
      .findByInventoryIdAndItemId(inventory.getId(), itemId)
      .getItem();
    ItemDto dto = modelMapper.map(inventoryItem, ItemDto.class);
    return dto;
  }

  // 수정
  public void modifyInventoryItem(
    String userEmail,
    int index,
    Long itemId,
    InventoryItemDto inventoryItemDto
  ) {
    Member member = memberRepository.findByUserEmail(userEmail).orElseThrow();
    List<Freezer> freezer = freezerRepository.findByMemberId(member.getId());
    Inventory inventory = inventoryRepository.findByFreezerId(
      freezer.get(index).getId()
    );
    InventoryItem inventoryItem = inventoryItemRepository.findByInventoryIdAndItemId(
      inventory.getId(),
      itemId
    );

    inventoryItem.change(inventoryItemDto);
  }

  // 삭제
  public void deleteInventoryItem(String userEmail, int index, Long itemId) {
    Member member = memberRepository.findByUserEmail(userEmail).orElseThrow();
    List<Freezer> freezer = freezerRepository.findByMemberId(member.getId());
    Inventory inventory = inventoryRepository.findByFreezerId(
      freezer.get(index).getId()
    );
    InventoryItem inventoryItem = inventoryItemRepository.findByInventoryIdAndItemId(
      inventory.getId(),
      itemId
    );
    inventoryItemRepository.delete(inventoryItem);
  }
}
