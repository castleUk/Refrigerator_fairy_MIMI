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
      HttpStatus.OK
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
  public ResponseEntity<?> modifyInventoryItem(
    @PathVariable("itemId") Long itemId,
    @PathVariable("index") int index,
    @RequestBody InventoryItemReqDto inventoryItemDto
  ) {
    String email = memberService.getMyInfoBySecurity().getUserEmail();
    InventoryItemRespDto inventoryItemRespDto = inventoryService.modifyInventoryItem(
      email,
      index,
      itemId,
      inventoryItemDto
    );

    return new ResponseEntity<>(
      CMRespDto
        .builder()
        .code(1)
        .msg("냉장고아이템 수정 성공")
        .body(inventoryItemRespDto)
        .build(),
      HttpStatus.OK
    );
  }

  //삭제
  @DeleteMapping("/{index}/{itemId}")
  public ResponseEntity<?> deleteInventoryItem(
    @PathVariable("itemId") Long itemId,
    @PathVariable("index") int index
  ) {
    String email = memberService.getMyInfoBySecurity().getUserEmail();
    inventoryService.deleteInventoryItem(email, index, itemId);

    return new ResponseEntity<>(
      CMRespDto
        .builder()
        .code(1)
        .msg("냉장고아이템 삭제 성공")
        .body(null)
        .build(),
      HttpStatus.OK
    );
  }
}
