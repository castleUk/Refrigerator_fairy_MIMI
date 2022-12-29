import React, { useState, useCallback } from "react";
// template
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
// icon
import { BsPlusCircleDotted } from "react-icons/bs";
import FredgeClose from "../fredge/FredgeClose";

const CharacterCreate = ({ onAddChar }) => {
  // modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [charInfo, setCharInfo] = useState({
    charName: "",
  });

  const changeCharInfoHandler = useCallback(
    (e) => {
      setCharInfo({
        ...charInfo,
        [e.target.name]: e.target.value,
      });
    },
    [charInfo]
  );

  console.log(charInfo);

  // validated
  const [validated, setValidated] = useState(false);



  const submitHandler = useCallback(
    (e) => {
      e.preventDefault();
      
      onAddChar(charInfo);

    },
    [charInfo, onAddChar]
  );

  return (
    <>
      <div className="character create">
        <Card>
          <div className="content-header">
            <div class="title">냉장고를 생성하세요. </div>
          </div>
          <div className="content-body">
            <FredgeClose />
            <button className="btn-add" onClick={handleShow}>
              <BsPlusCircleDotted className="icon" />
            </button>
          </div>
        </Card>
      </div>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>냉장고 생성</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={submitHandler}>
            <Form.Control
              type="text"
              placeholder="냉장고 이름을 입력하세요."
              name="charName"
              value={charInfo.charName}
              onChange={changeCharInfoHandler}
              required
            />
            <Form.Control.Feedback type="invalid">
              냉장고 이름을 입력하세요.
            </Form.Control.Feedback>
            <Button variant="primary" type="submit" onClick={handleClose}>
            생성
          </Button>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CharacterCreate;
