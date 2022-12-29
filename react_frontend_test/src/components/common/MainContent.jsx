import React from 'react';
import { Routes, Route } from 'react-router-dom';
// component
import FreezerPage from '../../page/FreezerPage';

const Content = () => {
  return(
    <main className='contents'>
      <FreezerPage/>
    </main>
  );
}

export default Content;