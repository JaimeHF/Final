import React  from "react";
import { Link  } from "react-router-dom";
import "./club.css";
import Clubsignup from "../auth/Clubsignup";
import Clublogin from "../auth/Clublogin";
import Navbarclub from "./navbar/Navbarclub";


class Club extends React.Component {
  
  state={
    loggedInClub: null,
  }
  
  
      render() {
        return (
<div>
<Navbarclub userInSession={this.state.loggedInClub} logout={this.logout}/>
<div className="club">
          

  <div className="box">
  <h1>Club login</h1>
    <div>
    <Link  to="/Clubsignup" render={() => <Clubsignup getUser={this.getClub} />} >sigmup</Link>
    </div>
    <div>
    <Link  to="/Clublogin" render={() => <Clublogin getClub={this.getClub} />} >login</Link>
    </div>
  </div>
</div>
</div>
        )}
}

export default Club;


