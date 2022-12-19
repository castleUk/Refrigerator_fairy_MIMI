package com.example.demo.repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.Freezer;

public interface FreezerRepository extends JpaRepository<Freezer, Long>{
    List<Freezer> findByMemberId(Long memberId);

}
