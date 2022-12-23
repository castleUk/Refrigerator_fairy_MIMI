import React, { useState } from 'react';
// component

const RecipeHeader = ({rcp}) => {

  return(

    <div className='content-header'>
      <h3 className='sub-title'>서브 메뉴</h3>
      <h1 className='title'>메인 메뉴</h1>
      <div className='recipe-main-img'>
        <img className='main-img' src="#" alt=""></img>
      </div>
    </div>
  );
}

export default RecipeHeader;