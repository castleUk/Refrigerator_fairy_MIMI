package com.example.demo.controller;

import com.example.demo.dto.request.InventoryItemReqDto;
import com.example.demo.dto.response.CMRespDto;
import com.example.demo.dto.response.InventoryItemListRespDto;
import com.example.demo.dto.response.InventoryItemRespDto;
import com.example.demo.service.InventoryService;
import com.example.demo.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/inventory")
public class InventoryController {

  private final InventoryService inventoryService;
  private final MemberService memberService;

  //추가
  @PostMapping("/add")
  public ResponseEntity<?> addInventoryItem(
    @RequestBody InventoryItemReqDto inventoryItemReqDto,
    int index
  ) {
    String email = memberService.getMyInfoBySecurity().getUserEmail();

    InventoryItemRespDto inventoryItemRespDto = inventoryService.addInventory(
      inventoryItemReqDto,
      email,
      index
    );

    return new ResponseEntity<>(
      CMRespDto
        .builder()
        .code(1)
        .msg("냉장고에 아이템 등록 성공")
        .body(inventoryItemRespDto)
        .build(),
      HttpStatus.CREATED
    );
  }

  //전체 조회
  @GetMapping("/{index}")
  public ResponseEntity<?> getAllInventoryItem(@PathVariable int index) {
    String email = memberService.getMyInfoBySecurity().getUserEmail();

    InventoryItemListRespDto inventoryItemListRespDto = inventoryService.getInventoryItemList(
      email,
      index
    );
    return new ResponseEntity<>(
      CMRespDto
        .builder()
        .code(1)
        .msg("냉장고아이템 조회 성공")
        .body(inventoryItemListRespDto)
        .build(),
      HttpStatus.CREATED
    );
  }

  // //개별 조회
  // @GetMapping("/{index}/{itemId}")
  // public ResponseEntity<?> readOneInventoryItem(
  //   @PathVariable("itemId") Long itemId,
  //   @PathVariable("index") int index
  // ) {
  //   String email = memberService.getMyInfoBySecurity().getUserEmail();
  //   return ResponseEntity.ok(
  //     inventoryService.readOneInventoryItem(email, index, itemId)
  //   );
  // }

  //수정
  @PutMapping("/{index}/{itemId}")
  public void modifyInventoryItem(
    @PathVariable("itemId") Long itemId,
    @PathVariable("index") int index,
    @RequestBody InventoryItemReqDto inventoryItemDto
  ) {
    String email = memberService.getMyInfoBySecurity().getUserEmail();
    inventoryService.modifyInventoryItem(
      email,
      index,
      itemId,
      inventoryItemDto
    );
  }

  //삭제
  @DeleteMapping("/{index}/{itemId}")
  public void deleteInventoryItem(
    @PathVariable("itemId") Long itemId,
    @PathVariable("index") int index
  ) {
    String email = memberService.getMyInfoBySecurity().getUserEmail();
    inventoryService.deleteInventoryItem(email, index, itemId);
  }
}
