import React, { useState } from 'react';
//template
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// icon
import { BsPlusCircleDotted } from "react-icons/bs";
import IngrComponent from '../ingr/IngrComponent';

const InventoryIngrAdd = () => {
  const [ingeCreateShow, setIngeCreateShow] = useState(false);

  const ingrModelClose = () => setIngeCreateShow(false);
  const ingrModelShow = () => setIngeCreateShow(true);

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