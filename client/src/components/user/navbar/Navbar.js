// navbar/Navbar.js

import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthService from "../../auth/AuthService";
import "./Navbar.css"

class Navbar extends Component {


  handleLogout = e => {
    this.props.logout();
  };

  render() {
    // debugger
    if (this.props.userInSession) {
      return (
        <nav className="navbar" >
         
          <div>
                <Link to="/User/home"> <img src="https://res.cloudinary.com/dwwfzwx93/image/upload/v1583766640/logo-color_x2_plcr4s.png" alt=""/> </Link>
              </div>  
            <div>
              <h1 onClick={this.handleLogout}>Cerrar sesion</h1>
            </div>
        
        </nav>
      );
    } else {
      return (
        <div>
          <nav className="nav-style">
            <ul>
            <li>
                <Link to="/"><img src="https://res.cloudinary.com/dwwfzwx93/image/upload/v1583766640/logo-color_x2_plcr4s.png" alt=""/> </Link>
              </li>  
              <li>
                <Link to="/club">club</Link>
              </li>     
            </ul>
          </nav>
        </div>
      );
    }
  }
}

export default Navbar;
