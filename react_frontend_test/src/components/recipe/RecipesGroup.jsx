import React, { useState } from 'react';
//component
import Recipe from './Recipe';

const RecipesGroup= () => {
  return(
    <div className="item-group row">
      <Recipe />
    </div>
  );
}

export default RecipesGroup;