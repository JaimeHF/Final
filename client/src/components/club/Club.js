import React  from "react";
import { Link ,Switch, Route, Redirect } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import AuthService from "../auth/AuthService";
import Contents from "../contents/Contents";
import "./club.css";
import Clubsignup from "../auth/Clubsignup";
import Clublogin from "../auth/Clublogin";

class Club extends React.Component {

  
      render() {
        return (
        <div>
          
        <h1>Club login</h1>
        <div className="App">
            <header className="App-header">
              {/* <Navbar/> */}
            
                <Link  to="/Clubsignup" render={() => <Clubsignup getUser={this.getUser} />} >sigmup</Link>
                <Link  to="/Clublogin" render={() => <Clublogin getUser={this.getUser} />} >login</Link>

            </header>
          </div>
        </div>
        )}
}

export default Club;