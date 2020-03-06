// auth/Signup.js
import React, { Component } from 'react';
// import Signup from './Signup';
import { Link } from "react-router-dom";
import AuthServiceClub from './AuthServiceClub';

class Clublogin extends Component {
  constructor(props) {
    super(props);
    this.state = { clubname: '', password: '' };
    this.service = new AuthServiceClub;
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const clubname = this.state.clubname;
    const password = this.state.password;

    this.service.login(clubname, password)
      .then(response => {
        this.setState({
          clubname: clubname,
          password: password,
          error: false
        });

        this.props.getclub(response)
      })
      .catch(error => {
        this.setState({
          clubname: clubname,
          password: password,
          error: true
        });
      })
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {

    return (
    <div className="club">
      <h3>Please, login to our site</h3>

      <form onSubmit={this.handleFormSubmit}>
        <fieldset>
          <label>clubname:</label>
          <input type="text" name="clubname" value={this.state.clubname} onChange={e => this.handleChange(e)} />
        </fieldset>

        <fieldset>
          <label>Password:</label>
          <input type="password" name="password" value={this.state.password} onChange={e => this.handleChange(e)} />
        </fieldset>

        <input type="submit" value="Login" />
      </form>
      <Link to="/Clubsignup"  >signup</Link>

      <h1>{this.state.error ? 'Error' : ''}</h1>
    </div>)
  }
}

export default Clublogin;