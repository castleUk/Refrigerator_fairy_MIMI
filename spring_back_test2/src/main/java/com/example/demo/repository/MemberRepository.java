package com.example.demo.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.Member;

public interface MemberRepository extends JpaRepository<Member, Long> {
  Optional<Member> findByUserEmail(String userEmail); // Email로 Member를 찾음
  boolean existsByUserEmail(String userEmail); // Email이 존재하는가 판별
}
