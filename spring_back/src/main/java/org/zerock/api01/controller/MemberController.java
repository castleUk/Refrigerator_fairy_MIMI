package org.zerock.api01.controller;

import java.util.Map;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.zerock.api01.dto.MemberJoinDTO;
import org.zerock.api01.service.MemberService;
import org.zerock.api01.service.MemberService.MidExistException;

import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;

@RestController
@RequestMapping("/member")
@Log4j2
@RequiredArgsConstructor
public class MemberController {

  private final MemberService memberService;


  @ApiOperation(value = "회원 가입" ,notes = "POST 방식으로 회원가입")
  @PostMapping("/join")
  public Map<String, String> register(@RequestBody MemberJoinDTO memberJoinDTO) throws MidExistException
   {
    log.info("join post.............");
    log.info(memberJoinDTO);

      memberService.join(memberJoinDTO);

      return null;
 

  }
}
