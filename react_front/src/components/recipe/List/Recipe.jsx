import React from "react";
import RecipeData from "../../../db/recipe.json";
import { Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { instance } from "../../api/Api";
import { useEffect } from "react";
import { useState } from "react";
import Header from "../../common/Header";

const Recipe = () => {
  const param = useParams();
  const navigate = useNavigate();

  const [recipe, setRecipe] = useState([]);
  const [recipeList, setRecipeList] = useState([]);
  const [recipeItem, setRecipeItem] = useState([]);
  const [isLiked, setIsLiked] = useState(false);

  console.log("레시피" + JSON.stringify(recipe));

  const recipeId = param.recipeId;
  const recipeItems = RecipeData[5];
  useEffect(() => {
    //레시피 이름, 레시피 이미지
    const onRecipe = async () => {
      try {
        const response = await instance.get(`/api/recipe/${recipeId}`);
        setRecipe(response.data.body);
        watched(response.data.body);
        onRecipeContent(response.data.body.name);
        onRecipeItem(response.data.body.name);
      } catch (error) {
        console.log(error);
      }
    };
    onRecipe();

    const onExistLikedRecipe = async () => {
      try {
        const response = await instance.get(`/api/liked/${recipeId}`);
        if (response.data.body === true) {
          setIsLiked(true);
        } else {
          setIsLiked(false);
        }
      } catch (error) {
        console.log(error);
      }
    };
    onExistLikedRecipe();
  }, [recipeId]);

  const watched = (recipe) => {
    let get_local = localStorage.getItem("data");
    if (get_local == null) {
      get_local = [];
    } else {
      get_local = JSON.parse(get_local);
    }
    if (get_local.length === 5) {
      get_local.shift();
    }
    get_local.push(recipe);
    get_local = [...new Set(get_local.map(JSON.stringify))].map(JSON.parse);
    localStorage.setItem("data", JSON.stringify(get_local));
  };

  //레시피 리스트
  const onRecipeContent = async (name) => {
    try {
      const response = await instance.get(`/api/recipeList/${name}`);
      setRecipeList(response.data.body.recipeContentList);
    } catch (error) {
      console.log(error);
    }
  };

  const onRecipeItem = async (name) => {
    try {
      const response = await instance.get(`/api/recipeItem/${name}`);
      setRecipeItem(response.data.body.recipeItems);
    } catch (error) {
      console.log(error);
    }
  };

  const onRecipeCount = async () => {
    try {
      const response = await instance.put(`/api/recipe/count/${recipeId}`);
    } catch (error) {
      console.log(error);
    }
  };

  const onAddLikedRecipe = async () => {
    const data = param;
    try {
      const response = await instance.post(`/api/liked`, data);
    } catch (error) {
      console.log(error);
    }
  };

  const onDeleteLikedRecipe = async () => {
    const data = param.recipeId;

    try {
      const response = await instance.delete(`/api/liked/${data}`);
    } catch (error) {
      console.log(error);
    }
  };

  const countUpHandler = (e) => {
    e.preventDefault();
    onRecipeCount();
    setIsLiked(!isLiked);
    onAddLikedRecipe();
  };

  const countDownHandler = (e) => {
    e.preventDefault();
    onRecipeCount();
    setIsLiked(!isLiked);
    onDeleteLikedRecipe();
  };

  return (
    <div className="recipe">
      <Header />
      <div className="content-header">
        <h5 className="sub-title">{recipeItems.menu_sub_title}</h5>
        <h2 className="title">{recipe.name}</h2>
        <img className="recipe-main-img" src={recipe.img} alt={recipe.name} />
      </div>
      <div className="content-body">
        <div className="ingrs">
          <div className="ingr-header">
            <h5 className="ingr-title">{recipeItems.ingre_title}</h5>
            <span className="ingr-sub">{recipeItems.ingre_sub}</span>
          </div>
          <div className="ingr-content">
            {recipeItem.map((i) => (
              <div className="ingr" key={i.id}>
                <span className="ingr-name">{i.itemName}</span>
                <span className="ingr-value">{i.itemCount}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="recipe-desc">
          {recipeList.map((r) => (
            <div className="step" key={r.id}>
              <div className="step-desc">
                <div className="step-num">{r.recipeListNo}</div>
                <span className="step-cont">{r.recipeList}</span>
              </div>
              <img className="step-img" src={r.imgUrl} alt={r.recipeListNo} />
            </div>
          ))}
        </div>
      </div>
      <div className="content-footer">
        <Button
          variant="outline-primary"
          className="btn-make"
          onClick={() => {
            navigate("/recipe");
          }}
        >
          뒤로가기
        </Button>
        {!isLiked ? (
          <Button
            variant="primary"
            className="btn-make"
            onClick={countUpHandler}
          >
            좋아요
          </Button>
        ) : (
          <Button
            variant="primary"
            className="btn-make"
            onClick={countDownHandler}
          >
            좋아요 취소
          </Button>
        )}
      </div>
    </div>
  );
};

export default Recipe;
