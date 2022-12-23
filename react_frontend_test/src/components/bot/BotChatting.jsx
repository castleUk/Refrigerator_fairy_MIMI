import React from 'react';
// icon
import { SlClose } from "react-icons/sl";
// component
import BotBody from './BotBody';

const BotChatting = () => {

  return(
    <div className='bot-chatting'>
      <div className='content-header'>
        <h4 className='title'>봇 채팅</h4>
        <SlClose className="icon"></SlClose>
      </div>
      <BotBody />
    </div>
  );
}

export default BotChatting;