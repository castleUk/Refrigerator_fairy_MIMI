package org.zerock.api01.domain;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.EntityListeners;
import javax.persistence.MappedSuperclass;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import lombok.Getter;

@MappedSuperclass //공통 맵핑 정보
@EntityListeners(value = {AuditingEntityListener.class}) //엔티티 이벤트 처리 어노테이션
@Getter
abstract class BaseEntity {

  @CreatedDate
  @Column(name = "regdate", updatable = false)
  private LocalDateTime regDate;

  @LastModifiedDate
  @Column(name="moddate")
  private LocalDateTime modDate;
  
}
