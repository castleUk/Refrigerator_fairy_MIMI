import React, { useState } from 'react';
//template
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// component
import FredgeClose from '../fredge/FredgeClose';
import FredgeOpen from '../fredge/FredgeOpen';
import IngrImg from '../ingr/IngrImg';
// icon
import { BsPlusCircleDotted } from "react-icons/bs";
import IngrComponent from '../ingr/IngrComponent';

const Inventory = () => {
  const [ingeCreateShow, setIngeCreateShow] = useState(false);

  const ingrModelClose = () => setIngeCreateShow(false);
  const ingrModelShow = () => setIngeCreateShow(true);

  return(
    <>
    <div className='inventory-group'>
      <div className='inventory'>
        <FredgeOpen />
        <Button className='btn-add' onClick={ingrModelShow}>
          <BsPlusCircleDotted className='icon'/>
        </Button>
        <div className='ingr-group'>
          <div className='ingr'>
            <div className='ingr-img'>
              <IngrImg />
            </div>
          </div>
        </div>
      </div>
    </div>

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

export default Inventory;