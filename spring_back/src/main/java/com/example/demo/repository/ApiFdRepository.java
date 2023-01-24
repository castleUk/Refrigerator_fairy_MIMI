package com.example.demo.repository;

import com.example.demo.entity.ApiRecommend;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ApiFdRepository extends JpaRepository<ApiRecommend, Long> {
  //레시피 이름 찾기
  // 레시피 이름만 찾는게 아니라 Api_standard 기준에 따른 recipeName을 들고와야하니까
  // List<ApiRecomend> findByStandardAndRecipeName(String recipeName, String Api_standard);????

  //한 행씩 들고온다 ex 봄 recipe_id 30
  List<ApiRecommend> findByStandard(String standard);
}
