import React from 'react';
// component
import { useLocation } from 'react-router-dom';
import Content from './common/Content';
import Header from './common/Header';

const ContentLayout = () => {
  const location = useLocation();
	const index = location.state.index;
  return(
    <div className='components cts'>
      <Header/>
      <Content index={index}/>
      {/* <InventoryClose /> */}
      {/* <InventoryOpen /> */}
    </div>
  );
}

export default ContentLayout;