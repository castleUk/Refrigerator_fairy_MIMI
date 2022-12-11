import React, { useState } from 'react';
// component
import Ingr from './Ingr';
import IngrSearch from './IngrSearch';

const IngrComponent = () => {
  return(
    <div className='ingr-component'>
      <div className='ingr-content'>
        <IngrSearch />
        <Ingr />
      </div>
    </div>
  );
}

export default IngrComponent;