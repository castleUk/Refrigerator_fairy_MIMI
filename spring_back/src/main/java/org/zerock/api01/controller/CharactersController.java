package org.zerock.api01.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;

import java.security.Principal;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.validation.BindingResult;
import org.springframework.validation.BindException;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.zerock.api01.domain.Characters;
import org.zerock.api01.dto.APIUserDTO;
import org.zerock.api01.dto.CharactersDTO;
import org.zerock.api01.repository.CharactersRepository;
import org.zerock.api01.service.CharactersService;

import io.swagger.annotations.ApiOperation;

@RestController
@RequestMapping
@Log4j2
@RequiredArgsConstructor
public class CharactersController {

  private final CharactersService charactersService;

  
  @ApiOperation(value = "Replies POST", notes = "POST 방식으로 캐릭터 등록")
  @PostMapping(value = "/characters", consumes = MediaType.APPLICATION_JSON_VALUE)
  public ResponseEntity<Map<String, Long>> register (@RequestBody CharactersDTO charactersDTO )throws BindException {
    log.info(charactersDTO);
    log.info(SecurityContextHolder.getContext().getAuthentication().getPrincipal());

    Map<String, Long>  resultMap = Map.of("charKey", 1L);
    
    return ResponseEntity.ok(resultMap);
  }

  // @ApiOperation(
  //   value = "Replies of Board",
  //   notes = "GET 방식으로 특정 게시물의 댓글 목록"
  // )
  // @GetMapping(value = "/list/{userKey}")
  // public List<Characters> listCharracters(@PathVariable Long userKey){
  //   return ;

  // }

  // @ApiOperation(value = "Read Reply", notes = "GET 방식으로 특정 댓글 조회")
  // @GetMapping("/{rno}")
  // public ReplyDTO getReplyDTO(@PathVariable("rno") Long rno) {
  //   ReplyDTO replyDTO = replyService.read(rno);

  //   return replyDTO;
  // }

  // @ApiOperation(
  //   value = "Delete Reply",
  //   notes = "DELETE 방식으로 특정 댓글 삭제"
  // )
  // @DeleteMapping("/{rno}")
  // public Map<String, Long> remove(@PathVariable("rno") Long rno) {
  //   replyService.remove(rno);

  //   Map<String, Long> resultMap = new HashMap<>();

  //   resultMap.put("rno", rno);

  //   return resultMap;
  // }

  // @ApiOperation(value = "Modify Reply", notes = "PUT 방식으로 특정 댓글 수정")
  // @PutMapping(value = "/{rno}", consumes = MediaType.APPLICATION_JSON_VALUE)
  // public Map<String, Long> remove(
  //   @PathVariable("rno") Long rno,
  //   @RequestBody ReplyDTO replyDTO
  // ) {
  //   replyDTO.setRno(rno); //번호를 일치시킴

  //   replyService.modify(replyDTO);

  //   Map<String, Long> resultMap = new HashMap<>();

  //   resultMap.put("rno", rno);

  //   return resultMap;
  // }
}
