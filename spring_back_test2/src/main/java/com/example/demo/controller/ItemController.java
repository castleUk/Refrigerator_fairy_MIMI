package com.example.demo.controller;

import com.example.demo.dto.ItemRequestDto;
import com.example.demo.dto.ItemResponseDto;
import com.example.demo.entity.Item;
import com.example.demo.service.ItemService;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/item")
public class ItemController {

  private final ItemService itemService;

  @PostMapping("/add")  //상품추가
  public ResponseEntity<ItemResponseDto> add(
    @RequestBody ItemRequestDto requestDto
  ) throws Exception {
    return ResponseEntity.ok(itemService.saveItem(requestDto));
  }

  // @PutMapping("/{id}")  //상품수정 ... -> 수정요망
  // public ResponseEntity<ItemResponseDto> modify(@PathVariable("id") Long id,ItemRequestDto requestDto)throws Exception {
  //   return ResponseEntity.ok(itemService.updateItem(requestDto));
  // }

  @GetMapping  // 상품목록 받기
  public ResponseEntity<List<Item>> list() throws Exception {
    return new ResponseEntity<>(itemService.list(), HttpStatus.OK);
  }

  @GetMapping("/{id}")
  public ResponseEntity<Item> read(@PathVariable("id") Long id) throws Exception{
    Item item = itemService.read(id);

    return new ResponseEntity<>(item, HttpStatus.OK);
  }
}
