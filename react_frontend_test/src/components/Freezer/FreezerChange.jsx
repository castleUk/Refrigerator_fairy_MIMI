import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
//component
import FredgeClose from "../fredge/FredgeClose";
//icon
import { GiCardExchange, GiConsoleController } from "react-icons/gi";



const FreezerChange = ({ freezer }) => {
   const navigate = useNavigate();
 

  const FreezerChangeHandler = (index, e) => {

    console("인덱스2" + index)

    if(index === "0" || index === "1" || index === "2" ){
      navigate(`/inventory/${index}` , {state : `${index}`});
      }
    window.location.reload();
    e.preventDefault();
    

  }

  console.log("프리저" + JSON.stringify(freezer));
  return (
    <>
      {freezer.map((it, index) => (
        <div className="change">
          <div className="img">
            <FredgeClose />
          </div>
          <div className="text">{it.name}</div>
          <div className="btn-change">
            <GiCardExchange className="icon" onClick={() => {
              FreezerChangeHandler(index)
            }}></GiCardExchange>
          </div>
        </div>
      ))}
    </>
  );
};

export default FreezerChange;
