package org.zerock.api01.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.zerock.api01.domain.Member;

public interface APIUserRepository extends JpaRepository<Member, String> {

  Optional<Member> findByUserId(String userId);
}

