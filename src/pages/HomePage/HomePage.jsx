import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import drinksAPI from '../../utils/drinksAPI';
import NavBar from '../../components/NavBar/NavBar';
import Board from '../../components/Board/Board';
import DrinkList from '../../components/DrinkList/DrinkList';
import './HomePage.css';


class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drinks: []
    };
  }

  componentDidMount() {
  let drink = drinksAPI.getDrinks();
  console.log("Home Page--->componentDidMount", drink);
  drink.then(res => (
    this.setState({drinks: res})));
  }

  render() {
    return (
      <div className="HomePage">
        <NavBar
          user={this.props.user}
          handleLogout={this.props.handleLogout}
        />
        <DrinkList drinks={this.state.drinks} />
      </div>
    );
  }
}

export default HomePage;
