package com.example.demo.service;



import java.util.List;
import java.util.stream.Collectors;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.dto.CharacterDto;
import com.example.demo.repository.CharacterRepository;
import com.example.demo.entity.Character;

import lombok.RequiredArgsConstructor;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class CharacterService {
  private final CharacterRepository characterRepository;

  public CharacterDto oneCharacter(Long id){
    Character character = characterRepository.findById(id).orElseThrow(() -> new RuntimeException("캐릭터가 없습니다"));
    Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
    if(authen)
  }
}
