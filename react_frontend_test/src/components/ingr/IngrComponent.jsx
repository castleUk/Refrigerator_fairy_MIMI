import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
// component
import Ingr from './Ingr';
import IngrSearch from './IngrSearch';

const IngrComponent = () => {
  const [itemList, setItemList] = useState([]);

   //조회처리
   const onListItem = async () => {
    const token = localStorage.getItem("accessToken");
    const headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    };

    try {
      const response = await axios.get("/api/item", {
        headers: headers,
      });
      const data = await response.data;
     console.log(data)
     setItemList(data)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    onListItem();
  }, []);



  return(
    <div className='ingr-component'>
      <div className='ingr-content'>
        <IngrSearch />
        <Ingr />
      </div>
    </div>
  );
}

export default IngrComponent;