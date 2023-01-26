import React from 'react';
import ItemContentComponent from '../components/ItemContent/ItemContentComponent';
import InventoryComponent from '../components/inventory/InventoryComponent';
import { useEffect } from 'react';
import { useState } from 'react';
const InventoryPage = (props) => {

  const [time, setTime] = useState();
  const [season, setSeason] = useState();

  const timeChecking = () => {
    console.log("타임체킹")
    const date = new Date();
    const hours = date.getHours();
    const months = date.getMonth() + 1;
    setTime(hours)
    setSeason(months)
  }

  useEffect(() => {
    timeChecking()
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
            <ItemContentComponent index={props.index} time={time} season={season}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InventoryPage;