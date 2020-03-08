import React, { Component } from 'react';
import AuthServiceClub from './AuthServiceClub'
import { Link } from "react-router-dom";

class Clubsignup extends Component {
  constructor(props){
    super(props);
    this.state = { usearname: '', password: '' };
    this.service = new AuthServiceClub();
  }
  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;

    this.service.signup(username, password)
    .then( response => {
        this.setState({
            username: "", 
            password: "",
        });
        this.props.getUser(response.user)
    })
    .catch(error => {
      this.setState({
        username: username,
        password: password,
        error: true
      });
    })
  }

  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }
      

  render() {
    return(
      <div >
        <h3>Welcome!, create your account next:</h3>

        <form onSubmit={this.handleFormSubmit}>
          <fieldset>
            <label>clubname:</label>
            <input type="text" name="usearname" value={this.state.clubname} onChange={ e => this.handleChange(e)}/>
          </fieldset>
          
          <fieldset>
            <label>Password:</label>
            <input type="password" name="password" value={this.state.password} onChange={ e => this.handleChange(e)} />
          </fieldset>
          
          <input type="submit" value="Sign up" />
        </form>
        <Link to="/club" ><button onClick={() => this.props.setFlow("entrar")} >login</button></Link>

        <h1>{this.state.error ? 'yooooooo' : ''}</h1>
      </div>
    )
  }
}

export default Clubsignup;