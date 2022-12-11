package org.zerock.api01.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.zerock.api01.domain.Member;



public interface MemberRepository extends JpaRepository<Member, String>{

  @EntityGraph(attributePaths = "roleSet")
  @Query("select m from Member m where m.userId = :userId")
  Optional<Member> getWithRoles(@Param("userId") String userId);

  
}
