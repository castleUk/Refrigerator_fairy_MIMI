import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { instance } from "../api/Api";
import NutrientComponent from "../nutrient/NutrientComponent";

const InventoryItem = (props) => {
  const location = useLocation();
  const [itemList, setItemList] = useState([]);
  const [itemInfo, setItemInfo] = useState([]);
  const [showModal, setShowModal] = useState(false);

    const index = location.state;

    console.log("인덱스"  + index)

  


  useEffect(() => {
   
    const onItemList = async () => {
      console.log("onItemList 실행됌");
      try {
        
        const response = await instance.get(`/api/inventory/${index}`);
        const data = response.data;
        setItemList(data);
      } catch (error) {
        console.log(error);
      }
    };

    onItemList();
  }, [props.itemCreateShow]);

  const closeModalHandler = () => {
    setShowModal(false);
  };

  const modalHandler = (itemName) => {
    setShowModal(true);
    setItemInfo(itemList.find((e) => e.itemName === itemName));
  };
  console.log("아이템리스트" + itemList)
  return (
    <>
      <div className="item col">
        {itemList.map((it) => (
          <li key={it.inventoryItemId}>
            <img
              alt="itemImage"
              className="item-img"
              src={it.itemImg}
              onClick={() => modalHandler(it.itemName)}
            />
          </li>
        ))}

        <NutrientComponent
          itemInfo={itemInfo}
          show={showModal}
          onHide={closeModalHandler}
          setItemInfo={setItemInfo}
        />
      </div>
    </>
  );
};

export default InventoryItem;
