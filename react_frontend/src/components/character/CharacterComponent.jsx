import React from 'react';
// component
import Character from './Character';
import CharacterCreate from './CharacterCreate';

const CharacterComponent = () => {
  return(
    <div className='character-component'>
      <div className='character-content'>
        <div className="row">
          <div className="col">
            <Character />
          </div>

          <div className="col">
            <CharacterCreate />
          </div>

          <div className="col">
            <CharacterCreate />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CharacterComponent;