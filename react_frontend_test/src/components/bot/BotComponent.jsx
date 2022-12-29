import React from 'react';
import { useState } from 'react';
// component
import BotBtn from './BotBtn';
import BotChatting from './BotChatting';

const BotComponent = () => {

  return(
    <div className='bot-component'>
      <div className='bot-content'>
        {/* <BotChatting /> */}
      </div>
      <BotBtn  />
    </div>
  );
}

export default BotComponent;