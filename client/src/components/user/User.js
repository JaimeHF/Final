import React, { Component } from "react";
import "../user/User.css";
import { Switch, Route, Redirect } from "react-router-dom";
// import Navbar from "../navbar/Navbar";
// import Signup from "../auth/Signup";
// import Login from "../auth/Login";
// import AuthService from "../auth/AuthService";
// import Contents from "../contents/Contents";
import axios from "axios"
import Containpost from "../containpost"

class User extends Component {
   
  state={
    allPost:null
    
}
    componentDidMount(){
      debugger
        axios.get("http://localhost:4000/post")
        .then(allPost =>  this.setState({allPost: allPost}),
        
        )}



    render() {

      return(
          <div>
            <h1>wooolaaaa</h1>
            {this.state.allPost.map(post =>(
           <Containpost id={post._id} club_id={post.club_id} title={post.title} date={post.date}  description={post.description}  ></Containpost>
          ))}   
          
          </div>
      )
     
    }
  }
  
  
  export default User;













  