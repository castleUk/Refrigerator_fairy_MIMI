import React, { useEffect, useState } from "react";
import dummy from "../../db/items.json";
import { instance } from "../api/Api";
// component
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import RecipesComponent from "../recipe/RecipesComponent";

const Recipe = ({ itemName }) => {
  const [recipyNameList, setRecipeNameList] = useState([]);
  const [recipyShow, setRecipyShow] = useState(false);

  const handleClose = () => setRecipyShow(false);
  const itemHandleShow = () => setRecipyShow(true);

  // 재료 이름으로 레시피 제목 검색
  const onSearchRecipyName = async () => {
    try {
      const response = await instance.get(`/api/recipeItem/recipe/${itemName}`);
      const data = response.data;
      setRecipeNameList(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    onSearchRecipyName();
  }, []);

  return (
    <>
      {recipyNameList.map((it) => (
        <div className="item col" key={it.recipeName}>
          <img className="item-img" src="#" onClick={itemHandleShow} />
          <div className="item-title">{it.recipeName}</div>
        </div>
      ))}

      <Modal
        size="lg"
        show={recipyShow}
        onHide={handleClose}
        className="recipy-modal"
      >
        <Modal.Header closeButton>
          {/* <Modal.Title>레시피</Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
          <RecipesComponent />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            만들기
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Recipe;
