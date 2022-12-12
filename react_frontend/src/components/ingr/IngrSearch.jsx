import React, { useState } from 'react';
// template
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const IngrSearch = () => {
  return(
    <div className='ingr-search search'>
      <InputGroup className="mb-4">
        <Form.Control placeholder="재료를 입력하세요."/>
        <Button variant="primary" id="btnFind">찾기</Button>
      </InputGroup>
    </div>
  );
}

export default IngrSearch;