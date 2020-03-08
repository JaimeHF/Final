import React  from "react";
import "./club.css";
import Clubsignup from "../auth/Clubsignup";
import Clublogin from "../auth/Clublogin";
import Navbarclub from "./navbar/Navbarclub";



class Club extends React.Component {
  
  state={
    loggedInUser: null,
    chosenFlow: null
  }
  
  componentWillReceiveProps(nextProps) {
    this.setState({ ...this.state, loggedInUser: nextProps["loggedInUser"],chosenFlow: nextProps["chosenFlow"] });
  }
  setFlow(flowType) {
    this.setState({
      ...this.state,
      flowChosen: flowType
    });
  }

  componentDidMount() {
 

  }

      render() {
        debugger
        if(this.state.chosenFlow==="entrar" ){
        return (
          
<div>
        <Navbarclub loggedInUser={this.state.loggedInUser} logout={this.logout}/>
<div className="club">
          

  <div className="box">
  <h1>Club login </h1>
    <div>
    <Clublogin setFlow={flow => this.setFlow(flow)}/>
    </div>
    <div>
    
    
    </div>
  </div>
</div>
</div>
        )}
        else{
          return (   
            <div>
            <Navbarclub loggedInUser={this.state.loggedInUser} logout={this.logout}/>
            <div className="club">
              <div className="box">
              <h1>Club signup</h1>
                <div>
                <Clubsignup setFlow={flow => this.setFlow(flow)} />
                </div>
                <div>
                </div>
              </div>
            </div>
            </div>
                    )}
        }
      }


export default Club;


