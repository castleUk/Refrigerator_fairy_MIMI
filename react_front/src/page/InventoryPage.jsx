import React from 'react';
import ItemContentComponent from '../components/ItemContent/ItemContentComponent';
import InventoryComponent from '../components/inventory/InventoryComponent';
import { useEffect } from 'react';
import { useState } from 'react';
const InventoryPage = (props) => {

  const [timeCheck, setTimeCheck] = useState();
  const [seasonCheck, setSeasonCheck] = useState();

  const timeChecking = () => {
    console.log("타임체킹")
    const date = new Date();
    const hours = date.getHours();
    if (5 <= hours <= 10) {setTimeCheck("아침")}
    if (11 <= hours <= 15) {setTimeCheck("점심")}
    if (16 <= hours <= 20) {setTimeCheck("저녁")}
    if (21 <= hours <= 24) {setTimeCheck("야식")}
  };

  const seasonChecking = () => {
    console.log("시즌체킹")
    const date = new Date();
    const months = date.getMonth() + 1;
    if (3 <= months <= 5) {
      setSeasonCheck("봄");
    }
    if (6 <= months <= 8) {
      setSeasonCheck("여름");
    }
    if (9 <= months <= 11) {
      setSeasonCheck("가을");
    }
    if (12 <= months <= 2) {
      setSeasonCheck("겨울");
    }
  }

  useEffect(() => {
    timeChecking()
    seasonChecking()
  }, [])

  return(
    <div className='page inventory-page'>
      <div className='row'>
        <div className='col col-7'>
        <div className='left'>
          <InventoryComponent index={props.index}/>
        </div>
        </div>
        <div className='col col-5'>
          <div className='right'>
            <ItemContentComponent index={props.index} timeCheck={timeCheck} seasonCheck={seasonCheck}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InventoryPage;