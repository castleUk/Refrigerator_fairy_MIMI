import React, { useState } from 'react';
import InventoryItem from './InventoryItem';

const InventoryItemGroup = () => {

  // 냉장고 속 재료 목록 그룹 (한 줄)
  return(
    <div className='inventory-list'>
      <ul className='ingr-group'>
        <InventoryItem />
      </ul>
    </div>
  );
}

export default InventoryItemGroup;