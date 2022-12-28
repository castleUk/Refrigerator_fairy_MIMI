import React, { useState } from 'react';
//template
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
// component
import InventoryItemGroup from './InventoryItemGroup';

const InventoryCarousel = () => {

  return(
    <Swiper className="inventory-carousel"
      navigation={true} modules={[Navigation]}>
      <SwiperSlide>
        <InventoryItemGroup />
      </SwiperSlide>
      <SwiperSlide>
        <InventoryItemGroup />
      </SwiperSlide>
    </Swiper>
  );
}

export default InventoryCarousel;