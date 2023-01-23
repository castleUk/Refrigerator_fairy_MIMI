package com.example.demo.entity;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.example.demo.dto.request.ApiFdReqDto;
import com.example.demo.dto.response.ApiFdRespDto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ApiRecomend {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length=30, nullable = false)
    private String standard;  ///봄,여름,가을,겨울,아침,점심,저녁.....  // 한 행을 가져온다.
    

    @ManyToOne //N:1
    //회원과 핸드폰의 관계에서 핸드폰을 보면 됩니다. 핸드폰은 자신을 소유한 회원이 있습니다. 하지만 이 회원은 핸드폰을 여러개 소지할 수도 있고 
    //하나만 소지할 수도 있겠죠. 회원쪽에서 핸드폰을 바라본다면 @OneToMany 관계지만 핸드폰이 회원을 바라본다면 @ManyToOne이 되는겁니다
    @JoinColumn(name = "recipe_id")
    private Recipe recipe;



     //dto -> entity
    public ApiFdRespDto toApiFdEntity(){
        return ApiFdRespDto.builder().id(id).recipeName(recipe.getName()).recipeImg(recipe.getImg()).build();
                                
    }
    

   // entity -> RespDto 
    public ApiFdRespDto toApiFdRespDto(){
        return ApiFdRespDto
        .builder()
        .id(id)
        .recipeName(recipe.getName())
        .recipeImg(recipe.getImg())
        .build();
    }
    

    

}
