import React from "react";
// template
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

const DeleteModals = (props) => {
  return (
    <div>
      <Modal show={props.onShow} onHide={props.onHide} centered>
        <Modal.Header closeButton>
          <Modal.Title>주의! 삭제 됩니다용</Modal.Title>
        </Modal.Header>
        <Form onSubmit={props.onSubmit}>
          <Modal.Body>
          <Button type="submit" variant="primary">
            삭제
            </Button>
            <Button variant="primary" onClick={props.onHide}>
            취소
            </Button>
          </Modal.Body>
          <Modal.Footer>
            
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
};

export default DeleteModals;
