import React from 'react';
// template
import Table from 'react-bootstrap/Table';

const NutrientComponent = () => {
  return(
    <div className='nutrient-component'>
      <div className='nutrient-content'>
        <div className='content-header'>
          <h4>양파 : 영양 성분</h4>
        </div>
        <div className='content-body'>
        <Table striped className='table'>
          <tr>
            <th>1회당 제공량당 함량</th>
            <td>2</td>
          </tr>
          <tr>
            <th>열량</th>
            <td>2</td>
          </tr>
          <tr>
            <th>지방</th>
            <td>2</td>
          </tr>
          <tr>
            <th>콜레스콜</th>
            <td>2</td>
          </tr>
          <tr>
            <th>나트륨</th>
            <td>2</td>
          </tr>
          <tr>
            <th>칼슘</th>
            <td>2</td>
          </tr>
          <tr>
            <th>탄수화물</th>
            <td>2</td>
          </tr>
          <tr>
            <th>단백질</th>
            <td>2</td>
          </tr>
        </Table>
        </div>
      </div>
    </div>
  );
}

export default NutrientComponent;