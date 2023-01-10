import { Modal, Button } from "react-bootstrap";
import { useState } from "react";
import { useEffect } from "react";
import { instance } from "../../api/Api";
import NutrientTable from "../NutrientTable";
import RecipesGroup from "../../recipe/RecipesGroup";

const NutrientModal = ({ show, onHide, itemInfo, setItemInfo }) => {
  const [nutrientInfo, setNutrientInfo] = useState([]);
  const [test, setTest] = useState();
  console.log("로그" + JSON.stringify(itemInfo));

  return (
    <>
      <Modal
        size="lg"
        show={show}
        onHide={onHide}
        className="ingr-detail-modal"
      >
        <Modal.Header closeButton>
          <img
            className="ingr-img"
            src={itemInfo.item.img}
            alt={itemInfo.item.name}
          />
          <div className="detail-ingr">
            <h5 className="title">{itemInfo.item.name}</h5>
            <span className="count-text">갯수 : {itemInfo.count}</span>
          </div>
        </Modal.Header>

        <Modal.Body>
          <NutrientTable itemInfo={itemInfo.item} />
          <h5>메뉴 추천</h5>
          <div className="content-body">
            <RecipesGroup itemName={itemInfo.item.name} />
          </div>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
};

export default NutrientModal;
