import React from 'react';
import Content from './common/Content';
import Header from './common/Header';

const Layout = () => {
  return(
    <div className='components'>
      <Header/>
      <Content />
    </div>
  );
}

export default Layout;