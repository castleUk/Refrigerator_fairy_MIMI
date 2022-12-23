import React from 'react';
// icon
import { AiFillRobot } from "react-icons/ai";
// template
import Button from 'react-bootstrap/esm/Button';

const BotBtn = () => {
  return(
    <Button className='btn-bot'>
      <AiFillRobot className='icon'></AiFillRobot>
    </Button>
  );
}

export default BotBtn;