import React, { useState } from "react";
import { Link, Route } from "react-router-dom";
import RecipeData from "../../../db/recipe.json";
import { instance } from "../../api/Api";
import { useEffect } from "react";

const RecipeListComponent = () => {
  const [recipeList, setRecipeList] = useState([]);

  useEffect(() => {
    //전체 레시피 받기
    const onRecipeList = async () => {
      try {
        const response = await instance.get(`/api/recipe/`);
        console.log("레시피데이터" + JSON.stringify(response));
        setRecipeList(response.data.body.recipes);
        console.log("리스트" + JSON.stringify(recipeList));
      } catch (error) {
        console.log(error);
      }
    };
    onRecipeList();
  }, []);

  const recipeItems = RecipeData;

  return (
    <>
      <h5>
        레시피 <span>({recipeList.length})</span>
      </h5>
      <div className="recipe-component">
        <div className="recipe-content">
          <div className="recipe-list">
            {recipeList.map((r) => (
              <div className="recipe-item" key={r.id}>
                <Link to="/recipe/detail">
                  <img className="list-img" src={r.img} alt={r.name} />
                  <div className="list-title">{r.name}</div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default RecipeListComponent;
