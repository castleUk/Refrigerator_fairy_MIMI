import React, { useCallback, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// template
import Card from "react-bootstrap/Card";
import Dropdown from "react-bootstrap/Dropdown";
// icon
import { AiOutlineMore } from "react-icons/ai";
import FredgeClose from "../fredge/FredgeClose";

import axios from "axios";
import Modals from "../common/Modals";
import DeleteModals from "../common/DeleteModals";

const Freezer = (props) => {
  const navigate = useNavigate();

  
  //수정처리
  const onChangeName = async (freezerName) => {
    console.log("수정처리 작동!")
    const data = {
      name: freezerName,
    };
    const index = props.index;
    const token = localStorage.getItem("accessToken");
    const headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    };
    try {
      await axios.put(
        `/api/freezer/${index}`,
        JSON.stringify(data),
        {
          headers: headers,
        }
      );
      props.onChange();
      navigate("/freezer");
    } catch (error) {
      console.log(error);
    }
  };

  //삭제처리
  const onDelete = async () => {
    const token = localStorage.getItem("accessToken");
    const index = props.index;
    const headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    };

    try {
      await axios.delete(`/api/freezer/${index}`, {
        headers: headers,
      });
      props.onChange();
      navigate("/freezer");
    } catch (error) {
      console.log(error);
    }
  };



  // 이름 변경modal
  const [changeFreezerModal, setChangeFreezerModal] = useState(false);
  const changeModalShow = () => setChangeFreezerModal(true);
  const changeModalHide = () => setChangeFreezerModal(false);
  // 삭제 확인 모달
  const [deleteFreezerModal, setDeleteFreezerModal] = useState(false);
  const deleteModalShow = () => setDeleteFreezerModal(true);
  const deleteModalHide = () => setDeleteFreezerModal(false);

  //

  const [freezerName, SetFreezerName] = useState("");

  const changeFreezerNameHandler = useCallback((e) => {
    SetFreezerName(e.target.value);
  }, []);

  const changeSubmitHandler =
    (e) => {
      e.preventDefault();
      changeModalHide();
      onChangeName(freezerName);
    }

  const deleteSubmitHandler = 
    (e) => {
      e.preventDefault();
      deleteModalHide();
      onDelete();
    }

  return (
    <div className="character">
      <Card>
        <div className="content-header">
          <div className="title">{props.onFreezer.name}</div>
          <Dropdown className="character-dropdown custom-dropdown">
            <Dropdown.Toggle id="characterDropdown">
              <AiOutlineMore className="icon" />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={changeModalShow}>이름 변경</Dropdown.Item>
              <Dropdown.Item onClick={deleteModalShow}>삭제</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="content-body">
          <Link to={`/inventory/${props.index}`} state={{ index: props.index }}>
            <FredgeClose />
          </Link>
        </div>
      </Card>
      {changeFreezerModal && (
        <Modals
          onShow={changeModalShow}
          onHide={changeModalHide}
          onSubmit={changeSubmitHandler}
          onChange={changeFreezerNameHandler}
          placeholder="냉장고 이름 뭘로 바꿀까용"
          buttonName="수정"
        />
      )}

      {deleteFreezerModal && (
        <DeleteModals
          onShow={deleteModalShow}
          onHide={deleteModalHide}
          onSubmit={deleteSubmitHandler}
        />
      )}
    </div>
  );
};

export default Freezer;
