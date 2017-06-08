import React from 'react';
import './DrinkList.css';

const DrinkList = (props) => {
  return (
    <table className='table'>
      <thead>
        <tr>
          <th>Drink List</th>
          <th className='text-center'>Name</th>
          <th className='text-center'>Cost</th>
        </tr>
      </thead>
      <tbody>
        {props.drinks.map(drink =>
          <tr key={drink.name}>
            <td>{drink.name}</td>
            <td className='text-center'>{drink.cost}</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default DrinkList;
