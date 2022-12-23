import React, {useEffect, useState, useCallback} from 'react';
// component
import Character from './Character';
import CharacterCreateContainer from './CharacterCreateContainer';
import * as api from "../../lib/api";

// template
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";


const CharacterComponent = () => {

  
  const [freezer, SetFreezer] = useState([]);
  const [changeFreezerName, SetChangeFreezerName] = useState("");
  // modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


    //조회처리
    const onListUp = async () => {
      try {
        const data = await api.freezerList();
        SetFreezer(data);
      } catch (e) {
        alert(e.response.data);
      }
    };
    console.log(freezer[0])
    console.log(freezer[1])
    console.log(freezer[2])
  


  useEffect(() => {
    onListUp();
  },[]);


  const changeFreezerNameHandler = useCallback((e) => {
    SetChangeFreezerName(e.target.value);
  }, []);

  // const submitHandler = useCallback(
  //   (e) => {
  //     e.preventDefault();
  //     onChange(changeFreezerName);
  //   },
  //   [changeFreezerName, onChange]
  // );



  return(
    <>
    <div className='character-component'>
      <div className='character-content'>
        <div className="row">
          <div className="col">
            {freezer[0] ?  <Character onFreezer={freezer[0]}/> : <CharacterCreateContainer />}
          </div>

          <div className="col">
          {freezer[1] ? <Character onFreezer={freezer[1]}/> : <CharacterCreateContainer />}
          </div>

          <div className="col">
          {freezer[2] ? <Character onFreezer={freezer[2]}/> : <CharacterCreateContainer />}
          </div>
        </div>
      </div>
    </div>


</>
    
  );
}

export default CharacterComponent;