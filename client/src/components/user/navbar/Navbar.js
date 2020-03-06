// navbar/Navbar.js

import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthService from "../../auth/AuthService";
import "./Navbar.css"

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: null };
    this.service = new AuthService();
  }


  componentWillReceiveProps(nextProps) {
    this.setState({ ...this.state, loggedInUser: nextProps["userInSession"] });
  }

  handleLogout = e => {
    this.props.logout();
  };

  render() {
    if (this.state.loggedInUser) {
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
