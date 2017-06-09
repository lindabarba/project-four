import React, {Component} from 'react';
import drinksAPI from '../../utils/drinksAPI';
import './DrinkList.css';

const DrinkList = (props) => {

  return (
    <table className='table'>
      <thead className='thead'>
        <tr>
          <th className='th'>TO</th>
          <th className='th'>DRINK</th>
          <th className='th'>FROM</th>
          <th className='th'>MESSAGE</th>
        </tr>
      </thead>
      <tbody>
        {props.drinks.map(drink =>
          <tr key={drink.id}>
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
