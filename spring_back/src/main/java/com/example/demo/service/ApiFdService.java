package com.example.demo.service;

import com.example.demo.dto.response.ApiFdListRespDto;
import com.example.demo.dto.response.ApiFdRespDto;
import com.example.demo.entity.ApiRecommend;
import com.example.demo.repository.ApiFdRepository;
import java.util.List;
import java.util.stream.Collectors;
import lombok.Builder;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Builder
@RequiredArgsConstructor
@Service
public class ApiFdService {

  private final ApiFdRepository apiFdRepository;

  public ApiFdListRespDto StandardRecommend(String standard) {
    List<ApiRecommend> apiRecipeNameList = apiFdRepository.findByStandard(
      standard
    );

    List<ApiFdRespDto> result = apiRecipeNameList
      .stream()
      .map(ApiRecommend::toApiFdEntity)
      .collect(Collectors.toList());

    ApiFdListRespDto list = ApiFdListRespDto.builder().dtoList(result).build();

    return list;
  }
}
