package org.zerock.api01.service;

import java.util.List;
import java.util.Optional;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.zerock.api01.domain.Characters;
import org.zerock.api01.dto.CharactersDTO;
import org.zerock.api01.repository.CharactersRepository;

@Service
@RequiredArgsConstructor
@Log4j2
public class CharactersServiceImpl implements CharactersService {

  private final CharactersRepository charactersRepository;
  private final ModelMapper modelMapper;

  @Override
  public Long register(CharactersDTO charactersDTO) {
    Characters characters = modelMapper.map(charactersDTO, Characters.class);

    Long charKey = charactersRepository.save(characters).getCharKey();

    return charKey;
  }

  @Override
  public CharactersDTO read(Long charKey) {
    Optional<Characters> charactersOptional = charactersRepository.findById(
      charKey
    );

    Characters characters = charactersOptional.orElseThrow();

    return modelMapper.map(characters, CharactersDTO.class);
  }

  @Override
  public void modify(CharactersDTO charactersDTO) {
    Optional<Characters> charactersOptional = charactersRepository.findById(
      charactersDTO.getCharKey()
    );

    Characters characters = charactersOptional.orElseThrow();

    characters.changeName(charactersDTO.getCharName());

    charactersRepository.save(characters);
  }

  @Override
  public void remove(Long charKey) {
    charactersRepository.deleteById(charKey);
  }


  @Override
  public List<Characters> getList() {
    return charactersRepository.findAll();
  }
}
