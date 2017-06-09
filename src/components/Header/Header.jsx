import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

const Header = (props) => {
  return (
    <div className='Header row'>
      <Link to="/" className='Header-homelink col s3'><img className='Header-logo' src='http://i.imgur.com/y6oeqgt.jpg' alt='logo' /></Link>
      <div className='Header-logo-text'>Cheers To You</div>
    </div>
  );
};

export default Header;
