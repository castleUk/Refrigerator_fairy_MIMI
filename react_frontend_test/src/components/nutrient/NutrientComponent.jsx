import React from "react";
// component
import NutrientModal from "./modals/NutrientModal";

const NutrientComponent = ({ show, onHide, itemInfo, setItemInfo }) => {
  return (
    <NutrientModal
      show={show}
      onHide={onHide}
      itemInfo={itemInfo}
      setItemInfo={setItemInfo}
    />
  );
};

export default NutrientComponent;
