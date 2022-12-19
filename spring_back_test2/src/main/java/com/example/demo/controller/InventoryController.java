package com.example.demo.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.InventoryItemDto;
import com.example.demo.service.InventoryService;
import com.example.demo.service.MemberService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/inventory")
public class InventoryController {

  private final InventoryService inventoryService;
  private final MemberService memberService;

  @PostMapping("/add")
  public @ResponseBody ResponseEntity order(@RequestBody InventoryItemDto inventoryItemDto){
    String email = memberService.getMyInfoBySecurity().getEmail();
    Long inventoryItemId;

    inventoryItemId = inventoryService.addInventory(inventoryItemDto, email);

    return new ResponseEntity<Long>(inventoryItemId, HttpStatus.OK);
    

  }
}
