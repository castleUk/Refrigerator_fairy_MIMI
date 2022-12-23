import React from 'react';
// template
import Card from 'react-bootstrap/Card';
// component
import NutrientComponent from '../nutrient/NutrientComponent';
import ItemsComponent from '../items/ItemsComponent';
import WeatherComponent from '../weather/WeatherComponent';
import TimeComponent from '../time/TimeComponent';

const IngrContentComponent = () => {
  return(
    <div className='ingr-content-component'>
      <WeatherComponent />
      <TimeComponent />
      <NutrientComponent />
      <ItemsComponent />
    </div>
  );
}

export default IngrContentComponent;