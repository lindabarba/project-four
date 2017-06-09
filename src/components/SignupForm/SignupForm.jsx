import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import userService from '../../utils/userService';
import Header from '../Header/Header';
import './SignupForm.css';



class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      passwordConf: ''
    };
  }

  handleChange = (field, e) => {
    this.props.updateMessage('');
    this.setState({
      [field]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let self = this;
    userService.signup(this.state)
      .then(() => {
        self.props.handleSignUp();
        self.props.history.push('/');
      })
      .catch(err => self.props.updateMessage(err.message));
  }

  isFormInvalid() {
    return !(this.state.name && this.state.email && this.state.password === this.state.passwordConf);
  }

  render() {
    return (
      <div>
        <Header />
        <h2>Sign Up</h2>
        <form className="col s12" onSubmit={this.handleSubmit} >
          <div className="row">
            <div className="input-field col s9">
              <input type="text" className="validate" placeholder="Name" value={this.state.name} onChange={(e) => this.handleChange('name', e)} />
            </div>
          </div>
          <div className="row">
            <div className="input-field col s9">
              <input type="email" className="validate" placeholder="Email" value={this.state.email} onChange={(e) => this.handleChange('email', e)} />
            </div>
          </div>
          <div className="row">
            <div className="input-field col s9">
              <input type="password" className="validate" placeholder="Password" value={this.state.password} onChange={(e) => this.handleChange('password', e)} />
            </div>
          </div>
          <div className="row">
            <div className="input-field col s9">
              <input type="password" className="validate" placeholder="Confirm Password" value={this.state.passwordConf} onChange={(e) => this.handleChange('passwordConf', e)} />
            </div>
          </div>
          <div className="row">
            <div className="input-field col s9 text-center">
              <button className="btn btn-default blue-grey darken-1" type="submit" name="action" disabled={this.isFormInvalid()}>Sign Up</button>&nbsp;&nbsp;
              <Link to='/'>Cancel</Link>
            </div>
          </div>
        </form>
      </div>
    );
  }
};

export default SignupForm;
