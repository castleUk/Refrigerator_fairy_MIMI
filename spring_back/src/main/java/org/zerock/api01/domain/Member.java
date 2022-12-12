package org.zerock.api01.domain;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString(exclude = "roleSet")
public class Member extends BaseEntity {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long userKey;

  private String userName;
  private String userId;
  private String userPw;

  private String userPhone;
  private String userEmail;

  @ElementCollection(fetch = FetchType.LAZY)
  @Builder.Default
  private Set<MemberRole> roleSet = new HashSet<>();

  public void changePassword(String userPw) {
    this.userPw = userPw;
  }

  public void changeEmail(String userEmail) {
    this.userEmail = userEmail;
  }

  public void addRole(MemberRole memberRole) {
    this.roleSet.add(memberRole);
  }

  public void clearRoles() {
    this.roleSet.clear();
  }


}
