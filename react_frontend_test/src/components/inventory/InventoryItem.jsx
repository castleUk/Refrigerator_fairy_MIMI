import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const InventoryItem = (props) => {
  const navigate = useNavigate();

  const [itemList, SetItemList] = useState([]);

  //냉장고속 재료 목록 가져오기
  const onItemList = async () => {
    console.log("재료목록 가져오기 작동!");

    const token = localStorage.getItem("accessToken");
    const headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    };
    try {
      const response = await axios.get(`/api/inventory/0`, {
        headers: headers,
      });
      const data = await response.data;
      SetItemList(data);
      console.log(itemList);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    onItemList();
  }, []);

  // 냉장고 속 재료
  return (
    <>
      <div>
        {itemList.map((it) => {
          return (
            <div key={it.inventoryItemId}>
              <div>
                이름 : {it.itemName}
                갯수 : {it.count}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default InventoryItem;
