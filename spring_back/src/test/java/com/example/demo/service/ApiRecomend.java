package com.example.demo.service;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;

import com.example.demo.repository.ApiFdRepository;

public class ApiRecomend {

    @Autowired
    ApiFdRepository apiFdRepository;
    

    
    

    @Test
    void findByApi_standard() {
        ApiRecomend apiRecomend = new ApiRecomend();
        String Api_standard = "봄";

        apiFdRepository.findByApi_standard("봄");
    }

}
