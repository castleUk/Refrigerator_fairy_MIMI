import React, { useState } from 'react';

const BotQuestionChoice = ({botItems, onQItemClick, itemId}) => {
  return(
    <div className='qs-bot' onChange={onQItemClick}>
      {/* {
        botItems.map(qs => <span className='q-selected' key={qs.id}>{qs.question}</span>)
      } */}
      <span className='q-selected'>{itemId}</span>
    </div>
  );
}

export default BotQuestionChoice;