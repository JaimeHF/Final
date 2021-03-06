import React, { Component } from "react";
import "./App.scss"
import { Switch, Route, Redirect } from "react-router-dom";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import AuthService from "./components/auth/AuthService";
import User from "./components/user/User";
import Home from "./components/Home";
import Club from "./components/club/Club";
import Clubsignup from "./components/auth/Clubsignup";
import Clublogin from "./components/auth/Clublogin";
import AuthServiceClub from "./components/auth/AuthServiceClub";
import Userhome from "./components/user/Userhome";
import Clubhome from "./components/club/Clubhome";
import Navbarclub from "./components/club/navbar/Navbarclub";
import Navbar from "./components/user/navbar/Navbar"
import Post from "./services/Post";
import Postid from "./components/post/Postid";
import Match from "./services/Match"
import Matchid from "./components/match/Matchid"
import Userid from "./components/user/Userid"
import Clubid from "./components/club/Clubid"
import Newpost from "./components/post/Newpost"
import Newmatch from "./components/match/Newmatch";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInUser: null,
      chosenFlow: null,
      allPost: [],
      allMatch: [],
      user: null,
      post:null

    };
    this.service = new AuthService();
    this.serviceClub = new AuthServiceClub();
    this.post = new Post()
    this.match = new Match()
  }

  getUser = userObj => {
    // debugger
    this.setState({
      loggedInUser: userObj
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
        // debugger
        this.setState({
          loggedInUser: response
        });
      })
      .catch(err => {
        this.setState({
          loggedInUser: false,
        });
      });
  }


  fetchPost() {
    // debugger
    return this.post
      .getAllPost()
      .then(response => {
        this.setState({
          allPost: response
        });
      })
  }

  fetchMatch() {
    // debugger
    return this.match
      .getAllMatch()
      .then(response => {
        this.setState({
          allMatch: response
        });
      })
  }
 

  componentDidMount() {
    this.fetchUser()
    this.fetchPost()
    this.fetchMatch()

  }

  postDetail(){
    return this.post.getPostDetails()
  .then(response=>{
    this.setState({ 
      post:response
    })
  })
 
}

  setFlow(flowType) {
    this.setState({
      ...this.state,
      chosenFlow: flowType
    });
  }

  render() {
    if (this.state.loggedInUser) {
      if (this.state.loggedInUser.role === "player") {
        return (
          <div className="App">
            <header className="App-header">
            <Navbar userInSession={this.state.loggedInUser} logout={this.logout}></Navbar>
             <Redirect to="/User/home"  loggedInUser={this.state.loggedInUser}/>
              <Switch>
                <Route exact path="/User/home" render={() => <Userhome allPost={this.state.allPost} allMatch={this.state.allMatch} postDetail={(post)=>this.postDetail(post)} loggedInUser={this.state.loggedInUser}/>}   />
                <Route
                exact
                path="/post/:id"
                render={(props) => <Postid  Post={this.state.Post} fetchPost={this.fetchPost} {...props}/>}
              />
                <Route
                exact
                path="/match/:id"
                render={(props) => <Matchid  match={this.state.Match}  fetchPost={this.fetchPost} loggedInUser={this.state.loggedInUser} {...props}/>}
              />
               <Route
                exact
                path="/user/:id"
                render={(props) => <Userid  user={this.state.User} fetchPost={this.fetchPost} {...props} loggedInUser={this.state.loggedInUser}/>}
              />
                             <Route
                exact
                path="/club/:id"
                render={(props) => <Clubid  user={this.state.User} fetchPost={this.fetchPost} loggedInUser={this.state.loggedInUser} {...props}/>}
              />
              <Route
                exact
                path="/newmatch"
                render={(props) => <Newmatch  Post={this.state.Post} fetchPost={this.fetchPost} loggedInUser={this.state.loggedInUser} {...props}/>}
              />
              </Switch>
            </header>
          </div>
        );
      }
      if (this.state.loggedInUser.role === "club") {
        return (
          <div className="App">
          <Navbarclub logout={this.logout} userInSession={this.state.loggedInUser}></Navbarclub>
            <Redirect to="/Club/home" userInSession={this.state.loggedInUser} logout={this.logout}/>
            <Switch>
                <Route exact path="/Club/home" render={() => <Clubhome loggedInUser={this.state.loggedInUser} allPost={this.state.allPost} />}  />
                <Route
                exact
                path="/newpost"
                render={(props) => <Newpost  Post={this.state.Post} fetchPost={this.fetchPost} loggedInUser={this.state.loggedInUser}{...props}/>}
              />
                 <Route
                exact
                path="/post/:id"
                render={(props) => <Postid  Post={this.state.Post} fetchPost={this.fetchPost} loggedInUser={this.state.loggedInUser} {...props}/>}
              />
               <Route
                exact
                path="/club/:id"
                render={(props) => <Clubid  user={this.state.User} fetchPost={this.fetchPost} loggedInUser={this.state.loggedInUser} {...props}/>}
              />
              </Switch>
            <header className="App-header">
            </header>
          </div>
        );
      }
    } else {
      
      return (
        <div className="App">
          <header className="App-header">
          <Redirect to="/"/>
            <Switch>
              <Route
                exact
                path="/"
                render={() => <Home setFlow={flow => this.setFlow(flow)} />}
              />
              <Route
                exact
                path="/club"
                render={() => (
                  <Club  chosenFlow={this.state.chosenFlow}  getUser={this.getUser} />
                )}
              />
              <Route
                exact
                path="/user"
                render={() => (
                  <User chosenFlow={this.state.chosenFlow}  getUser={this.getUser} />
                )}
              />
              <Route
                exact
                path="/signup"
                render={() => <Signup getUser={this.getUser} />}
              />
              <Route
                exact
                path="/login"
                render={() => (
                  <Login
                    getUser={ this.getUser} 
                  />
                )}
              />
              <Route
                exact
                path="/Clubsignup"
                render={() => <Clubsignup getUser={this.getUser} />}
              />
              <Route
                exact
                path="/Clublogin"
                render={() => <Clublogin getUser={this.getUser} />}
              />
            </Switch>
          </header>
        </div>
      );
    }
  }
}

// }

export default App;