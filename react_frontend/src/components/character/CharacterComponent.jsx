import React, {useEffect} from 'react';
// component
import Character from './Character';
import CharacterCreate from './CharacterCreate';

const CharacterComponent = () => {

  // useEffect(() => {
  //   const  = async () => {
  //     const response = await fetch(
  //       'https://react-http-6b4a6.firebaseio.com/meals.json'
  //     );

  //     if (!response.ok) {
  //       throw new Error('Something went wrong!');
  //     }

  //     const responseData = await response.json();

  //     const loadedMeals = [];

  //     for (const key in responseData) {
  //       loadedMeals.push({
  //         id: key,
  //         name: responseData[key].name,
  //         description: responseData[key].description,
  //         price: responseData[key].price,
  //       });
    
  // },[]);

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