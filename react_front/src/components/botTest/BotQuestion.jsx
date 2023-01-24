import React from 'react';
// template
import ListGroup from 'react-bootstrap/ListGroup';
import BotName from './BotName';
import BotQuestionItem from './BotQuestionItem';

const BotQuestion = ({botItems, onQItemClick, disabled}) => {

  return(
    <div className='q-bot'>
      <BotName />
      <div className='q-list'>
        <ListGroup>
          {
            botItems.map(q => 
              <BotQuestionItem  
                botItems={q.question} key={q.id} 
                onQItemClick={onQItemClick} disabled={disabled}
              />
            )
          }
        </ListGroup>
      </div>
    </div>
  );
}

export default BotQuestion;