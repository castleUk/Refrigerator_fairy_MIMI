package com.example.demo.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@Builder
@NoArgsConstructor
public class Member extends BaseEntity {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "member_id")
  private Long id;

  @Column(nullable = false)
  private String userEmail;

  @Column(nullable = false)
  private String userPw;

  @Column(nullable = false)
  private String userName;

  @Enumerated(EnumType.STRING)
  private Authority authority;

  public void setUserName(String userName) {
    this.userName = userName;
  }

  public void setUserPw(String userPw) {
    this.userPw = userPw;
  }

  @Builder
  public Member(
    Long id,
    String userEmail,
    String userPw,
    String userName,
    Authority authority
  ) {
    this.id = id;
    this.userEmail = userEmail;
    this.userPw = userPw;
    this.userName = userName;
    this.authority = authority;
  }
}
