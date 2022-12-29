import React from 'react';
// component
import MainContent from './common/MainContent';
import Header from './common/Header';

const Layout = () => {
  return(
    <div className='components'>
      <Header/>
      <MainContent />
    </div>
  );
}

export default Layout;