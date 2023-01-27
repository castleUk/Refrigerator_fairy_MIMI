import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
// template
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

const FreezerDeleteModal = (props) => {
  const navigate = useNavigate();

  const deleteSubmitHandler = (e) => {
    e.preventDefault();
    props.onHide();
    onDelete();
  };

  //삭제처리
  const onDelete = async () => {
    const token = localStorage.getItem("accessToken");
    const index = props.index;
    const headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    };

    try {
      await axios.delete(`/api/freezer/${index}`, {
        headers: headers,
      });
      props.onChange();
      navigate("/freezer");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Modal show={props.onShow} onHide={props.onHide} centered>
        <Modal.Header closeButton>
          <Modal.Title>주의! 삭제 됩니다.</Modal.Title>
        </Modal.Header>
        <Form onSubmit={deleteSubmitHandler}>
          <Modal.Body>
            <p>냉장고 속 모든 내용을 삭제됩니다.</p>
            <p>삭제하시겠습니까?</p>
          </Modal.Body>
          <Modal.Footer>
            <Button type="submit" variant="danger">
              삭제
            </Button>
            <Button variant="outline-secondary" onClick={props.onHide}>
              취소
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
};

export default FreezerDeleteModal;
