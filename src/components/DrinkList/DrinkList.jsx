import React, {Component} from 'react';
import drinksAPI from '../../utils/drinksAPI';
import './DrinkList.css';

const DrinkList = (props) => {

  return (
    <table className='table'>
      <thead>
        <tr>
          <th className='text-center'>Drink For</th>
          <th className='text-center'>Drink</th>
          <th className='text-center'>From</th>
          <th className='text-center'>Message</th>
        </tr>
      </thead>
      <tbody>
        {props.drinks.map(drink =>
          <tr key={drink.name}>
            <td>{drink.patronTo}</td>
            <td>{drink.name}</td>
            <td>{drink.from}</td>
            <td>{drink.message}</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default DrinkList;
