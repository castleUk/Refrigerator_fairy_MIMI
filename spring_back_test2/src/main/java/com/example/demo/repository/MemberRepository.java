package com.example.demo.repository;

import com.example.demo.entity.Member;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

public interface MemberRepository extends JpaRepository<Member, Long> {
  Optional<Member> findByEmail(String email); // Email로 Member를 찾음
  boolean existsByEmail(String email); // Email이 존재하는가 판별
}
