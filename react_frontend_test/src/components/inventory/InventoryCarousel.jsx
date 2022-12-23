import React, { useState } from 'react';
//template
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
// component
import InventoryIngrGroup from './InventoryIngrGroup';

const InventoryCarousel = () => {

  return(
    <Swiper className="inventory-carousel"
      navigation={true} modules={[Navigation]}>
      <SwiperSlide>
        <InventoryIngrGroup />
      </SwiperSlide>
      <SwiperSlide>
        <InventoryIngrGroup />
      </SwiperSlide>
    </Swiper>
  );
}

export default InventoryCarousel;