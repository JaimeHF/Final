import React, { Component } from "react";
import { Link } from "react-router-dom";

// import "./Navbar.css"

class Navbarclub extends Component {


  handleLogout = e => {
    this.props.logout();
  };

  render() {
    if (this.props.userInSession) {
      return (
        <nav className="navbar" >
         
        <div>
              <Link to="/Club/home"> <img src="https://res.cloudinary.com/dwwfzwx93/image/upload/v1583766640/logo-color_x2_plcr4s.png" alt=""/> </Link>
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
                <Link to="/"><img src="https://res.cloudinary.com/dwwfzwx93/image/upload/v1583766640/logo-color_x2_plcr4s.png" alt=""/></Link>
              </li>  
              <li>
                <Link to="/user">User</Link>
              </li>     
            </ul>
          </nav>
        </div>
      );
    }
  }
}

export default Navbarclub;
