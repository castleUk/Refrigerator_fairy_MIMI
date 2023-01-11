import React, { useState } from 'react';
import { Link, Route } from 'react-router-dom';
import RecipeData from '../../../db/recipe.json';

const RecipeListComponent = () => {
  const recipeItems = RecipeData;

  return(
    <>
    <h5>레시피 <span>({recipeItems.length})</span></h5>
    <div className="recipe-component">
      <div className="recipe-content">
        <div className="recipe-list">
          {recipeItems.map((r) => 
            <div className='recipe-item' key={r.id}>
              <Link to="/recipe/detail" >
                <img className="list-img" src={r.menu_img} alt={r.menu_title} />
                <div className="list-title">{r.menu_title}</div>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
    </>
  );
}

export default RecipeListComponent;