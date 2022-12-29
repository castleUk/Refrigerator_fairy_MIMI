import React from 'react';
import Weather from './Weather';

const WeatherComponent = () => {
  return (
    <div className='weather-component'>
      <div className='weather-content'>
        <div className='weather'>
          <h5 className='title'>날씨</h5>
          <Weather />
        </div>
      </div>
    </div>
  );
}

export default WeatherComponent;