import React, { useState } from "react";
import { useEffect } from "react";
import { instance } from "../api/Api";
// component
import ItemAddForm from "./ItemAddForm";
import ItemSearchForm from "./ItemSearchForm";

const ItemSearchAddComponent = (props) => {
  //재료검색..
  const [search, setSearch] = useState("");
  const [itemList, setItemList] = useState([]);
  const [filterItemList, setFilterItemList] = useState([]);

  /////////// 이 부분 뭔가 손 봐야 할것 같은데....?
  useEffect(() => {
    const itemSearch = async () => {
      try {
        const response = await instance.get(`/api/item`);
        const data = response.data.body.item;
        console.log("데이터" + JSON.stringify(data));
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
        const data = response.data.body.item;
        console.log("데이터2" + data);
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
        <ItemSearchForm
          onSearch={onSearch}
          search={search}
          onChangeSearch={onChangeSearch}
        />
        <ItemAddForm
          filterItemList={filterItemList}
          onFreezerItemAdd={props.onFreezerItemAdd}
          hide={props.hide}
        />
      </div>
    </div>
  );
};

export default ItemSearchAddComponent;
