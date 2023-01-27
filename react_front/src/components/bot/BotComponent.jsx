import React from 'react';
import { useState } from 'react';
// component
import BotBtn from './BotBtn';
import BotChatting from './BotChatting';

const BotComponent = () => {
  const [chatBot, setChatBot] = useState(false);

  const showChatBot = () => setChatBot((current) => !current);

  return(
    <div className='bot-component'>
      <div className='bot-content'>
        { chatBot && <BotChatting /> }
      </div>
      <BotBtn onClickChatBot={showChatBot}/>
    </div>
  );
}

export default BotComponent;