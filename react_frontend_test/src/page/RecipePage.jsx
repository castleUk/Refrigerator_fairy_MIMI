import React, { useState } from "react";
//template
import { Button, Form, InputGroup } from "react-bootstrap";
//component
import Header from "../components/common/Header";
import RecipeListComponent from "../components/recipe/List/RecipeListComponent";

const RecipePage = () => {
  // const [search, setSearch] = useState("");
  // const [isSearch, setIsSearch] = useState(false);

  // const itemNameHandler = (name) => {
  //   const itemInfo = itemList.filter((item) => {
  //     return item.name == name;
  //   });
  //   setFiltered(itemInfo);
  // };

  return (
    <div className="page recipe-page">
      <Header />
      <div className="layout container">
        <div className="search">
          <InputGroup>
            <Form.Control
              placeholder="메뉴 이름을 검색하세요."
              type="text"
              // onChange={(e) => {
              //   setSearch(e.target.value);
              //   setIsSearch(true);
              // }}
            />
            <Button variant="outline-primary" className="btn-find">
              찾기
            </Button>
          </InputGroup>
        </div>
        <RecipeListComponent />
      </div>
    </div>
  );
};

export default RecipePage;
