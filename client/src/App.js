import React, { Component } from "react";
import "./App.css";
import { Switch, Route , Redirect} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import AuthService from "./components/auth/AuthService";
import Contents from "./components/contents/Contents";
import User from "./components/user/User";
// import Home from "./components/Home";
// import Club from "./components/club/Club";
// import axios from "axios"

class App extends Component {
 

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

  // componentDidMount(){
  //   axios.get("https://ih-beers-api2.herokuapp.com/beers")
  //   .then(allBeers =>  this.setState({allBeers: allBeers.data}),
  //   )}

render(){
   //aqui hacemos rendering condicional dependiendo de si tenemos un usuario logeado o no
      if (this.state.loggedInUser) {
        //en este caso mostramos los contenidos ya que hay usuario
        return (
          <React.Fragment>
            <Redirect to="/user" />
  
            <div className="App">
              <header className="App-header">
                <Navbar userInSession={this.state.loggedInUser} logout={this.logout} />
                {/* aqui simplemente se muestra un lorem ipsum genérico para que veáis contenidos que solo se muestran a usuarios logeados */}
                <User />
              </header>
            </div>
          </React.Fragment>
        );
      } else {
        //si no estás logeado, mostrar opcionalmente o login o signup
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
  //                 return <Home></Home>;
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