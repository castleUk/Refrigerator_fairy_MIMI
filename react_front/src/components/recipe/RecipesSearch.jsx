import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { instance } from "../api/Api";
// component

const RecipesSearch = ({ itemName }) => {
  const navigate = useNavigate();
  const [recipeNameList, setRecipeNameList] = useState([]);


  useEffect(() => {
    // 재료 이름으로 레시피 제목 검색
    const onSearchRecipeName = async () => {
      try {
        const response = await instance.get(
          `/api/recipeItem/recipe/${itemName}`
        );
        const data = response.data.body.recipeItems;
        setRecipeNameList(data);
      } catch (error) {
        console.log(error);
      }
    };
    onSearchRecipeName();
  }, [itemName]);

  return (
    <>
      {recipeNameList.slice(0, 5).map((recipeNameList) => (
        <div className="item col" key={recipeNameList.recipeName}>
          <img
            alt="재료 사진"
            className="item-img"
            src={recipeNameList.recipeImg}
            onClick={() => navigate(`/recipe/${recipeNameList.recipeId}`)}
          />
          <div className="item-title">{recipeNameList.recipeName}</div>
        </div>
      ))}
    </>
  );
};

export default RecipesSearch;
