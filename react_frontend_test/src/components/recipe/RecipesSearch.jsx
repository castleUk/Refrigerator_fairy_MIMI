import React, { useEffect, useState } from "react";
import { instance } from "../api/Api";
import RecipeContentModal from "./Modals/RecipeContentModal";
// component

const RecipesSearch = ({ itemName }) => {
  const [recipeNameList, setRecipeNameList] = useState([]);
  const [recipeShow, setRecipeShow] = useState(false);
  const [recipeName, setRecipeName] = useState();

  const handleClose = () => setRecipeShow(false);
  const itemHandleShow = (recipeName) => {
    setRecipeShow(true);
    setRecipeName(recipeName);
  };

  // 재료 이름으로 레시피 제목 검색
  const onSearchRecipeName = async () => {
    try {
      const response = await instance.get(`/api/recipeItem/recipe/${itemName}`);
      const data = response.data;
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
