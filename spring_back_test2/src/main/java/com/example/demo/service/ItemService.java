package com.example.demo.service;

import com.example.demo.dto.ItemDto;
import com.example.demo.entity.Item;
import com.example.demo.repository.ItemRepository;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import lombok.RequiredArgsConstructor;

import org.modelmapper.ModelMapper;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
@RequiredArgsConstructor
public class ItemService {

  private final ItemRepository itemRepository;

  private final ModelMapper modelMapper;

  //상품등록
  public Long register(ItemDto itemDto) {
    Item item = modelMapper.map(itemDto, Item.class);

    Long id = itemRepository.save(item).getId();

    return id;
  }

  //상품 조회
  public ItemDto readOne(Long id) {
    Optional<Item> result = itemRepository.findById(id);

    Item item = result.orElseThrow();

    ItemDto itemDto = modelMapper.map(item, ItemDto.class);

    return itemDto;
  }

  //상품 수정
  public void modify(ItemDto itemDto) {
    Optional<Item> result = itemRepository.findById(itemDto.getId());

    Item item = result.orElseThrow();

    item.change(itemDto);

    itemRepository.save(item);
  }

  //삭제 처리
  public void remove(Long id) {
    itemRepository.deleteById(id);
  }


 // 전체 목록
 public List<ItemDto> readAll(){
  List<Item> result = itemRepository.findAll();

  List<ItemDto> resultList = result.stream().map(item -> modelMapper.map(result, ItemDto.class)).collect(Collectors.toList());

  return resultList;


 }
}
