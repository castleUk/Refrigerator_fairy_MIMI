package org.zerock.api01.controller;

import java.util.Map;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.zerock.api01.dto.MemberJoinDTO;
import org.zerock.api01.service.MemberService;
import org.zerock.api01.service.MemberService.MidExistException;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;

@RestController
@RequestMapping("/member")
@Log4j2
@RequiredArgsConstructor
public class MemberController {

  private final MemberService memberService;

  //로그인
  // @GetMapping("/login")
  // public void loginGet(String error, String logout) {
  //   log.info("login get................");
  //   log.info("logout : " + logout);

  //   if (logout != null) {
  //     log.info("user logout.....");
  //   }
  // }

  //회원가입
  // @GetMapping("/join")
  // public void joinGET() {
  //   log.info("join get.......");
  // }

  @PostMapping("/join")
  public Map<String, String> register(@RequestBody MemberJoinDTO memberJoinDTO) throws MidExistException
   {
    log.info("join post.............");
    log.info(memberJoinDTO);

      memberService.join(memberJoinDTO);

      return null;
 

  }
}
