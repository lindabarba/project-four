import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
  let nav = props.user ?
    <div className='NavBar-row'>
      <span className='NavBar-link'>Hello {props.user.name}</span>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <Link to="" className='NavBar-link' onClick={props.handleLogout} >LOG OUT</Link>
    </div> :
    <div className='NavBar-row'>
      <Link to="/login" className='NavBar-link'>LOG IN</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to="/signup" className='NavBar-link'>SIGN UP</Link>
    </div>;

  return (
    <div className='NavBar row'>
      <Link to="/" className='NavBar-homelink col s3'><img className='NavBar-logo' src='http://i.imgur.com/y6oeqgt.jpg' alt='logo' /></Link>
      <div className='NavBar-logo-text'>Cheers To You</div>
      {nav}
    </div>
  );
};

export default NavBar;
