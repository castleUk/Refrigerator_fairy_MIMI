import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
//template
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// icon
import { BsPlusCircleDotted } from "react-icons/bs";
import IngrComponent from '../ingr/IngrComponent';

const InventoryIngrAdd = (props) => {
  const navigate = useNavigate();
  const [ingeCreateShow, setIngeCreateShow] = useState(false);

  const ingrModelClose = () => setIngeCreateShow(false);
  const ingrModelShow = () => setIngeCreateShow(true);

const index = props.index;
console.log("여기까지 내려옴" + index)
//냉장고 아이템 등록 처리
const onAddItem = async () => {
  const data = {
    "count": 10,
    "itemName": "c"
  }
  const token = localStorage.getItem("accessToken");
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + token,
  };

  try {
    const response = await axios.post(
      "/api/inventory/add?index=${index}",
      JSON.stringify(data),
      {
        headers: headers,
      }
    );
    props.onChange();
    navigate("/freezer");
  } catch (error) {
    console.log(error);
  }
};



  // 냉장고 재료 추가 버튼
  return(
    <>
    <Button className='btn-add' onClick={ingrModelShow}>
      <BsPlusCircleDotted className='icon'/>
    </Button>

    <Modal show={ingeCreateShow} size={'lg'} onHide={ingrModelClose}>
      <Modal.Header closeButton>
        <Modal.Title>재료 추가</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <IngrComponent />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={ingrModelClose}>취소</Button>
        <Button variant="primary" onClick={ingrModelClose}>등록</Button>
      </Modal.Footer>
    </Modal>
    </>
  );
}

export default InventoryIngrAdd;