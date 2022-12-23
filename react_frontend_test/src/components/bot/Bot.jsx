import React from 'react';
// icon
import { AiFillRobot } from "react-icons/ai";
// component
import BotList from './BotList';
import BotAnswer from './BotAnswer';

const Bot = () => {
  return(
    <div className='bot left'>
      <div className='bot-img'><AiFillRobot className='icon'></AiFillRobot></div>
      <div className='bot-text'>
        <div className='bot-name'>미미</div>
        {/* <BotAnswer /> */}
        <BotList />
      </div>
    </div>
  );
}

export default Bot;