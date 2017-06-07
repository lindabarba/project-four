import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import userService from '../../utils/userService';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      pw: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let self = this;
    userService.login(self.state)
      .then(() => {
        self.props.handleLogin();
        self.props.history.push('/');
      })
      .catch(err => alert('Invalid Credentials!'));
  }

  handleChange = (field, e) => {
    this.setState({
      [field]: e.target.value
    });
  }

  render() {
    return (
      <div>
        <h1>Log In</h1>
        <form className="col s12" onSubmit={this.handleSubmit} >
          <div className="row">
            <div className="input-field col s9">
              <input type="email" className="validate" placeholder="Email" value={this.state.email} onChange={(e) => this.handleChange('email', e)} />
            </div>
          </div>
          <div className="row">
            <div className="input-field col s9">
              <input type="password" className="validate" placeholder="Password" value={this.state.pw} onChange={(e) => this.handleChange('pw', e)} />
            </div>
          </div>
          <div className="row">
            <div className="input-field col s9 text-center">
              <button className="btn btn-default blue-grey darken-1">Log In</button>&nbsp;&nbsp;&nbsp;
              <Link to='/'>Cancel</Link>
            </div>
          </div>
        </form>
      </div>
    );
  }
};

export default LoginForm;
