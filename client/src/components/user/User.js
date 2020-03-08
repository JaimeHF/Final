import React, { Component } from "react";
import "./User.css";
import { Link } from "react-router-dom";
import Signup from "../auth/Signup";
import Login from "../auth/Login";
import Navbar from "./navbar/Navbar";

class User extends Component {
  
state={
  loggedInUser:null,
  allPost:[]
}


fetchPost() {
  return this.post
    .getAllPost()
    .then(response => {
      this.setState({
        allPost: response
      });
    })
    .catch(err => {
      this.setState({
        loggedInUser: false,
      });
    });
}

componentWillReceiveProps(nextProps) {
  this.setState({ ...this.state, loggedInUser: nextProps["loggedInUser"] });
}

  render() {
    if(this.props.chosenFlow==="entrar"){
    return (
      <div>
      <Navbar loggedInUser={this.state.loggedInUser} logout={this.logout}/>
      <div className="user">
      <div className="box">      
    
          <div>
          <Login/>
          </div>
        </div>
      </div>
      </div>
    );}
    else {
      return (
        <div>
        <Navbar loggedInUser={this.state.loggedInUser} logout={this.logout}/>
        <div className="user">
        <div className="box">      
      
            <div>
            <Signup/>
            </div>
          </div>
        </div>
        </div>
      );
    }
  }
}

export default User;
