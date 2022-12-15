package com.example.demo.entity;

import com.example.demo.dto.FreezerRequestDto;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@ToString
public class Freezer  extends BaseEntity{

  @Id
  @GeneratedValue
  @Column(name = "freezer_id")
  private Long id;

  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "member_id")
  private Member member;

  @Column
  private String name;

  public static Freezer createFreezer(FreezerRequestDto freezerRequestDto) {
    Freezer freezer = new Freezer();
    freezer.setName(freezerRequestDto.getName());
    return freezer;
  }
}
