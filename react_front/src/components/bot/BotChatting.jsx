import React from 'react';
import BotData from '../../db/bot.json';
// icon
import { SlClose } from "react-icons/sl";
// component
import BotBody from './BotBody';

const BotChatting = ({onHideChatBot}) => {
  const BotItems = BotData.botQnA;

  return(
    <div className='bot-chatting'>
      <div className='content-header'>
        <h4 className='title'>오늘 뭐 먹지?</h4>
      </div>
      <BotBody/>
    </div>
  );
}

export default BotChatting;