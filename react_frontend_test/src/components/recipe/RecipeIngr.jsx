import React, { useState } from 'react';
import dummy from '../../db/recipe.json';
// component

const RecipeIngr = ({rcp}) => {

  return(
  <div className="ingr-content">
    <div className='ingr'>
      <div className="ingr-name">양파</div>
      <div className="ingr-value">재료값</div>
    </div>
  </div>
  );
}

export default RecipeIngr;