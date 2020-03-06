import React, { Component } from "react";
import "./User.css";
import { Link } from "react-router-dom";
import Signup from "../auth/Signup";
import Login from "../auth/Login";
import Navbar from "./navbar/Navbar";

class User extends Component {
  
state={
  loggedInUser:null,
}

  render() {
    return (
      <div>
      <Navbar userInSession={this.state.loggedInUser} logout={this.logout}/>
      <div className="user">
      <div className="box">       
        <h1>wooolaaaa</h1>
     
          <div>
            <Link to="/signup" render={() => <Signup getUser={this.getUser} />}>
              sigmup
            </Link>
          </div>
          <div>
            <Link to="/login" render={() => <Login getClub={this.getUser} />}>
              login
            </Link>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default User;
