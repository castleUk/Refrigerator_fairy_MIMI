import React, { useState } from 'react';
// template
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
// icon
import { BsPlusCircleDotted } from "react-icons/bs";
import FredgeClose from '../fredge/FredgeClose';

const CharacterCreate = () => {
  // modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // validated
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return(
    <>
    <div className='character create'>
      <Card>
        <div className='content-header'>
        <div class="title">냉장고를 생성하세요. </div>
        </div>
        <div className='content-body'>
          <FredgeClose />
          <button className='btn-add' onClick={handleShow}>
            <BsPlusCircleDotted className='icon'/>
          </button>
        </div>
      </Card>
    </div>

    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>냉장고 생성</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Control type="text" placeholder="냉장고 이름을 입력하세요." required />
          <Form.Control.Feedback type="invalid">냉장고 이름을 입력하세요.</Form.Control.Feedback>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>생성</Button>
      </Modal.Footer>
    </Modal>
    </>
  );
}

export default CharacterCreate;