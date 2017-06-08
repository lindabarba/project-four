import React, {Component} from 'react';
import drinksAPI from '../../utils/drinksAPI';
import './DrinkList.css';

const DrinkList = (props) => {

  return (
    <table className='table'>
      <thead className='thead'>
        <tr>
          <th className='th'>To</th>
          <th className='th'>Drink</th>
          <th className='th'>From</th>
          <th className='th'>Message</th>
        </tr>
      </thead>
      <tbody>
        {props.drinks.map(drink =>
          <tr key={drink.name}>
            <td className='td'>{drink.patronTo}</td>
            <td className='td'>{drink.name}</td>
            <td className='td'>{drink.from}</td>
            <td className='td'>{drink.message}</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default DrinkList;
