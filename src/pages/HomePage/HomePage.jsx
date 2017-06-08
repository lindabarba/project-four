import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import Board from '../../components/Board/Board';
import DrinkList from '../../components/DrinkList/DrinkList';
import './HomePage.css';


const HomePage = (props) => {

  return (
    <div className="HomePage">
      <NavBar
        user={props.user}
        handleLogout={props.handleLogout}
      />
      <Board
      />
      <DrinkList
      />
    </div>
  );
}

export default HomePage;
