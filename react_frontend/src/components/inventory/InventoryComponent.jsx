import React, { useState } from 'react';
// component
import InventoryCarousel from './InventoryCarousel';

const InventoryComponent = () => {

  return(
    <div className='inventory-component'>
      <div className='inventory-content'>
       <InventoryCarousel />
      </div>
    </div>
  );
}

export default InventoryComponent;