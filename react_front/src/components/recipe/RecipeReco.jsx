import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { instance } from "../api/Api";
// component

const RecipeReco = (props) => {
  const navigate = useNavigate();
  const [recipeNameList1, setRecipeNameList1] = useState([]);
  const [recipeNameList2, setRecipeNameList2] = useState([]);
  const [recipeNameList3, setRecipeNameList3] = useState([]);
  const [recipeNameList4, setRecipeNameList4] = useState([]);

  useEffect(() => {
    const onRecoRecipe = async () => {
      try {
        console.log("추천메뉴1 받아오기 실행")
        console.log(props.tempCheck)
        const response = await instance.get(`/api/recommend/${props.tempCheck}`);
        const data = response.data.body.dtoList;
        console.log("추천메뉴" + data)
        setRecipeNameList1(data);
      } catch (error) {
        console.log(error);
      }
      try {
        console.log("추천메뉴2 받아오기 실행")
        console.log(props.weather)
        const response = await instance.get(`/api/recommend/${props.weather}`);
        const data = response.data.body.dtoList;
        console.log("추천메뉴" + data)
        setRecipeNameList2(data);
      } catch (error) {
        console.log(error);
      }
      try {
        console.log("추천메뉴3 받아오기 실행")
        console.log(props.timeCheck)
        const response = await instance.get(`/api/recommend/${props.timeCheck}`);
        const data = response.data.body.dtoList;
        console.log("추천메뉴" + data)
        setRecipeNameList3(data);
      } catch (error) {
        console.log(error);
      }
      try {
        console.log("추천메뉴4 받아오기 실행")
        console.log(props.seasonCheck)
        const response = await instance.get(`/api/recommend/${props.seasonCheck}`);
        const data = response.data.body.dtoList;
        console.log("추천메뉴" + data)
        setRecipeNameList4(data);
      } catch (error) {
        console.log(error);
      }


    };
    onRecoRecipe();
  }, [props.tempCheck,props.weather,props.timeCheck,props.seasonCheck]);

  return (
    <>
    <div className="items-content">
      <h5>기온별 메뉴 추천</h5>
      <div className="item best">
      {recipeNameList1.sort(()=>Math.random()- 0.5).slice(0, 3).map((recipeNameList) => (
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
    <div className="items-content">
      <h5>날씨별 메뉴 추천</h5>
      <div className="item best">
      {recipeNameList2.sort(()=>Math.random()- 0.5).slice(0, 3).map((recipeNameList) => (
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
    <div className="items-content">
      <h5>시간별 메뉴 추천</h5>
      <div className="item best">
      {recipeNameList3.sort(()=>Math.random()- 0.5).slice(0, 3).map((recipeNameList) => (
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
    <div className="items-content">
      <h5>계절별 메뉴 추천</h5>
      <div className="item best">
      {recipeNameList4.sort(()=>Math.random()- 0.5).slice(0, 3).map((recipeNameList) => (
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
    </>
  );
};

export default RecipeReco;
