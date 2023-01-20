import React from 'react';
// template
import ListGroupItem from 'react-bootstrap/esm/ListGroupItem';

const BotQuestionItem = ({botItems, onQItemClick, disabled}) => {

  return(
    <ListGroupItem 
      className={disabled ? "disabled" : ""}
      onClick={() => onQItemClick(botItems)}>{botItems}
    </ListGroupItem>
  );
}

export default BotQuestionItem;