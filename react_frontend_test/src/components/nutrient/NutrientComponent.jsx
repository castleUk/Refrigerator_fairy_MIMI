import React from "react";
import { Modal, Button } from "react-bootstrap";
// component
import NutrientTable from "./NutrientTable";
import RecipesGroup from "../recipe/RecipesGroup";

const NutrientComponent = ({ show, onHide, item }) => {
  console.log("아이템이름 나와야됨 " + item);

  return (
    <Modal size="lg" show={show} onHide={onHide} className="recipy-modal">
      <Modal.Header closeButton>
        <span>
          {item}
        </span>
      </Modal.Header>
      <Modal.Body>
        <NutrientTable />
        <h5>메뉴 추천</h5>
        <div className="content-body">
          <RecipesGroup />
        </div>
      </Modal.Body>
      <Modal.Footer>
      </Modal.Footer>
    </Modal>
  );
};

export default NutrientComponent;
