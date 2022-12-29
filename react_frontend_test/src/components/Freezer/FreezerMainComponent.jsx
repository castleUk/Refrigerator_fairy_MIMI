import React, { useEffect, useState } from "react";
// component
import axios from "axios";
import Freezer from "./Freezer";
import FreezerCreateContainer from "./FreezerCreateContainer";

// template

const FreezerMainComponent = () => {
  const [freezer, SetFreezer] = useState([]);
  const [change, SetChange] = useState(false);

  const changeHandler = () => {
    console.log("실행됐음");
    if (change === false) {
      SetChange(true);
    } else {
      SetChange(false);
    }
  };

  //조회처리
  const onListUp = async () => {
    const token = localStorage.getItem("accessToken");
    const headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    };

    try {
      const response = await axios.get("/api/freezer", {
        headers: headers,
      });
      const data = await response.data;
      SetFreezer(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    onListUp();
  }, [change]);

  return (
    <>
      <div className="character-component">
        <div className="character-content">
          <div className="row">
            <div className="col">
              {freezer[0] ? (
                <Freezer
                  onFreezer={freezer[0]}
                  index="0"
                  onChange={changeHandler}
                />
              ) : (
                <FreezerCreateContainer onChange={changeHandler}/>
              )}
            </div>

            <div className="col">
              {freezer[1] ? (
                <Freezer
                  onFreezer={freezer[1]}
                  index="1"
                  onChange={changeHandler}
                />
              ) : (
                <FreezerCreateContainer onChange={changeHandler}/>
              )}
            </div>

            <div className="col">
              {freezer[2] ? (
                <Freezer
                  onFreezer={freezer[2]}
                  index="2"
                  onChange={changeHandler}
                />
              ) : (
                <FreezerCreateContainer onChange={changeHandler}/>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FreezerMainComponent;
