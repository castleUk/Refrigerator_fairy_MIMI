import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { instance } from "../api/Api";
// component

const RecipeReco = (props) => {
  const navigate = useNavigate();
  const [recipeNameList, setRecipeNameList] = useState([]);

  useEffect(() => {
    setTimeout(2000)
    const onRecoRecipe = async () => {
      try {
        console.log("추천메뉴 받아오기 실행")
        const response = await instance.get(`/api/recommend/${props.standard}`);
        const data = response.data.body.dtoList;
        console.log("추천메뉴" + data)
        setRecipeNameList(data);
      } catch (error) {
        console.log(error);
      }
    };
    onRecoRecipe();
  }, [props.standard]);

  return (
    <div className="items-content">
      <h5>{props.name}별 메뉴 추천</h5>
      <div className="item best">
      {recipeNameList.sort(()=>Math.random()- 0.5).slice(0, 3).map((recipeNameList) => (
        <li className="col" key={recipeNameList.id}>
          <img
            alt="재료 사진"
            className="item-img"
            src={recipeNameList.recipeImg}
            onClick={() => navigate(`/recipe/${recipeNameList.recipeId}`)}
          />
          <div className="item-title">{recipeNameList.recipeName}</div>
          </li>
      ))}
      </div>
    </div>
  );
};

export default RecipeReco;
