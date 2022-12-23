import React from "react";
// template
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

const Modals = (props) => {
  return (
    <div>
    <Modal show={props.onShow} onHide={props.onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>{props.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={props.onSubmit}>
          <Form.Control
            type="text"
            placeholder="냉장고 이름을 입력하세요."
            onChange={props.onChange}
            required
          />
          <Button type="submit" variant="primary" onClick={props.handleClose}>
            생성
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
    </div>
  );
};

export default Modals;
