import React, { Component } from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
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
// import Axios from "axios";

import AuthServiceClub from "./components/auth/AuthServiceClub";
import Userhome from "./components/user/Userhome";
import Clubhome from "./components/club/Clubhome";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInUser: false,
      loggedInClub: null,
      chosenFlow: null,
      allPost: [],
      user: null
    };
    this.service = new AuthService();
    this.serviceClub = new AuthServiceClub();
  }

  //user
  getUser = userObj => {
    debugger
    this.setState({
      loggedInUser: userObj
    });

    console.log(this.state.loggedInUser);
  };

  logout = () => {
    this.service.logout().then(() => {
      this.setState({ loggedInUser: null });
    });
  };

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

  //club

  getClub = userObj => {
    debugger
    this.setState({
      loggedInClub: userObj
    });
  };
  logout = () => {
    this.serviceClub.logout().then(() => {
      this.setState({ loggedInClub: null });
    });
  };

  fetchClub() {
    return this.serviceClub
      .loggedin()
      .then(response => {
        this.setState({
          loggedInClub: response
        });
      })
      .catch(err => {
        this.setState({
          loggedInClub: false
        });
      });
  }

  componentDidMount() {
    // this.fetchUser()
    this.fetchClub();
  }

  setFlow(flowType) {
    this.setState({
      ...this.state,
      chosenFlow: flowType
    });
  }

  render() {
    debugger
    if (this.state.loggedInClub || this.state.loggedInUser) {
      if (this.state.loggedInUser) {
        return (
          <div className="App">
            <header className="App-header">
             <Redirect to="/User/home" />
              <Switch>
                <Route exact path="/User/home" render={() => <Userhome />} />
              </Switch>
            </header>
          </div>
        );
      }
      if (this.state.loggedInClub) {
        return (
          <div className="App">
            <Redirect to="/Club/home" />
            <Switch>
                <Route exact path="/Club/home" render={() => <Clubhome />} />
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
                  <Club allPost={this.state.allPost} getUser={this.getUser} />
                )}
              />
              <Route
                exact
                path="/user"
                render={() => (
                  <User allPost={this.state.allPost} getUser={this.getUser} />
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
                    getUser={this.getUser}
                  />
                )}
              />
              <Route
                exact
                path="/Clubsignup"
                render={() => <Clubsignup getClub={this.getClub} />}
              />
              <Route
                exact
                path="/Clublogin"
                render={() => <Clublogin getClub={this.getClub} />}
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

// render={() => this.state.loggedInUser ? <Clubhome loggedInUser={this.state.loggedInUser} /> : <Redirect to="/" />}

// render={() => this.state.loggedInUser ? <Redirect to="/club/home" /> : <Login  />}
