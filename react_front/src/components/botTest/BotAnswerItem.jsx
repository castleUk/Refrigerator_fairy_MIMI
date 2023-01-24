import React from 'react';

const BotAnswerItem = ({qItem, ans}) => {

  return(
    <>
    <h5>{qItem}</h5>
    {ans}
    </>
  );
}

export default BotAnswerItem;