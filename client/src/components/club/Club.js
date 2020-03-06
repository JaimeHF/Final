import React  from "react";
import { Link, Switch  } from "react-router-dom";
// import Navbar from "../navbar/Navbar";
// import AuthService from "../auth/AuthService";
// import Contents from "../contents/Contents";
import "./club.css";
import Clubsignup from "../auth/Clubsignup";
import Clublogin from "../auth/Clublogin";

class Club extends React.Component {

  
      render() {
        return (
        <div className="club">
          
        <h1>Club login</h1>
        <div >
           
                <Link  to="/Clubsignup" render={() => <Clubsignup getUser={this.getClub} />} >sigmup</Link>
                <Link  to="/Clublogin" render={() => <Clublogin getClub={this.getClub} />} >login</Link>

           
          </div>
        </div>
        )}
}

export default Club;