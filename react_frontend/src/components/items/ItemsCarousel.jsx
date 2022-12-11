import React, { useState } from 'react';
// template
import Carousel from 'react-bootstrap/Carousel';
import Item from './Item';
import ItemsGroup from './ItemGroup';

const ItemsCarousel = () => {
  return(
    <Carousel>
      <Carousel.Item>
        <ItemsGroup />
      </Carousel.Item>
    </Carousel>
  );
}

export default ItemsCarousel;