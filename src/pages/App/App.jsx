import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import userService from '../../utils/userService';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import HomePage from '../HomePage/HomePage';
import NavBar from '../../components/NavBar/NavBar';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = Object.assign(
    {}
    );
  }

  /*---------- Helper Methods ----------*/


  handleLogout = () => {
    userService.logout();
    this.setState({user: null});
  }

  handleSignUp = () => {
    this.setState({user: userService.getUser()});
  }

  handleLogin = () => {
    this.setState({user: userService.getUser()});
  }

/*---------- Lifecycle Methods ----------*/

  componentDidMount() {
    let user = userService.getUser();
    this.setState({user});
  }

  render() {
    return (
      <div className='container'>
        <Router>
          <Switch>
            <Route exact path='/' render={() =>
              <HomePage
                user={this.state.user}
                handleLogout={this.handleLogout}
              />
            }/>
            <Route exact path='/signup' render={(props) =>
              <SignupPage
                {...props}
                handleSignUp={this.handleSignUp}
              />
            }/>
            <Route exact path='/login' render={(props) =>
              <LoginPage
                {...props}
                handleLogin={this.handleLogin}
              />
            }/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
