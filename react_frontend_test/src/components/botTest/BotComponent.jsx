import React, { useState } from 'react';
import { useEffect } from 'react';
import BotData from '../../db/bot.json';

// component
import BotBtn from './BotBtn';
import BotChatting from './BotChatting';
import BotQuestionChoice from './BotQuestionChoice';

const BotComponent = () => {
  const botItems = BotData.botQnA; // 데이터
  const [chatBot, setChatBot] = useState(false);
  const [questionChoice, setQuestionChoice] = useState(false);
  const [count, setCount] = useState();
  
  // 열기_닫기
  const showChatBot = () => setChatBot(true);
  const hideChatBot = () => setChatBot(false);
  
  // 질문 선택
  const onQItemClick = (key) =>{
    setCount((JSON.stringify(key))); // 순서
    const itemQuestion = botItems[count];
    setQuestionChoice(!questionChoice); // 선택
    console.log(itemQuestion);
  }
  
  useEffect( ()=> {
    console.log("uesEffect!" + count);
    console.log(botItems);
  })

  // 선택된 질문 항목
  

  // 답변

  return(
    <div className='bot-component'>
      <div className='bot-content'>
        { chatBot && <BotChatting 
                        onHideChatBot={hideChatBot} 
                        botItems={botItems} 
                        onQItemClick={onQItemClick}
                        itemId={count}
                        
                      />
        }
      </div>
      <BotBtn onClickChatBot={showChatBot} />
    </div>
  );
}

export default BotComponent;