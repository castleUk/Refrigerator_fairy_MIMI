package com.example.demo.dto;

import com.example.demo.entity.Freezer;
import com.example.demo.entity.Member;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class FreezerRequestDto {

  private Long id;

  private String name;

  private Member member;

  public static FreezerRequestDto of(Freezer freezer) {
    return FreezerRequestDto
      .builder()
      .id(freezer.getId())
      .name(freezer.getName())
      .member(freezer.getMember())
      .build();
  }
  
  
}
