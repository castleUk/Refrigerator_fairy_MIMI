import React, { useState, useCallback } from "react";
// template
import Card from "react-bootstrap/Card";
// icon

import Modals from "../common/Modals";

import { BsPlusCircleDotted } from "react-icons/bs";
import FredgeClose from "../fredge/FredgeClose";

const CharacterCreateForm = ({ onRegister }) => {
  //냉장고 이름
  const [freezerName, SetFreezerName] = useState("");
  console.log("freezerName" + freezerName);

  // modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const changeFreezerNameHandler = useCallback((e) => {
    SetFreezerName(e.target.value);
  }, []);

  const submitHandler = useCallback(
    (e) => {
      e.preventDefault();
      onRegister(freezerName);
    },
    [freezerName, onRegister]
  );

  console.log(show)
  return (
    <>
      <div className="character create">
        <Card>
          <div className="content-header">
            <div className="title">냉장고를 생성하세요. </div>
          </div>
          <div className="content-body">
            <FredgeClose />
            <button className="btn-add" onClick={handleShow}>
              <BsPlusCircleDotted className="icon" />
            </button>
          </div>
        </Card>
      </div>

      {show && <Modals
        onShow={handleShow}
        onHide={handleClose}
        onSubmit={submitHandler}
        onClick={handleClose}
        onChange={changeFreezerNameHandler}
      />}
    </>
  );
};

export default CharacterCreateForm;
