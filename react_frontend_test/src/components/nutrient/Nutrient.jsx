import React from 'react';
import dummy from '../../db/nutrient.json';

const Nutrient = ({nutrientInfo}) => {
  return(
    <tbody>
    <tr>
      <td>{dummy.ingrPerGName}</td>
      <td>{nutrientInfo.per} {dummy.ingrUnitG}</td>
    </tr>
    <tr>
      <td>{dummy.ingrKcalName}</td>
      <td>{nutrientInfo.kcal} {dummy.ingrUnitKcal}</td>
    </tr>
    <tr>
      <td>{dummy.ingrFatName}</td>
      <td>{nutrientInfo.fat} {dummy.ingrUnitMg}</td>
    </tr>
    <tr>
      <td>{dummy.ingrCholName}</td>
      <td>{nutrientInfo.chol} {dummy.ingrUnitMg}</td>
    </tr>
    <tr>
      <td>{dummy.ingrSodiumName}</td>
      <td>{nutrientInfo.sodium} {dummy.ingrUnitMg}</td>
    </tr>
    <tr>
      <td>{dummy.ingrPotassiumName}</td>
      <td>{nutrientInfo.potassium} {dummy.ingrUnitMg}</td>
    </tr>
    <tr>
      <td>{dummy.ingrCarbName}</td>
      <td>{nutrientInfo.carb} {dummy.ingrUnitG}</td>
    </tr>
    <tr>
      <td>{dummy.ingrProteinName}</td>
      <td>{nutrientInfo.protein} {dummy.ingrUnitG}</td>
    </tr>
    </tbody>
  );
}

export default Nutrient;