import React, { useState } from 'react';
import dummy from '../../db/recipe.json';
import RecipeIngrGroup from './RecipeIngrGroup';
import RecipeStepGroup from './RecipeStepGroup';
// component


const RecipeBody = () => {
  
  return(
  <div className='content-body'>
    <RecipeIngrGroup />
    <RecipeStepGroup />
  </div>
  );
}

export default RecipeBody;