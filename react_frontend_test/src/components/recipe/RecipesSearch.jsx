import React, { useEffect, useState } from "react";
import { instance } from "../api/Api";
import RecipeContentModal from "./Modals/RecipeContentModal";
// component

const RecipesSearch = ({ itemName }) => {
  const [recipeNameList, setRecipeNameList] = useState([]);
  const [recipeShow, setRecipeShow] = useState(false);
  const [recipeName, setRecipeName] = useState();
  console.log("아이템이름" + itemName)
  const handleClose = () => setRecipeShow(false);
  const itemHandleShow = (name) => {
    setRecipeShow(true);
    setRecipeName(name);
  };

  console.log("이름" + recipeName)

  // 재료 이름으로 레시피 제목 검색
  const onSearchRecipeName = async () => {
    try {
      const response = await instance.get(`/api/recipeItem/recipe/${itemName}`);
      const data = response.data.body.recipeItems;
      console.log("데이터" + JSON.stringify(data))
      setRecipeNameList(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    onSearchRecipeName();
  }, []);

  return (
    <>
      {recipeNameList.map((recipeNameList) => (
        <div className="item col" key={recipeNameList.recipeName}>
          <img
            className="item-img"
            src="#"
            onClick={() => itemHandleShow(recipeNameList.recipeName)}
          />
          <div className="item-title">{recipeNameList.recipeName}</div>
        </div>
      ))}
      <RecipeContentModal
        recipeShow={recipeShow}
        handleClose={handleClose}
        recipeName={recipeName}
      />
    </>
  );
};

export default RecipesSearch;
