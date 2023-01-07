import React, { useState } from "react";
//template
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
// component
import InventoryItemGroup from "./InventoryItemGroup";

const InventoryCarousel = (props) => {
  console.log("InventoryCarousel" + props.index);
  return (
    <Swiper
      className="inventory-carousel"
      navigation={true}
      modules={[Navigation]}
    >
      <SwiperSlide>
        <InventoryItemGroup
          index={props.index}
          itemCreateShow={props.itemCreateShow}
        />
      </SwiperSlide>
      {/* <SwiperSlide>
        <InventoryItemGroup index={props.index} itemCreateShow={props.itemCreateShow}/>
      </SwiperSlide> */}
    </Swiper>
  );
};

export default InventoryCarousel;
