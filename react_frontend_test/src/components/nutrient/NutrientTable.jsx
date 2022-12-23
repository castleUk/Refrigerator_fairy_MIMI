import React from 'react';
// template
import Table from 'react-bootstrap/Table';
import Nutrient from './Nutrient';

const NutrientTable = () => {
  return(
    <>
    <h6 className='title'>영양성분</h6>
    <Table striped className='table'>
      <Nutrient />
    </Table>
    </>
  );
}

export default NutrientTable;