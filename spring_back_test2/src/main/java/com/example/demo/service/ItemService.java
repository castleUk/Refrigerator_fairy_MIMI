package com.example.demo.service;

import com.example.demo.dto.ItemRequestDto;
import com.example.demo.dto.ItemResponseDto;
import com.example.demo.entity.Item;
import com.example.demo.repository.ItemRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
@RequiredArgsConstructor
public class ItemService {

  private final ItemRepository itemRepository;

  public ItemResponseDto saveItem(ItemRequestDto requestDto) throws Exception {
    //상품 등록
    Item item = requestDto.createItem();

    return ItemResponseDto.of(itemRepository.save(item));
  }
}
