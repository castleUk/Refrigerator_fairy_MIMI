package com.example.demo.dto.response;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor  //기본 생성자 생성
@Builder
//@AllArgsConstructor  /// 모든 필드를 매개변수로 하는 생성자 
public class ApiFdRespDto {
    private Long id;
    private String recipeName;
    private String recipeImg;
    

    public ApiFdRespDto(Long id, String recipeName, String recipeImg) {
        this.id = id;
        this.recipeName = recipeName;
        this.recipeImg = recipeImg;
        
    }

    

   
    // //Entity -> dto
    // public static ApiFdResDto toApiFdDto(ApiRecomend apiRecomend){
    //     ApiFdResDto apiFdDto = new ApiFdResDto();
    //     apiFdDto.setId(apiRecomend.getId());
    //     apiFdDto.setRecipeName(api.getAp);.(apiRecomend.getApi_standard());
    //     return apiFdDto;

    
   
        
}
