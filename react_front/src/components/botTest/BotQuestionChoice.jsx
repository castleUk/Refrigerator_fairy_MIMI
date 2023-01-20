import React from 'react';

const BotQuestionChoice = ({itemId}) => {
  return(
    <div className="qs-bot">
      <span className="q-selected">{itemId}</span>
    </div>
  );
}

export default BotQuestionChoice;