import React from "react";
import { useNavigate } from "react-router-dom";
import { instance } from "../api/Api";
//template
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
// icon
import { BsPlusCircleDotted } from "react-icons/bs";
import ItemComponent from "../Item/ItemComponent";

const InventoryItemAdd = (props) => {
  const navigate = useNavigate();

  const ItemModalClose = () => props.setItemCreateShow(false);
  const ItemModalShow = () => props.setItemCreateShow(true);

  const index = props.index;

  //냉장고에 아이템처리
  const onFreezerItemAdd = async (itemName, count, storage, expDate, regDate) => {
    const data = {
      itemName: itemName[0],
      count: count,
      storage: storage,
      expDate : expDate,
      regDate : regDate
    };

    try {
      const response = await instance.post(
        `/api/inventory/add?index=${index}`,
        JSON.stringify(data)
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Button className="btn-add" onClick={ItemModalShow}>
        <BsPlusCircleDotted className="icon" />
      </Button>

      <Modal show={props.itemCreateShow} size={"lg"} onHide={ItemModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>재료 추가</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ItemComponent onFreezerItemAdd={onFreezerItemAdd} index={props.index} hide={ItemModalClose}/>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default InventoryItemAdd;
