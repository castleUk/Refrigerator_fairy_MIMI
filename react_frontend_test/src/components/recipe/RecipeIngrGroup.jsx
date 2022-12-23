import React, { useState } from 'react';
import RecipeIngr from './RecipeIngr';
// component

const RecipeIngrGroup = ({rcp}) => {

  return(
  <div className='recipe-ingr'>
    <div className='ingr-header'>
      <h3 className='ingr-title'>재료</h3>
      <h5 className='ingr-sub'>2인분</h5>
    </div>
    <RecipeIngr />
  </div>
  );
}

export default RecipeIngrGroup;