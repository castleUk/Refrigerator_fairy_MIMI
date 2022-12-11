import React, { useState } from 'react';
// template
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// icon
import { BsPlus } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
// component
import IngrImg from './IngrImg';

const Ingr = () => {
  return(
    <div className='ingr'>
      <div className='ingr-img'>
        <IngrImg />
      </div>
      <div className='ingr-content'>
        <div className='ingr-title'>양파</div>
        <div className='ingr-form'>
          <Form>
            <Form.Group className="mb-3 form-group" controlId="">
              <Form.Label>수량</Form.Label>
              <span className='count-text'>1</span>
              <ButtonGroup>
                <Button variant="outline-secondary"><BsPlus className="icon"/></Button>
                <Button variant="outline-secondary"><BiMinus className="icon" /></Button>
              </ButtonGroup>
            </Form.Group>
            <Form.Group className="mb-3 form-group" controlId="">
              <Form.Label>저장소</Form.Label>
              <Form.Select  name="">
                <option value="1">냉장</option>
                <option value="2">냉동</option>
                <option value="3">실온</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3 form-group" controlId="">
              <Form.Label>등록일</Form.Label>
              <Form.Control type="date" name="" />
            </Form.Group>
            <Form.Group className="mb-3 form-group" controlId="">
              <Form.Label>유통기한</Form.Label>
              <Form.Control type="date"  name=""/>
            </Form.Group>
          </Form>
        </div>
      </div>
      <div className='ingr-delete'>
        <Button className='btn-delete'><AiFillDelete className='icon'/></Button>
      </div>
    </div>
  );
}

export default Ingr;