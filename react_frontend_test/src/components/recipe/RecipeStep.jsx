import React, { useState } from 'react';
import dummy from '../../db/recipe.json';
// component


const RecipeStep = () => {

  return(
  <div className="step">
    <div className="step-desc">
      <div className="step-num">1</div>
      <div className="step-cont">내용</div>
    </div>
    <img src="#" className="step-img" alt="{step_img}"/>
  </div>
  );
}

export default RecipeStep;