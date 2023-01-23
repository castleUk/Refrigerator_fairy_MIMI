import React, { useState, useEffect } from 'react';
import BotData from '../../db/bot.json';

// component
import BotBtn from './BotBtn';
import BotChatting from './BotChatting';

const BotComponent = () => {
  const botItems = BotData.botQnA; // 데이터
  const [qitem, setQItem] = useState();
  
  const onQItemClick = (key) => {
    
  }

  
  const isQList = [];
  for(const key in Object.keys(botItems)){
    isQList.push(botItems[key].question);
  }
  const isAList = [];
  for(const value in Object.keys(botItems)){
    isAList.push(botItems[value].answer);
  }

  if (isQList[0]){
    return (
      <>
        <h5>{isQList[0]}</h5>
        <p>{isAList[0]}</p>
      </>
    );
  } else if(isQList[1]){
    return (
      <>
        <h5>{isQList[1]}</h5>
        <p>{isAList[1]}</p>
      </>
    );
  } else if(isQList[2]){
    return (
      <>
        <h5>{isQList[2]}</h5>
        <p>{isAList[2]}</p>
      </>
    );
  } else if(isQList[4]){
    return (
      <>
        <h5>{isQList[4]}</h5>
        <p>{isAList[4]}</p>
      </>
    );
  } else if(isQList[5]){
    return (
      <>
        <h5>{isQList[5]}</h5>
        <p>{isAList[5]}</p>
      </>
    );
  }
  
  return(
    <div className='bot-component'>
      <div className='bot-content'>
        <BotChatting 
          onQItemClick={onQItemClick} 
        />
      </div>
      <BotBtn />
    </div>
  );
}

export default BotComponent;