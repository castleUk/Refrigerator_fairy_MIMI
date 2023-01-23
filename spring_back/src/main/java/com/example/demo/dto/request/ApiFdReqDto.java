package com.example.demo.dto.request;





import com.example.demo.entity.ApiRecomend;
import com.example.demo.entity.Recipe;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor  //기본 생성자 생성
@Builder
//@AllArgsConstructor  /// 모든 필드를 매개변수로 하는 생성자 
public class ApiFdReqDto {
    private Long id;
    private String api_standard;
    private Recipe recipe;

    public ApiFdReqDto(Long id, String api_standard, Recipe recipe) {
        this.id = id;
        this.api_standard = api_standard;
        this.recipe = recipe;
        
    }

    //dto -> entity
    public ApiFdReqDto toApiFdEntity(){
        return ApiFdReqDto.builder().id(id)
                                    .api_standard(api_standard) 
                                    .recipe(recipe) 
                                    .build();
                                
    }
    // //Entity -> dto
    // public static ApiFdReqDto toApiFdDto(ApiRecomend apiRecomend){
    //     ApiFdReqDto apiFdDto = new ApiFdReqDto();
    //     apiFdDto.setId(apiRecomend.getId());
    //     apiFdDto.setApi_standard(apiRecomend.getApi_standard());
    //     apiFdDto.setName(Recipe.getName());
    //     return apiFdDto;

    // }
   
  

   
        
}