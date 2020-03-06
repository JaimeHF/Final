import React, { Component } from "react";
import "./App.css";
import { Switch, Route , Redirect} from "react-router-dom";
// import Navbar from "./components/navbar/Navbar";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import AuthService from "./components/auth/AuthService";
// import Contents from "./components/contents/Contents";
import User from "./components/user/User";
import Home from "./components/Home";
import Club from "./components/club/Club";
// import axios from "axios"
import Clubsignup from "./components/auth/Clubsignup";
import Clublogin from "./components/auth/Clublogin";
import Axios from "axios";
import Clubhome from "./components/club/componentes/Clubhome";
import AuthServiceClub from "./components/auth/AuthServiceClub";

class App extends Component {
 

  constructor(props) {
    super(props);
    this.state = { loggedInUser: null, loggedInClub: null, chosenFlow: null, allPost:[], user:null};
    this.service = new AuthService();
    this.serviceClub = new AuthServiceClub();
    this.fetchUser()
  }

  getUser = userObj => {
    this.setState({
      loggedInUser: userObj,
    });
  };

  logout = () => {
    this.service.logout().then(() => {
      this.setState({ loggedInUser: null });
    });
  };



  fetchUser() {
    return this.service
      .loggedin()
      .then(response => {
        this.setState({
          loggedInUser: response,
        });
      })
      .catch(err => {
        this.setState({
          loggedInUser: false,
        });
      });
  }


  goHome(){
    console.log("woooolaaaaa")
    debugger

   
         
  }

 
  

  //   getClub(club){
  //     this.clubService.getClub()
  //     .then(clubFound => {
  //     this.setState({
  //       club:clubFound
  //     },()=>{
  //         <Redirect to="/club/home"/>
  //     })
  //    } )
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
                  <Route exact path="/user" render={() => this.state.loggedInUser ? <Clubhome loggedInUser={this.state.loggedInUser} /> : <Redirect to="/login" />} />
                  <Route exact path="/signup" render={() => <Signup  getUser={this.getUser} />} />
                  <Route exact path="/login" render={() => <Login goHome={(user)=> this.goHome()} getUser={this.getUser} />} />
                  <Route exact path="/Clubsignup" render={() => <Clubsignup getClub={this.getClub} />} />
                  <Route exact path="/Clublogin" render={() => <Clublogin getClub={this.getClub} />} />
                  <Route exact path="/Club/home" render={() => <Clubhome/>} />
                </Switch>
              </header>
            </div>
        );
      }
    }
// }

export default App;




// render={() => <User allPost={this.state.allPost} getUser={this.getUser} />}