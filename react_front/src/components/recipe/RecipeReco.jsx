import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { instance } from "../api/Api";
import RecipeContentModal from "./modals/RecipeContentModal";
// component

const RecipeReco = (props) => {
  const navigate = useNavigate();
  const [recipeNameList, setRecipeNameList] = useState([]);
  const [recipeShow, setRecipeShow] = useState(false);
  const [recipeName, setRecipeName] = useState();
  const handleClose = () => setRecipeShow(false);
  const itemHandleShow = (name) => {
    setRecipeShow(true);
    setRecipeName(name);
  };

  console.log("이름" + props.standard)

  useEffect(() => {
    const onRecoRecipe = async () => {
      try {
        const response = await instance.get(`/api/recommend/${props.standard}`);
        console.log("스탠다드" + props.standard);
        const data = response.data.body.dtoList;
        console.log("추천데이터" + JSON.stringify(data));
        setRecipeNameList(data);
      } catch (error) {
        console.log(error);
      }
    };
    onRecoRecipe();
  }, [props.standard]);

  return (
    <>
      <h5>{props.name}별 메뉴 추천</h5>
      <div className="item col">
      {recipeNameList.slice(0, 3).map((recipeNameList) => (
        <li>
          <img
            alt="재료 사진"
            className="item-img"
            src={recipeNameList.recipeImg}
            onClick={() => navigate(`/recipe/${recipeNameList.Id}`)}
          />
          <div className="item-title">{recipeNameList.recipeName}</div>
          </li>
      ))}
      </div>
    </>
  );
};

export default RecipeReco;