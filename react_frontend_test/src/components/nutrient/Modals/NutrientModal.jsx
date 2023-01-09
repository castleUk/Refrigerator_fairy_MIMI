import { Modal, Button } from "react-bootstrap";
import { useState } from "react";
import { useEffect } from "react";
import { instance } from "../../api/Api";
import NutrientTable from "../NutrientTable";
import RecipesGroup from "../../recipe/RecipesGroup";

const NutrientModal = ({ show, onHide, itemInfo, setItemInfo }) => {
  const [nutrientInfo, setNutrientInfo] = useState([]);
  const [test, setTest] = useState();
  console.log("영양성분?" + nutrientInfo);
  const onItemInfo = async () => {
    console.log("onitemInfo 실행됌");
    try {
      const response = await instance.get(`/api/item/${itemInfo.itemName}`);
      const data = response.data;
      console.log("영양성분 받아온거" + JSON.stringify(data));
      setNutrientInfo(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    onItemInfo();
  }, [show]);
  return (
    <>
      <Modal size="lg" show={show} onHide={onHide} className="ingr-detail-modal">
        <Modal.Header closeButton>
          <img className="ingr-img" src={itemInfo.itemImg} alt={itemInfo.itemName} />
          <div className="detail-ingr">
            <h5 className="title">{itemInfo.itemName}</h5>
            <span className="count-text">갯수 : {itemInfo.count}</span>
          </div>
        </Modal.Header>
        <Modal.Body>
          
          <NutrientTable nutrientInfo={nutrientInfo} />
          <h5>메뉴 추천</h5>
          <div className="content-body">
            <RecipesGroup itemName={itemInfo.itemName} />
          </div>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
};

export default NutrientModal;
