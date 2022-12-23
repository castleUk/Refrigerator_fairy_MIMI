import React, { useState } from 'react';
//component
import Item from './Item';

const ItemsGroup= () => {
  return(
    <div className="item-group row">
      <Item />
    </div>
  );
}

export default ItemsGroup;