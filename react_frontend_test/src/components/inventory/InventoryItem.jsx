import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import NutrientComponent from "../nutrient/NutrientComponent";
import { instance } from "../api/Api";

const InventoryItem = (props) => {
  const navigate = useNavigate();

  const [itemList, setItemList] = useState([]);
  const [itemInfo, setItemInfo] = useState([]);
  const [showModal, setShowModal] = useState(false);
  //냉장고속 재료 목록 가져오기
  const onItemList = async () => {
    const index = props.index;
    try {
      const response = await instance.get(`/api/inventory/${index}`);
      const data = response.data;
      setItemList(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    onItemList();
  }, [showModal]);

  const closeModalHandler = () => {
    setShowModal(false);
  };

  const modalHandler = (itemName) => {
    setShowModal(true);
    setItemInfo(itemList.find((e) => e.itemName === itemName));
  };

  return (
    <>
      {itemList.map((it) => {
        return (
        <div key={it.InventoryItemId}>     
            <div className="item col">
              <div>
                <img
                  className="item-img"
                  src={it.itemImg}
                  onClick={() => modalHandler(it.itemName)}
                />
              </div>
            </div>
            </div>
          );
      })}
      <NutrientComponent
        itemInfo={itemInfo}
        show={showModal}
        onHide={closeModalHandler}
        setItemInfo={setItemInfo}
      />
    </>
  );
};

export default InventoryItem;
