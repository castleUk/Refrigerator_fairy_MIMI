import React from 'react';
import dummy from '../../db/bot.json';

// template
import ListGroup from 'react-bootstrap/ListGroup';

const BotList = () => {
  return(
    <ListGroup className='bot-select'>
      {dummy.botQuestions.map((q) =>(
        <ListGroup.Item key={q.id}>{q.question}</ListGroup.Item>
        ))}
    </ListGroup>
  );
}

export default BotList;