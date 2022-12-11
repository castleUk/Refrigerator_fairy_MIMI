package org.zerock.api01.service;

import org.zerock.api01.dto.MemberJoinDTO;

public interface MemberService {

  static class MidExistException extends Exception{}

  void join(MemberJoinDTO memberJoinDTO)throws MidExistException;
  
}
