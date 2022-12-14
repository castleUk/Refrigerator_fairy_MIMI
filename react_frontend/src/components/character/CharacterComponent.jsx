import React, { useEffect } from "react";
// component
import Character from "./Character";
import CharacterCreate from "./CharacterCreate";
import * as api from "../../lib/api";

const CharacterComponent = () => {
  //등록처리
  const onAddChar = async (charInfo) => {
    console.log("아아")
    try {
      await api.addChar(charInfo);

      alert(" 캐릭터 생성");
    } catch (e) {
      alert("캐릭터 생성실패 :" + e.response.data);
    }

  };

  return (
    <div className="character-component">
      <div className="character-content">
        <div className="row">
          <div className="col">
            <Character />
          </div>

          <div className="col">
            <CharacterCreate onAddChar={onAddChar}/>
          </div>

          <div className="col">
            <CharacterCreate onAddChar={onAddChar}/>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CharacterComponent;
