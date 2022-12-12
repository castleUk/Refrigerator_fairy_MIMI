package org.zerock.api01.controller;

import java.util.Arrays;
import java.util.List;

import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.zerock.api01.dto.APIUserDTO;

import io.swagger.annotations.ApiOperation;
import lombok.extern.log4j.Log4j2;
@Log4j2
@RestController
@RequestMapping("/api/sample")
public class SampleController {

  @ApiOperation("Sample GET doA")
  @GetMapping("/doA")
  public List<String> doA(@AuthenticationPrincipal APIUserDTO dto){
    log.info(dto);
    return Arrays.asList("AAA", "BBB","CCC");
  }


  
}
