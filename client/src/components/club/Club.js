import React  from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Signup from "../auth/Signup";
import Login from "../auth/Login";
import AuthService from "../auth/AuthService";
import Contents from "../contents/Contents";

import "./club.css";
class Club extends React.Component {
      render() {
        return <h1>Club login</h1>
      }
}

export default Club;