import React from 'react';
// icon
import BotName from './BotName';
// template
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/esm/Button';

const BotAnswer = ({botItems}) => {
  return(
    <div className='a-bot'>
      <BotName />
      <div className='a-list'>
        <h5>{botItems[0].question}</h5>
        <p>{botItems[0].answer}</p>
      </div>
      <ButtonGroup>
        <Button variant='primary'>나가기</Button>
        <Button variant='primary'>질문하기</Button>
      </ButtonGroup>
    </div>
  );
}

export default BotAnswer;