import React, { useState } from 'react';
// template
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper';
import Carousel from 'react-bootstrap/Carousel';
import Item from './Item';
import ItemsGroup from './ItemGroup';

const ItemsCarousel = () => {
  return(
    <Swiper 
      slidesPerView={1}
      spaceBetween={30}
      pagination={{
        clickable: true
      }}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop={true}
      navigation={true}
      modules={[Pagination, Navigation, Autoplay]}
      className="item-swiper"
    >
      <SwiperSlide>
        <ItemsGroup />
      </SwiperSlide>

      <SwiperSlide>
        <ItemsGroup />
      </SwiperSlide>
    </Swiper>
  );
}

export default ItemsCarousel;