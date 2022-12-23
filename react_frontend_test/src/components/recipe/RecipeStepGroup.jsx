import React, { useState } from 'react';
import dummy from '../../db/recipe.json';
import RecipeStep from './RecipeStep';
// component


const RecipeStepGroup = () => {

  return(
  <div className="recipe-desc">
    <h3 className='ingr-title'>레시피</h3>
    <RecipeStep />
  </div>
  );
}

export default RecipeStepGroup;