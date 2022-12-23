import React, { useState } from 'react';
import RecipeHeader from './RecipeHeader';
import RecipeBody from './RecipeBody';
// component


const RecipeComponent = () => {
  return(
    <div className='recipe-component'>
    <div className='recipe-content'>
      <div className='recipe'>
        <RecipeHeader/>
        <RecipeBody/>
      </div>
    </div>
  </div>
  );
}

export default RecipeComponent;