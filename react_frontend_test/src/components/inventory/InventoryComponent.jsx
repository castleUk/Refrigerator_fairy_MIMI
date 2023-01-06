import React, { useState } from "react";
// component
import InventoryCarousel from "./InventoryCarousel";
import InventoryItemAdd from "./InventoryItemAdd";

const InventoryComponent = (props) => {
  const [itemCreateShow, setItemCreateShow] = useState(false);

  // 냉장 보관 / 냉동 보관 / 실온 보관

  return (
    <div className="inventory-component">
      <div className="inventory-content">
        <div className="content-header">
          <h4 className="title">냉장보관</h4>
          <InventoryItemAdd
            index={props.index}
            itemCreateShow={itemCreateShow}
            setItemCreateShow={setItemCreateShow}
          />
        </div>
        <div className="content-body">
          <InventoryCarousel index={props.index} itemCreateShow={itemCreateShow}/>
        </div>
      </div>
    </div>
  );
};

export default InventoryComponent;
