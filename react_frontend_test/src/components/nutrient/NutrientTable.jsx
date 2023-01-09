import React from 'react';
// template
import Table from 'react-bootstrap/Table';
import Nutrient from './Nutrient';

const NutrientTable = ({nutrientInfo}) => {
  return(
    <>
    <h5 className='title'>영양성분</h5>
    <Table striped className='table'>
      <Nutrient nutrientInfo={nutrientInfo}/>
    </Table>
    </>
  );
}

export default NutrientTable;