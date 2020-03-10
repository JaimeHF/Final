import React, { Component } from 'react';
import AuthServiceClub from './AuthServiceClub'
import { Link } from "react-router-dom";

class Clubsignup extends Component {
  constructor(props) {
    super(props);
    this.state = { usearname: '', password: '' };
    this.service = new AuthServiceClub();
  }
  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;

    this.service.signup(username, password)
      .then(response => {
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
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div className="log">
      <div>
      <img src="https://res.cloudinary.com/dwwfzwx93/image/upload/v1583768116/illustration-club_x2_qul4t7.png" alt="icono"/>
      </div>
      <div>
        <h3 className="acceso">Registro como club/equipo</h3>
      </div>
      <form onSubmit={this.handleFormSubmit} >
        <div className="datos">
        <div>
        <fieldset>
          {/* <label>Username:</label> */}
          <input className="username" type="text" name="username" placeholder="Introduce tu nombre de usuario" value={this.state.username} onChange={e => this.handleChange(e)} />
        </fieldset>
        </div>
        <div>
        <fieldset>
          {/* <label>Username:</label> */}
          <input className="username" type="text" name="email" placeholder="Introduce tu correo electronico" value={this.state.username} onChange={e => this.handleChange(e)} />
        </fieldset>
        </div>
      <div>
        <fieldset>
          {/* <label>Password:</label> */}
          <input type="password" name="password" className="password" placeholder="Introduce tu contraseña" value={this.state.password} onChange={e => this.handleChange(e)} />
        </fieldset>
        </div>
      <div className="botonlo">
        <input className="bot" type="submit" value="Acceder" />
        </div>
        </div>
      </form>


      {/* <h1>{this.state.error ? 'Error' : ''}</h1> */}
    </div>
    
    )
  }
}

export default Clubsignup;