import React from 'react';
import {Link} from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';


const HomePage = (props) => {

  return (
    <div className="HomePage">
      <NavBar
        user={props.user}
        handleLogout={props.handleLogout}
      />
      <footer className='header-footer'>This is the footer</footer>
    </div>
  );
}

export default HomePage;
