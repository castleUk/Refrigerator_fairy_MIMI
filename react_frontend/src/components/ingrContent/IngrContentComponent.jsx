import React from 'react';
// template
import Card from 'react-bootstrap/Card';
// component
import NutrientComponent from '../nutrient/NutrientComponent';
import ItemsComponent from '../items/ItemsComponent';

const IngrContentComponent = () => {
  return(
    <div className='ingr-content-component'>
      <Card>
        <Card.Body>
          <NutrientComponent />
          <ItemsComponent />
        </Card.Body>
      </Card>
    </div>
  );
}

export default IngrContentComponent;