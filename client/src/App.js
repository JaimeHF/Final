import React, { Component } from "react";
import "./App.css";
import { Switch, Route , Redirect} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import AuthService from "./components/auth/AuthService";
import Contents from "./components/contents/Contents";
import User from "./components/user/User";
import Home from "./components/Home";
import Club from "./components/club/Club";
import axios from "axios"
import Clubsignup from "./components/auth/Clubsignup";
import Clublogin from "./components/auth/Clublogin";

class App extends Component {
 

  constructor(props) {
    super(props);
    this.state = { loggedInUser: null, chosenFlow: null, allPost:[]};
    this.service = new AuthService();

    // this.fetchUser()
  }

  // getUser = userObj => {
  //   this.setState({
  //     loggedInUser: userObj,
  //   });
  // };

  // logout = () => {
  //   this.service.logout().then(() => {
  //     this.setState({ loggedInUser: null });
  //   });
  // };

  // fetchUser() {
  //   return this.service
  //     .loggedin()
  //     .then(response => {
  //       this.setState({
  //         loggedInUser: response,
  //       });
  //     })
  //     .catch(err => {
  //       this.setState({
  //         loggedInUser: false,
  //       });
  //     });
  // }

  // componentDidMount(){
   
  //     axios.get("http://localhost:4000/post")
  //     .then(allPost =>  this.setState({allPost: allPost}),
      
  //     )}

  setFlow(flowType){
    this.setState({
      ...this.state, 
      chosenFlow: flowType
    })
  }

render(){

        return ( 
            <div className="App">
              <header className="App-header">
                <Switch>
                  <Route exact path="/" render={() => <Home setFlow={(flow) => this.setFlow(flow)}/>} />
                  <Route exact path="/club" render={() => <Club allPost={this.state.allPost} getUser={this.getUser} />} />
                  <Route exact path="/user" render={() => <User  allPost={this.state.allPost} getUser={this.getUser} />} />
                  <Route exact path="/signup" render={() => <Signup getUser={this.getUser} />} />
                  <Route exact path="/login" render={() => <Login getUser={this.getUser} />} />
                  <Route exact path="/Clubsignup" render={() => <Clubsignup getUser={this.getUser} />} />
                  <Route exact path="/Clublogin" render={() => <Clublogin getUser={this.getUser} />} />
                </Switch>
              </header>
            </div>
        );
      }
    }
// }

export default App;







// state={
  //     allPost:[]
  // }
  
  //   componentDidMount(){
  //     axios.get("")
  //     .then(allPost =>  this.setState({allPost: allPost}),
  //     )}
  //   render() {
  
  
  //     return(
  //     <section >
  //       <Switch>
  //             <Route
  //               exact
  //               path="/"
  //               render={() => {
  //                 // let allMovies = this.state.movies
  //                 return <Home ></Home>;
  //               }}
  //             />
  //              <Route
  //               exact
  //               path="/user"
  //               render={() => {
  //                 // let allMovies = this.state.movies
  //                 return <User></User>;
  //               }}
  //             />
  //               <Route
  //               exact
  //               path="/clubs"
  //               render={() => {
  //                 return <Club></Club>;
  //               }}
  //             />
  //              </Switch>
  //              </section>
  //     )