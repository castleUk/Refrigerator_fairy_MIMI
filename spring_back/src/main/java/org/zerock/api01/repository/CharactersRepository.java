package org.zerock.api01.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.zerock.api01.domain.Characters;

public interface CharactersRepository extends JpaRepository<Characters, Long>{
  
}
