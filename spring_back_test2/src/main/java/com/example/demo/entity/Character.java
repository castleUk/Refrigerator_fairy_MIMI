package com.example.demo.entity;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

import org.hibernate.annotations.CreationTimestamp;

import lombok.Getter;

@Entity
@Getter
public class Character {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "character_id")
  private Long id;

  @Column(nullable = false)
  private String name;

  @CreationTimestamp
  @Column
  private LocalDateTime createdAt = LocalDateTime.now();

  @OneToOne
  @JoinColumn(name = "inventory_id")
  private Inventory inventory;

  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "member_id")
  private Member member;

  public static Character createCharacter (String name, Member member) {
    Character character = new Character();
    character.name = name;
    character.member = member;

    return character;
}

public static Character changeCharacter (Character character, String name) {
  character.name = name;

  return character;
}
}
