package org.zerock.api01.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.http.MediaType;
import org.springframework.validation.BindingResult;
import org.springframework.validation.BindException;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.zerock.api01.domain.Characters;
import org.zerock.api01.dto.CharactersDTO;
import org.zerock.api01.repository.CharactersRepository;
import org.zerock.api01.service.CharactersService;

import io.swagger.annotations.ApiOperation;

@RestController
@RequestMapping("/api/characters")
@Log4j2
@RequiredArgsConstructor
public class CharactersController {

  private final CharactersService charactersService;

  @ApiOperation(value = "Replies POST", notes = "POST 방식으로 댓글 등록")
  @PostMapping(value = "/", consumes = MediaType.APPLICATION_JSON_VALUE)
  public Map<String, Long> register(@RequestBody  CharactersDTO charactersDTO, BindingResult bindingResult)throws BindException {
    log.info(charactersDTO);

    if (bindingResult.hasErrors()) {
      throw new BindException(bindingResult);
    }

    Map<String, Long> resultMap = new HashMap<>();

    Long charKey = charactersService.register(charactersDTO);

    resultMap.put("charKey", charKey);

    return resultMap;
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
