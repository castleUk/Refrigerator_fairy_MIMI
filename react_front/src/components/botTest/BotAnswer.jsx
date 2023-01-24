import React from 'react';
// icon
import BotName from './BotName';
// template
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/esm/Button';
import BotAnswerItem from './BotAnswerItem';

const BotAnswer = ({ botItems, itemId,
  onHideChatBot, onQListClick ,isAItem }) => {

  const ans = botItems.map(q => <p key={q.id}>{q.answer}</p>);

  return(
    <div className='a-bot'>
      <BotName />  
      {
        isAItem &&
        <div className='a-list'>
          <BotAnswerItem qItem={itemId} ans={ans} />
        </div>
      }

      <ButtonGroup>
        <Button variant='primary' onClick={onHideChatBot}>나가기</Button>
        <Button variant='primary' onClick={onQListClick}>질문하기</Button>
      </ButtonGroup>
    </div>
  );
}

export default BotAnswer;