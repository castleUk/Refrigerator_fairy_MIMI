import React, { useState } from 'react';
// component
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Item = () => {
  const [recipyShow, setRecipyShow] = useState(false);

  const handleClose = () => setRecipyShow(false);
  const itemHandleShow = () => setRecipyShow(true);
  return(
    <>
    <div className="item col" onClick={itemHandleShow}>
      <div className="item-img"></div>
      <div className="item-title">메뉴 이름</div>
    </div>

    <Modal show={recipyShow} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>레시피</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        레시피 내용
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>만들기</Button>
      </Modal.Footer>
    </Modal>
    </>
  );
}

export default Item;