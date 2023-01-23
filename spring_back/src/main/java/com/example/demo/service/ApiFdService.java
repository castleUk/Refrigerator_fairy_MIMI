package com.example.demo.service;


import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collector;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.example.demo.dto.response.ApiFdRespDto;
import com.example.demo.entity.ApiRecomend;
import com.example.demo.repository.ApiFdRepository;
import lombok.Builder;
import lombok.RequiredArgsConstructor;

@Builder
@RequiredArgsConstructor
@Service
public class ApiFdService {

    private final ApiFdRepository apiFdRepository;
    

    //시간에 따른 추천 레시피 들고오기
    //사실상 timeMenuList에는 아침 점심 저녁 칼럼이 있는데 현재 시간에 따라 아침 점심 저녁 레시피를 보여준다. 
    //현재시간을 어떻게 아침,점심,메뉴 레시피에 매치 해 시켜줄 수 있을까?
    // @scheduled?
    public List<ApiFdRespDto> StandardRecomend(String standard) {
           List<ApiRecomend> apiRecipeNameList = apiFdRepository
           .findByStandard(standard);
          
          List<ApiFdRespDto> result = apiRecipeNameList.stream()
           .map(ApiRecomend::toApiFdEntity).collect(Collectors.toList());

           return result;
           


   

               
         

         
         
        }
      }


