import React, { useState } from "react";
import { useEffect } from "react";
import { instance } from "../api/Api";
// component
import Item from "./Item";
import ItemSearch from "./ItemSearch";

const ItemComponent = (props) => {
  //재료검색..
  const [search, setSearch] = useState("");
  const [itemList, setItemList] = useState([]);
  const [filterItemList, setFilterItemList] = useState([]);

  useEffect(() => {
    const itemSearch = async () => {
      try {
        const response = await instance.get(`/api/item`);
        const data = response.data;
        console.log("데이터" + data);
        setItemList(data);
      } catch (error) {
        console.log(error);
      }
    };
    itemSearch();
  }, []);

  const onSearch = (e) => {
    e.preventDefault();
    console.log("OnSearch 실행됨");
    if (search === null || search === "") {
      try {
        const response = instance.get(`/api/item`);
        const data = response.data;
        setItemList(data);
      } catch (error) {
        console.log(error);
      }
    } else {
      const filterData = itemList.filter((data) => data.name.includes(search));
      setFilterItemList(filterData);
    }

    setSearch("");
  };

  const onChangeSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };
  console.log(search);

  return (
    <div className="ingr-component">
      <div className="ingr-content">
        <ItemSearch
          onSearch={onSearch}
          search={search}
          onChangeSearch={onChangeSearch}
        />
        <Item
          filterItemList={filterItemList}
          onFreezerItemAdd={props.onFreezerItemAdd}
          hide={props.ItemModalClose}
        />
      </div>
    </div>
  );
};

export default ItemComponent;
