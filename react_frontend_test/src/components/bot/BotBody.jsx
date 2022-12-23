import React from 'react';
// component
import Bot from './Bot';
import BotCheck from './BotCheck';

const BotBody = () => {

  return(
    <div className='content-body'>
      <div className='bot-list'>
        <Bot />

        <BotCheck />
      </div>
    </div>
  );
}

export default BotBody;