import React, { useState } from "react";
// template
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";


const CharacterCreateModal = (props) => {

    // // validated
    // const [validated, setValidated] = useState(false);

    // const submitHandler = (event) => {
    //   const form = event.currentTarget;
    //   if (form.checkValidity() === false) {
    //     event.preventDefault();
    //     event.stopPropagation();
    //   }
  
    //   setValidated(true);
    // };

  return (
    <Modal centered>
      <Modal.Header closeButton>
        <Modal.Title>냉장고 생성</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control
            type="text"
            placeholder="냉장고 이름을 입력하세요."
            required
          />
          <Form.Control.Feedback type="invalid">
            냉장고 이름을 입력하세요.
          </Form.Control.Feedback>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={props.onClick}>
          생성
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CharacterCreateModal;
