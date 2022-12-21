package com.example.demo.controller;

import com.example.demo.dto.InventoryItemDto;
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
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/inventory")
public class InventoryController {

  private final InventoryService inventoryService;
  private final MemberService memberService;

  //추가
  @PostMapping("/add")
  public ResponseEntity<?> addInventoryItem(@RequestBody InventoryItemDto inventoryItemDto,int index
  ) {
    String email = memberService.getMyInfoBySecurity().getEmail();
    Long inventoryItemId;

    inventoryItemId =
      inventoryService.addInventory(inventoryItemDto, email, index);

    return new ResponseEntity<Long>(inventoryItemId, HttpStatus.OK);
  }

  //전체 조회
  @GetMapping("/{index}")
  public ResponseEntity<?> readAllInventoryItem(@PathVariable int index) {
    String email = memberService.getMyInfoBySecurity().getEmail();
    return ResponseEntity.ok(
      inventoryService.readAllInventoryItemList(email, index)
    );
  }

  //개별 조회
  @GetMapping("/{index}/{id}")
  public ResponseEntity<?> readOneInventoryItem(
    @PathVariable("id") Long id,
    @PathVariable("index") int index
  ) {
    String email = memberService.getMyInfoBySecurity().getEmail();
    return ResponseEntity.ok(
      inventoryService.readOneInventoryItem(email, index, id)
    );
  }

  //수정
  @PutMapping("/{index}/{id}")
  public void modifyInventoryItem(@PathVariable("id") Long id,
  @PathVariable("index") int index, @RequestBody InventoryItemDto inventoryItemDto){
    String email = memberService.getMyInfoBySecurity().getEmail();
    inventoryService.modifyInventoryItem(email, index, id, inventoryItemDto);
  }

   //삭제
   @DeleteMapping("/{index}/{id}")
   public void deleteInventoryItem(@PathVariable("id") Long id,
   @PathVariable("index") int index){
     String email = memberService.getMyInfoBySecurity().getEmail();
     inventoryService.deleteInventoryItem(email, index, id);
   }

}
