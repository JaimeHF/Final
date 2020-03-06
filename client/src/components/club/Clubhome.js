import React from "react";

import Navbarclub from "./navbar/Navbarclub";




class Clubhome extends React.Component {

    state={
        loggedInUser:null,
      }

      
    render(){
        return(
            <div>
            <Navbarclub userInSession={this.state.loggedInUser} logout={this.logout}/>
      
            <h1>woooolaaaaaaa</h1>
            </div>
            )
    }
}

export default Clubhome;