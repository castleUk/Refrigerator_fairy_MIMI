import React from 'react';
import ItemsGroup from './ItemGroup';
// component
import ItemsCarousel from './ItemsCarousel';

const ItemsComponent = () => {
  return(
    <div className='items-component'>
      <div className='items-content'>
        <div className='content-header'>
          <h5>메뉴 추천</h5>
        </div>
        <div className='content-body'>
          <ItemsGroup />
        </div>
      </div>
    </div>
  );
}

export default ItemsComponent;