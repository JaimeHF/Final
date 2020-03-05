import React, { Component } from "react";
import "./User.css";
import { Link , Route,Switch } from "react-router-dom";
// import Navbar from "../navbar/Navbar";
// import Signup from "../auth/Signup";
// import Login from "../auth/Login";
// import AuthService from "../auth/AuthService";
// import Contents from "../contents/Contents";
// import axios from "axios"
// import Containpost from "../containpost"
import Signup from "../auth/Signup";
import Login from "../auth/Login";

class User extends Component {
   
//   state={
//     allPost:null
    
// }
//     componentDidMount(){
//         axios.get("http://localhost:4000/post")
//         .then(allPost =>  this.setState({allPost: allPost}),
        
//         )}



    render() {

      return(
          <div className="user">
            <h1>wooolaaaa</h1>
            <div >
            <Switch>
                <Route exact path="/signup" render={() => <Signup getUser={this.getUser} />} />
                <Route exact path="/login" render={() => <Login getUser={this.getUser} />} />
              </Switch>
     </div>  
          </div>
      )
     
    }
  }
  
  
  export default User;













  