import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const InventoryIngr = (props) => {
  const navigate = useNavigate();

  const [itemList, SetItemList] = useState([]);
   
  //냉장고속 재료 목록 가져오기
   const onItemList = async () => {
    console.log("재료목록 가져오기 작동!")
    const index = 0;

    const token = localStorage.getItem("accessToken");
    const headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    };
    try {
      const response = await axios.get(`/api/inventory/${index}`, {
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
  return(
    <>
    <li className='ingr'>11</li>
    <li className='ingr'>22</li>
    <li className='ingr'>33</li>
    <li className='ingr'>44</li>
    <li className='ingr'>55</li>
    <li className='ingr'>66</li>
    <li className='ingr'>77</li>
    </>
  );
}

export default InventoryIngr;