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
        <nav className="nav-style">
          <ul>
            <li>
              <h1 onClick={this.handleLogout}>Logout</h1>
            </li>
          </ul>
        </nav>
      );
    } else {
      return (
        <div>
          <nav className="nav-style">
            <ul>
              <li>
                <Link to="/">Home(aqui logo)</Link>
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
