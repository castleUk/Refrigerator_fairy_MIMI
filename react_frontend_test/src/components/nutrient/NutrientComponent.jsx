import React from 'react';
// component
import NutrientTable from './NutrientTable';

const NutrientComponent = () => {
  return(
    <div className='nutrient-component'>
      <div className='nutrient-content'>
        <div className='content-header'>
          <h5 className='title'>양파</h5>
          <span className='count-text'>5개</span>
        </div>
        <div className='content-body'>
          <NutrientTable />
        </div>
      </div>
    </div>
  );
}

export default NutrientComponent;