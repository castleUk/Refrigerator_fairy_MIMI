package com.example.demo.dto;

import com.example.demo.entity.Item;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.modelmapper.ModelMapper;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ItemResponseDto {

  private String name;


  public ItemResponseDto(final Item item){
    this.name = item.getName();
  }

  public static Item item(final ItemResponseDto responseDto) {
    return Item.builder().name(responseDto.getName()).build();
  }
}
