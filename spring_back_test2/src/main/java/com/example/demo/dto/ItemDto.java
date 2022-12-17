package com.example.demo.dto;

import com.example.demo.entity.Item;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.modelmapper.ModelMapper;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ItemDto {

  private Long id;

  private String name;

  private String img;

  private int per;

  private int kcal;

  private int fat;

  private int chol;

  private int sodium;

  private int potassium;

  private int carb;

  private int protein;

}
