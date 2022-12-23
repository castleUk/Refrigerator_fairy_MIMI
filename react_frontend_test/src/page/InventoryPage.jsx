import React from 'react';
import IngrContentComponent from '../components/ingrContent/IngrContentComponent';
import InventoryComponent from '../components/inventory/InventoryComponent';

const InventoryPage = () => {
  return(
    <div className='page inventory-page'>
      {/* <InventoryComponent /> */}

      <div className='row'>
        <div className='col col-7'>
        <div className='right'>
          <InventoryComponent />
        </div>
        </div>
        <div className='col col-5'>
          <div className='right'>
            <IngrContentComponent />
          </div>
        </div>
      </div>
    </div>
  );
}

export default InventoryPage;