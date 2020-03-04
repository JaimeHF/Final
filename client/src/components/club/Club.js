import React  from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Signup from "../auth/Signup";
import Login from "../auth/Login";
import AuthService from "../auth/AuthService";
import Contents from "../contents/Contents";
import "./club.css";
class Club extends React.Component {
 

    constructor(props) {
        super(props);
        this.state = { loggedInUser: null };
        this.service = new AuthService();
    
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
    
      render() {
        if (this.state.loggedInUser) {
          return (
            <React.Fragment>
              <Redirect to="/club" />
    
              <div className="App">
                <header className="App-header">
                  <Navbar userInSession={this.state.loggedInUser} logout={this.logout} />
                  <Contents />
                </header>
              </div>
            </React.Fragment>
          );
        } else {
          return (
            <React.Fragment>
              <Redirect to="/login" />
    
              <div className="App">
                <header className="App-header">
                  <Navbar userInSession={this.state.loggedInUser} logout={this.logout} />
                  <Switch>
                    <Route exact path="/signup" render={() => <Signup getUser={this.getUser} />} />
                    <Route exact path="/login" render={() => <Login getUser={this.getUser} />} />
                  </Switch>
                </header>
              </div>
            </React.Fragment>
          );
        }
      }
}

export default Club;