package com.example.demo.repository;

import static org.assertj.core.api.Assertions.*;

import com.example.demo.dto.ItemDto;
import com.example.demo.entity.Item;
import com.example.demo.service.ItemService;
import java.util.List;
import java.util.Optional;

import lombok.extern.log4j.Log4j2;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
@Log4j2
public class ItemRepositoryTest {

  @Autowired
  private ItemRepository itemRepository;
  
  @Autowired
  private ItemService itemService;

  @Test
  @DisplayName("상품 저장 테스트")
  public void 아이템등록() {


    ItemDto itemDto = ItemDto
      .builder()
      .name("test")
      .carb(0)
      .chol(0)
      .fat(9)
      .img("test")
      .kcal(0)
      .per(0)
      .potassium(0)
      .protein(0)
      .sodium(0)
      .build();

      Long id = itemService.register(itemDto);

      log.info("id : " + id);

  }

  @Test
  public void 아이템리스트등록() {
    for (int i = 1; i <= 10; i++) {
      Item item = new Item();
      item.setCarb(0 + i);
      item.setChol(0 + i);
      item.setFat(0 + i);
      item.setImg("ddd" + i);
      item.setKcal(0 + i);
      item.setName("테스트" + i);
      item.setPer(0 + i);
      item.setPotassium(0 + i);
      item.setProtein(0 + i);
      item.setSodium(0 + i);
      Item savedItem = itemRepository.save(item);
    }
  }

  @Test
  @DisplayName("상품명 조회 테스트")
  public void findByNameTest() {
    Long id = 2L;
    ItemDto itemDto = itemService.readOne(id);
    log.info(itemDto);



  }

  @Test
  @DisplayName("전체 상품 조회")
  public void 전체상품조회(){
    List<ItemDto> itemDto = itemService.readAll();

    log.info(itemDto);

  }
}
