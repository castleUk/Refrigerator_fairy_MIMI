package com.example.demo.controller;

import com.example.demo.dto.MemberRequestDto;
import com.example.demo.dto.MemberResponseDto;
import com.example.demo.dto.TokenDto;
import com.example.demo.service.AuthService;
import com.example.demo.service.MemberService;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {

  private final AuthService authService;

  @PostMapping("/signup")
  public ResponseEntity<MemberResponseDto> signup(
    @RequestBody MemberRequestDto requestDto
  ) {
    return ResponseEntity.ok(authService.signup(requestDto));
  }

  @PostMapping("/login")
  public ResponseEntity<TokenDto> login(
    @RequestBody MemberRequestDto requestDto
  ) {
    return ResponseEntity.ok(authService.login(requestDto));
  }


  //아이디 중복체크
  @GetMapping("/checkEmail/{email}")
  public ResponseEntity<Boolean> checkEmailDuplicate(@PathVariable String email){
    return ResponseEntity.ok(authService.checkEmail(email));
    
  }
}
