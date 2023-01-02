import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
//template
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
// icon
import { BsPlusCircleDotted } from "react-icons/bs";
import ItemComponent from "../Item/ItemComponent";

const InventoryItemAdd = (props) => {
  const navigate = useNavigate();

  const [itemCreateShow, setItemCreateShow] = useState(false);
  const ItemModalClose = () => setItemCreateShow(false);
  const ItemModalShow = () => setItemCreateShow(true);

  const index = props.index;

  //냉장고에 아이템처리
  const onFreezerItemAdd = async (itemName, count, storage) => {
    const data = {
      itemName: itemName[0],
      count: count,
      storage: storage,
    };
    const token = localStorage.getItem("accessToken");
    const headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    };

    try {
      const response = await axios.post(
        `/api/inventory/add?index=${index}`,
        JSON.stringify(data),
        {
          headers: headers,
        }
      );
      const responseData = await response.data;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Button className="btn-add" onClick={ItemModalShow}>
        <BsPlusCircleDotted className="icon" />
      </Button>

      <Modal show={itemCreateShow} size={"lg"} onHide={ItemModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>재료 추가</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ItemComponent onFreezerItemAdd={onFreezerItemAdd} index={props.index}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={ItemModalClose}>
            취소
          </Button>
          <Button variant="primary" onClick={ItemModalClose}>
            등록
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default InventoryItemAdd;
