import React, { useState } from 'react';
//template
import Carousel from 'react-bootstrap/Carousel';
import Inventory from './Inventory';

const InventoryCarousel = () => {

  return(
    <Carousel interval={null} wrap={false}>
      <Carousel.Item>
        <Inventory />
      </Carousel.Item>
      <Carousel.Item>
        <Inventory />
      </Carousel.Item>
    </Carousel>
  );
}

export default InventoryCarousel;