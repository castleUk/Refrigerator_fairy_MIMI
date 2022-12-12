package org.zerock.api01.service;

import java.util.List;

import org.zerock.api01.domain.Characters;
import org.zerock.api01.dto.CharactersDTO;

public interface CharactersService {

  Long register(CharactersDTO charactersDTO);

  CharactersDTO read(Long charKey);

  void modify(CharactersDTO charactersDTO);

  void remove(Long charKey);

  List<Characters> getList();





  
}
