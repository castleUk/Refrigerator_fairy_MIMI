import React from 'react';
import dummy from '../../db/nutrient.json';

const Nutrient = () => {

  return(
    <tbody>
    <tr>
      <td>{dummy.ingrPerGName}</td>
      <td>{dummy.ingrPerGValue} {dummy.ingrUnitG}</td>
    </tr>
    <tr>
      <td>{dummy.ingrKcalName}</td>
      <td>{dummy.ingrKcalValue} {dummy.ingrUnitKcal}</td>
    </tr>
    <tr>
      <td>{dummy.ingrFatName}</td>
      <td>{dummy.ingrFatValue} {dummy.ingrUnitMg}</td>
    </tr>
    <tr>
      <td>{dummy.ingrCholName}</td>
      <td>{dummy.ingrCholValue} {dummy.ingrUnitMg}</td>
    </tr>
    <tr>
      <td>{dummy.ingrSodiumName}</td>
      <td>{dummy.ingrSodiumValue} {dummy.ingrUnitMg}</td>
    </tr>
    <tr>
      <td>{dummy.ingrPotassiumName}</td>
      <td>{dummy.ingrPotassiumValue} {dummy.ingrUnitMg}</td>
    </tr>
    <tr>
      <td>{dummy.ingrCarbName}</td>
      <td>{dummy.ingrCarbValue} {dummy.ingrUnitG}</td>
    </tr>
    <tr>
      <td>{dummy.ingrProteinName}</td>
      <td>{dummy.ingrProteinValue} {dummy.ingrUnitG}</td>
    </tr>
    </tbody>
  );
}

export default Nutrient;