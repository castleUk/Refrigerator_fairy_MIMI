import React, { useState } from 'react';
import InventoryIngr from './InventoryIngr';

const InventoryIngrGroup = () => {

  // 냉장고 속 재료 목록 그룹 (한 줄)
  return(
    <div className='inventory-list'>
      <ul className='ingr-group'>
        <InventoryIngr />
      </ul>
    </div>
  );
}

export default InventoryIngrGroup;