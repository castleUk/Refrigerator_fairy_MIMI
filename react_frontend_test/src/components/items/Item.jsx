import React, { useState } from 'react';
import dummy from '../../db/items.json';
// component
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import RecipeComponent from '../recipe/RecipeComponent';

const Item = () => {
  const itemsList = dummy;
  const [recipyShow, setRecipyShow] = useState(false);

  const handleClose = () => setRecipyShow(false);
  const itemHandleShow = () => setRecipyShow(true);
  return(
    <>
      <div className="item col">
        <img className="item-img" src="#"onClick={itemHandleShow} />
        <div className="item-title">김치찌개</div>
      </div>

      <Modal size='lg' show={recipyShow} onHide={handleClose} className="recipy-modal">
        <Modal.Header closeButton>
          {/* <Modal.Title>레시피</Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
          <RecipeComponent />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>만들기</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Item;