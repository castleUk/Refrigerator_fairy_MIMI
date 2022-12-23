import React from 'react';
import { Routes, Route } from 'react-router-dom';
// component
import CharacterPage from '../../page/CharacterPage';

const Content = () => {
  return(
    <main className='contents'>
      <CharacterPage/>
    </main>
  );
}

export default Content;