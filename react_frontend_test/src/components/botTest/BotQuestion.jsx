import React from 'react';
// template
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/esm/ListGroupItem';
import BotName from './BotName';

const BotQuestion = ({botItems, onQItemClick}) => {
  return(
    <div className='q-bot'>
      <BotName />
      <div className='q-list'>
        <ListGroup>
          {botItems.map(q => <ListGroupItem key={q.id} onClick={() => onQItemClick(q.id)}>{q.question}</ListGroupItem>)}
        </ListGroup>
      </div>
    </div>
  );
}

export default BotQuestion;