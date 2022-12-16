package com.example.demo.service;

import com.example.demo.dto.ItemRequestDto;
import com.example.demo.dto.ItemResponseDto;
import com.example.demo.entity.Item;
import com.example.demo.repository.ItemRepository;
import java.util.List;
import javax.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
@RequiredArgsConstructor
public class ItemService {

  private final ItemRepository itemRepository;

  @Transactional //상품등록
  public ItemRequestDto saveItem(ItemRequestDto requestDto) throws Exception {
    Item item = requestDto.item();
    return ItemRequestDto.of(itemRepository.save(item));
  }

  @Transactional //상품리스트
  public List<Item> list() throws Exception {
    return itemRepository.findAll();
  }

  @Transactional //상품상세조회
  public Item read(Long id) throws Exception {
    return itemRepository.getReferenceById(id);
  }

  @Transactional  //상품 수정
 public ItemResponseDto updateItem(ItemRequestDto requestDto)throws Exception{
  Item item = itemRepository.findById(requestDto.getId()).orElseThrow(EntityNotFoundException::new);
  item.updateItem(requestDto);

  return ItemResponseDto.of(itemRepository.save(item));
 }
}
