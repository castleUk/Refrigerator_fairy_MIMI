package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.demo.dto.InventoryItemDetailDto;
import com.example.demo.entity.InventoryItem;

public interface InventoryItemRepository extends JpaRepository<InventoryItem, Long>{
  InventoryItem findByInventoryIdAndItemId(Long inventoryId, Long itemId);
  List<InventoryItem> findByInventoryId(Long inventoryId);


  // @Query("select new com.example.demo.dto.InventoryItemDetailDto(ii.id, i.itemName, ci.count, im.imgUrl ) " +
  //     "from InventoryItem ci, ItemImg im " +
  //     " join ci.item i" +
  //     "order by ci.regTime desc"
  //     )
  // List<InventoryItemDetailDto> findInventoryItemDetailDtoList(Long InventoryId);
}
