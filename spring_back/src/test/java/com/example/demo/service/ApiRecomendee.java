package com.example.demo.service;

import java.util.Arrays;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import com.example.demo.entity.ApiRecomend;
import com.example.demo.repository.ApiFdRepository;

@DataJpaTest
@AutoConfigureTestDatabase(replace = Replace.NONE)
public class ApiRecomendee{

    @Autowired
    ApiFdRepository apiFdRepository;
    



    @Test
    void findByApi() {
        
        String standard = "봄";
        
        List<ApiRecomend> result = apiFdRepository.findByStandard(standard);
        result.forEach(s -> System.out.println("result" + s.getRecipe().getName() ));
    }

}
