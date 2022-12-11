package org.zerock.api01.repository;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.zerock.api01.domain.Characters;
import org.zerock.api01.domain.Member;

import lombok.extern.log4j.Log4j2;

@SpringBootTest
@Log4j2
public class CharactersRepositoryTests {

  @Autowired
  private CharactersRepository charactersRepository;

  @Test
  public void testInsert(){
    Long userKey = 1L;

    Member member = Member.builder().userKey(userKey).build();

    Characters characters = Characters.builder().member(member).charName("first").build();

    charactersRepository.save(characters);
  }
  
}
