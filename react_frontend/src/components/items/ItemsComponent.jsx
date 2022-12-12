import React from 'react';
// component
import ItemsCarousel from './ItemsCarousel';

const ItemsComponent = () => {
  return(
    <div className='items-component'>
      <div className='items-content'>
        <div className='content-header'>
          <h4>메뉴 추천</h4>
        </div>
        <div className='content-body'>
          <ItemsCarousel />
        </div>
      </div>
    </div>
  );
}

export default ItemsComponent;