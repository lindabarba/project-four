import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
  let nav = props.user ?
    <div>
      <Link to="/" className='NavBar-brand'>Project Four</Link>
      <span className='NavBar-welcome'>WELCOME, {props.user.name}</span>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <Link to="" className='NavBar-link' onClick={props.handleLogout} >LOG OUT</Link>
    </div> :
    <div>
      <Link to="/" className='NavBar-brand'>Project Four</Link>
      <Link to="/login" className='NavBar-link'>LOG IN</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to="/signup" className='NavBar-link'>SIGN UP</Link>
    </div>;

  return (
    <div className='NavBar'>
      {nav}
    </div>
  );
};

export default NavBar;
