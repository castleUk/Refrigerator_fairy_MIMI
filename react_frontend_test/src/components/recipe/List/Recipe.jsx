import React from "react";
import RecipeData from "../../../db/recipe.json";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { instance } from "../../api/Api";
import { useEffect } from "react";
import { useState } from "react";

const Recipe = () => {
  const param = useParams();

  const [recipe, setRecipe] = useState([]);

  const recipeId = param.recipeId;
  const recipeItems = RecipeData[5];

  console.log("레시피이름" + param.recipeName);

  useEffect(() => {
    //전체 레시피 받기
    const onRecipe = async () => {
      try {
        const response = await instance.get(`/api/recipe/${recipeId}`);
        console.log("레시피데이터" + JSON.stringify(response.data.body));
        setRecipe(response.data.body);
      } catch (error) {
        console.log(error);
      }
    };
    onRecipe();
  }, []);

  return (
    <div className="recipe">
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
            {recipeItems.ingrs.map((i) => (
              <div className="ingr" key={recipeItems.id}>
                <span className="ingr-name">{i.ingr_name}</span>
                <span className="ingr-value">{i.ingr_value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="recipe-desc">
          {recipeItems.step.map((s) => (
            <div className="step" key={recipeItems.id}>
              <div className="step-desc">
                <div className="step-num">{s.step_num}</div>
                <span className="step-cont">{s.step_cont}</span>
              </div>
              <img className="step-img" src={s.step_img} alt={s.step_num} />
            </div>
          ))}
        </div>
      </div>
      <div className="content-footer">
        <Button variant="primary" className="btn-make">
          만들기
        </Button>
      </div>
    </div>
  );
};

export default Recipe;
