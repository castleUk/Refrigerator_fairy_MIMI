import React, { useState, useEffect } from "react";
import axios from "axios";
// template
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const ItemSearchForm = (props) => {
  return (
    <div className="ingr-search search">
      <Form onSubmit={props.onSearch}>
        <InputGroup className="mb-4">
          <Form.Control
            placeholder="재료를 입력하세요."
            type="text"
            value={props.search}
            onChange={props.onChangeSearch}
          />
          <Button type="submit" variant="primary" id="btnFind">
            찾기
          </Button>
        </InputGroup>
      </Form>
    </div>
  );
};

export default ItemSearchForm;
