import React from "react";
import Navbar from "./navbar/Navbar";




class Userhome extends React.Component {

    state={
        loggedInUser:null,
      }

      
    render(){
        return(
            <div>
            <Navbar userInSession={this.state.loggedInUser} logout={this.logout}/>
      
            <h1>woooolaaaaaaa</h1>
            </div>
            )
    }
}

export default Userhome;