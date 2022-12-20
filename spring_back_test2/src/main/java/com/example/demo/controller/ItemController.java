package com.example.demo.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.ItemDto;
import com.example.demo.entity.Item;
import com.example.demo.service.ItemService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/item")
public class ItemController {

  private final ItemService itemService;

  @PostMapping("/add")  //상품추가
  public ResponseEntity<Long> add(
    @RequestBody ItemDto requestDto
  ) throws Exception {
   
  return ResponseEntity.ok(itemService.register(requestDto));
  }

  @PutMapping("/{id}")  //상품수정 ... -> 수정요망
  public void modify(@PathVariable("id") Long id, ItemDto requestDto)throws Exception {
    itemService.modify(requestDto);
  }

  @GetMapping  // 상품목록 받기
  public ResponseEntity<List<ItemDto>> list() throws Exception {
    return ResponseEntity.ok(itemService.readAll());
  }

  @GetMapping("/{id}")
  public ResponseEntity<ItemDto> read(@PathVariable("id") Long id) throws Exception{
    return ResponseEntity.ok(itemService.readOne(id));
  }


  @DeleteMapping("/{id}")
  public void delete(@PathVariable("id") Long id) throws Exception{
    itemService.remove(id);
  }
}
