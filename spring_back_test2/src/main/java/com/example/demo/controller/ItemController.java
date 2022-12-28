package com.example.demo.controller;

import com.example.demo.dto.ItemDto;
import com.example.demo.service.ItemService;
import java.util.List;
import lombok.RequiredArgsConstructor;
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
@RequestMapping("/api/item")
public class ItemController {

  private final ItemService itemService;

  @PostMapping("/add") //상품추가
  public ResponseEntity<Long> addItem(@RequestBody ItemDto requestDto)
    throws Exception {
    return ResponseEntity.ok(itemService.register(requestDto));
  }

  @PutMapping("/{itemId}") //상품수정 ... -> 수정요망
  public void modifyItem(
    @PathVariable("itemId") Long itemId,
    @RequestBody ItemDto requestDto
  ) throws Exception {
    itemService.modify(requestDto);
  }

  @GetMapping // 상품목록 받기
  public ResponseEntity<List<ItemDto>> readAllItem() throws Exception {
    return ResponseEntity.ok(itemService.readAll());
  }

  @GetMapping("/{itemName}")
  public ResponseEntity<ItemDto> readOneItem(
    @PathVariable("itemName") String itemName
  ) throws Exception {
    return ResponseEntity.ok(itemService.readOne(itemName));
  }

  @DeleteMapping("/{itemId}")
  public void deleteItem(@PathVariable("itemId") Long itemId) throws Exception {
    itemService.remove(itemId);
  }
}
