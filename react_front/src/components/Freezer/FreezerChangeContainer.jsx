import React from "react";
import { useNavigate } from "react-router-dom";
//component
import FredgeClose from "../fredge/FredgeClose";
//icon
import { GiCardExchange } from "react-icons/gi";

const FreezerChangeContainer = ({ freezer }) => {
  const navigate = useNavigate();

  const FreezerChangeHandler = (index, e) => {

    if (index === 0 || index === 1 || index === 2) {
      navigate(`/inventory/${index}`, { state: `${index}` });
    }
    window.location.reload();
    e.preventDefault();
  };

  return (
    <>
      {freezer.map((it, index) => (
        <div key={it.id} className="change">
          <div className="img">
            <FredgeClose />
          </div>
          <div className="text">{it.name}</div>
          <div className="btn-change">
            <GiCardExchange
              className="icon"
              onClick={() => {
                FreezerChangeHandler(index);
              }}
            ></GiCardExchange>
          </div>
        </div>
      ))}
    </>
  );
};

export default FreezerChangeContainer;
