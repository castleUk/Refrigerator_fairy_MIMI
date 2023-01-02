import React from 'react';
// template
import Table from 'react-bootstrap/Table';
import Nutrient from './Nutrient';

const NutrientTable = ({nutrientInfo}) => {
  return(
    <>
    <h6 className='title'>영양성분</h6>
    <Table striped className='table'>
      <Nutrient nutrientInfo={nutrientInfo}/>
    </Table>
    </>
  );
}

export default NutrientTable;