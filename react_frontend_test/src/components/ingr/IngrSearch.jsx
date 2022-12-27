import React, { useState, useEffect } from "react";
import axios from "axios";
// template
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const IngrSearch = () => {
  //재료검색..
  const [search, setSearch] = useState("");

  
  const onChange = (e) => {
    setSearch(e.target.value);
  };
  console.log(search)

 
  
  return (
    <div className="ingr-search search">
      <InputGroup className="mb-4">
        <Form.Control
          placeholder="재료를 입력하세요."
          type="text"
          value={search}
          onChange={onChange}
        />
        <Button variant="primary" id="btnFind">
          찾기
        </Button>
      </InputGroup>
    </div>
  );
};

export default IngrSearch;
