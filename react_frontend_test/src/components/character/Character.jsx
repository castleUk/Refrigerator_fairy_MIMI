import React from 'react';
import { Link } from 'react-router-dom';
// template
import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';
// icon
import { AiOutlineMore } from "react-icons/ai";
import FredgeClose from '../fredge/FredgeClose';


const Character = (props) => {
  return(
    <div className='character'>
      <Card>
        <div className='content-header'>
        <div className="title">{props.onFreezer.name}</div>
          <Dropdown className='character-dropdown custom-dropdown'>
            <Dropdown.Toggle id="characterDropdown"><AiOutlineMore className='icon'/></Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item>이름 변경</Dropdown.Item>
              <Dropdown.Item>삭제</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className='content-body'>
          <Link to="/inventory">
            <FredgeClose />
          </Link>
        </div>
      </Card>
    </div>
  );
}

export default Character;