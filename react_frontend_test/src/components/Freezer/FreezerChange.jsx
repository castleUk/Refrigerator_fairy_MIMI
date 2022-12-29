import React from 'react';
//component
import FredgeClose from '../fredge/FredgeClose';
//icon
import { GiCardExchange } from "react-icons/gi";

const FreezerChange = () => {
  return(
    <div className='change'>
      <div className='img'>
        <FredgeClose />
      </div>
      <div className='text'>
        <div className='title'>우리집 냉장고 1</div>
        <div className='btn-change'>
          <GiCardExchange className='icon'></GiCardExchange>
        </div>
      </div>
    </div>
  );
}

export default FreezerChange;