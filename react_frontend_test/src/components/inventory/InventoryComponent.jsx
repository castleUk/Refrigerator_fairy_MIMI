import React, { useState } from 'react';
// component
import InventoryCarousel from './InventoryCarousel';
import InventoryItemAdd from './InventoryItemAdd';

const InventoryComponent = (props) => {
  // 냉장 보관 / 냉동 보관 / 실온 보관

  console.log("inventoryComponent index" + props.index)
  return(
    <div className='inventory-component'>
      <div className='inventory-content'>
        <div className='content-header'>
          <h4 className='title'>냉장보관</h4>
          <InventoryItemAdd index={props.index}/>
        </div>
        <div className='content-body'>
          <InventoryCarousel index={props.index} />
        </div>
      </div>
    </div>
  );
}

export default InventoryComponent;