// auth/Signup.js
import React, { Component } from 'react';
import AuthServiceClub from './AuthServiceClub'
// import Login from '../auth/Login';
import { Link } from "react-router-dom";

class Clubsignup extends Component {
  constructor(props){
    super(props);
    this.state = { clubname: '', password: '' };
    this.service = new AuthServiceClub();
  }
    
  handleFormSubmit = (event) => {
    event.preventDefault();
    const clubname = this.state.clubname;
    const password = this.state.password;

    this.service.signup(clubname, password)
    .then( response => {
        this.setState({
            clubname: "", 
            password: "",
        });
        this.props.getclub(response.club)
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
    const {name, value} = event.target;
    this.setState({[name]: value});
  }
      

  render() {
    return(
      <div className="club">
        <h3>Welcome!, create your account next:</h3>

        <form onSubmit={this.handleFormSubmit}>
          <fieldset>
            <label>clubname:</label>
            <input type="text" name="clubname" value={this.state.clubname} onChange={ e => this.handleChange(e)}/>
          </fieldset>
          
          <fieldset>
            <label>Password:</label>
            <input type="password" name="password" value={this.state.password} onChange={ e => this.handleChange(e)} />
          </fieldset>
          
          <input type="submit" value="Sign up" />
        </form>
        <Link  to="/Clublogin" >login</Link>

        <h1>{this.state.error ? 'yooooooo' : ''}</h1>
      </div>
    )
  }
}

export default Clubsignup;