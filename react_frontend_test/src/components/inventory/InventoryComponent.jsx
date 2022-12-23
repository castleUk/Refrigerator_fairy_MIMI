import React, { useState } from 'react';
// component
import InventoryCarousel from './InventoryCarousel';
import InventoryIngrAdd from './InventoryIngrAdd';

const InventoryComponent = () => {
  // 냉장 보관 / 냉동 보관 / 실온 보관
  return(
    <div className='inventory-component'>
      <div className='inventory-content'>
        <div className='content-header'>
          <h4 className='title'>냉장보관</h4>
          <InventoryIngrAdd />
        </div>
        <div className='content-body'>
          <InventoryCarousel />
        </div>
      </div>
    </div>
  );
}

export default InventoryComponent;