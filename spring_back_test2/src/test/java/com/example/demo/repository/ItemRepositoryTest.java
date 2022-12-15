package com.example.demo.repository;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.context.SpringBootTest;

import com.example.demo.entity.Item;

import static org.assertj.core.api.Assertions.*;

import java.util.List;

@SpringBootTest
public class ItemRepositoryTest {

    @Autowired
    private ItemRepository itemRepository;


    @Test
    @DisplayName("상품 저장 테스트")
    public void 아이템등록() {
        Item item = new Item();
        item.setCarb(0);
        item.setChol(0);
        item.setFat(0);
        item.setImg("ddd");
        item.setKcal(0);
        item.setName("테스트");
        item.setPer(0);
        item.setPotassium(0);
        item.setProtein(0);
        item.setSodium(0);
        Item savedItem = itemRepository.save(item);
        System.out.println(savedItem.toString());
    }
        
    
    
    @Test
        public void 아이템리스트등록(){
          for(int i=1; i<=10; i++){
            Item item = new Item();
            item.setCarb(0+i);
            item.setChol(0+i);
            item.setFat(0+i);
            item.setImg("ddd"+i);
            item.setKcal(0+i);
            item.setName("테스트"+i);
            item.setPer(0+i);
            item.setPotassium(0+i);
            item.setProtein(0+i);
            item.setSodium(0+i);
            Item savedItem = itemRepository.save(item);

          }

        }

        @Test
        @DisplayName("상품명 조회 테스트")
        public void findByNameTest(){
          this.아이템리스트등록();
          List<Item> itemList = itemRepository.findByName("테스트3");
          for(Item item : itemList){
            System.out.println(item.toString());
          }
        }



}
