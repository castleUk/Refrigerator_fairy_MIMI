import React, { useState, useEffect } from 'react';
import BotData from '../../db/bot.json';

// component
import BotBtn from './BotBtn';
import BotChatting from './BotChatting';

const BotComponent = () => {
  const botItems = BotData.botQnA; // 데이터
  const [chatBot, setChatBot] = useState(false); // 챗봇
  const [isBotList, setIsBotList] = useState(true);
  const [isQuestion, setIsQuestion] = useState(true);
  const [isQuestionChoice, setIsQuestionChoice] = useState(false); // 질문선택
  const [isAnswer, setIsAnswer] = useState(false); // 답변
  const [isAItem, setIsAItem] = useState(false); // 답변 내용
  const [itemId, setItemId] = useState(); // 질문 아이디
  const [disabled, setDisabled] = useState(false); // 질문선택시 disabled
  
  // 열기_닫기
  const showChatBot = () => setChatBot(true);
  const hideChatBot = () => setChatBot(false);
  
  // 질문 선택
  const onQItemClick = (key) =>{
    setItemId((JSON.stringify(key))); // 질문

    if(isQuestionChoice === false){
      setIsQuestionChoice(current => !current); // 질문 선택 시 선택된 항목 보임
    }

    if(isAnswer === false){
      setIsAnswer(current => !current); // 질문 선택 시 답변보임
      setIsAItem(current => !current); // 답변 내용 보임
    }

    if(disabled === false){ // 질문선택시 disabled
      setDisabled(current => !current);
    }
  }
  
  // 질문하기 버튼
  const onQListClick = () =>{ 
    
  }

  return(
    <div className='bot-component'>
      <div className='bot-content'>
        { chatBot && <BotChatting 
                        botItems={botItems} 
                        itemId={itemId}
                        disabled={disabled}
                        onHideChatBot={hideChatBot} 
                        onQItemClick={onQItemClick}
                        onQListClick={onQListClick}
                        isBotList={isBotList}
                        isQuestion={isQuestion}
                        isQuestionChoice={isQuestionChoice}
                        isAnswer={isAnswer}
                        isAItem={isAItem}
                      />
        }
      </div>
      <BotBtn onClickChatBot={showChatBot} />
    </div>
  );
}

export default BotComponent;