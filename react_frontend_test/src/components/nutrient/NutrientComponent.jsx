import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useEffect } from "react";
import axios from "axios";
// component
import NutrientTable from "./NutrientTable";
import RecipesGroup from "../recipe/RecipesGroup";

const NutrientComponent = ({ show, onHide, itemInfo, setItemInfo }) => {
  const [nutrientInfo, setNutrientInfo] = useState([]);

  //재료 성분 가져오기
  const onItemInfo = async () => {
    const token = localStorage.getItem("accessToken");
    const headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    };
    try {
      const response = await axios.get(`/api/item/${itemInfo.itemName}`, {
        headers: headers,
      });
      const data = await response.data;
      setNutrientInfo(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    onItemInfo();
  }, [show]);

  return (
    <Modal size="lg" show={show} onHide={onHide} className="recipy-modal">
      <Modal.Header closeButton>
        이름 : {itemInfo.itemName}
        갯수 : {itemInfo.count}
      </Modal.Header>
      <Modal.Body>
        <NutrientTable nutrientInfo={nutrientInfo} />
        <h5>메뉴 추천</h5>
        <div className="content-body">
          <RecipesGroup />
        </div>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
};

export default NutrientComponent;
