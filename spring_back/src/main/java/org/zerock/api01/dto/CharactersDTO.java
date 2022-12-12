package org.zerock.api01.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CharactersDTO {

  private Long charKey;

  private String charName;

  private Long userKey;

  
}
