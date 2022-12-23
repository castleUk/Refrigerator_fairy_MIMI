import React from 'react';
// component
import Content from './common/Content';
import Header from './common/Header';
import InventoryClose from './inventory/InventoryClose';
import InventoryOpen from './inventory/InventoryOpen';

const ContentLayout = () => {
  return(
    <div className='components cts'>
      <Header/>
      <Content />
      {/* <InventoryClose /> */}
      {/* <InventoryOpen /> */}
    </div>
  );
}

export default ContentLayout;