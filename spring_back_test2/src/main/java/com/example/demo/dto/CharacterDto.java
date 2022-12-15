package com.example.demo.dto;

import java.time.format.DateTimeFormatter;

import com.example.demo.entity.Character;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class CharacterDto {
  private Long characterId;
  private String characterName;
  private String memberNickname;
  private String characterCreatedAt;
  private boolean isAdd;

  
  public static CharacterDto of(Character character, boolean bool){
    return CharacterDto.builder()
                .characterId(character.getId())
                .characterName(character.getName())
                .memberNickname(character.getMember().getNickname())
                .characterCreatedAt(character.getCreatedAt().format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss")))
                .isAdd(bool)
                .build();
  }
}
