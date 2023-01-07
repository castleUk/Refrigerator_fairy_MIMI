import React, { useState } from "react";
//component
import Recipe from "./Recipe";

const RecipesGroup = ({ itemName }) => {
  return (
    <div className="item-group row">
      <Recipe itemName={itemName} />
    </div>
  );
};

export default RecipesGroup;
