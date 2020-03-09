import React from "react";
import { Link } from "react-router-dom";
import Signup from "../auth/Signup";
import Login from "../auth/Login";
import Navbar from "./navbar/Navbar";

class User extends React.Component {

  state = {
    loggedInUser: null,
    allPost: [],
    chosenFlow: "login",
  }


  setFlow(flowType) {
    this.setState({
      ...this.state,
      chosenFlow: flowType
    });
  }

  fetchPost() {
    return this.post
      .getAllPost()
      .then(response => {
        this.setState({
          allPost: response
        });
      })
      .catch(err => {
        this.setState({
          loggedInUser: false,
        });
      });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ ...this.state, loggedInUser: nextProps["loggedInUser"] });
  }

  render() {
    console.log(this.getUser)
    return (
      <div >
        {/* <Navbar loggedInUser={this.state.loggedInUser} logout={this.logout} /> */}
        <div className="login">
          <div className="left">
            <div>
              <img src="" alt="logotipo" />
            </div>
            <div className="loco">
              <h1>Locos por el deporte, éste es vuestro sitio. ¡Bienvenidos!</h1>
            </div>
            <div className="encuentra">
              <p>Encuentra partidos, conecta con otros jugadores y mantente activo con tu deporte favorito.</p>
            </div>
            <div>
              <div>  
                <Link to="/club">club</Link>
               </div>
              
            </div>

          </div>
          <div className="right">
            <div className="user">
              <div >
                <div className="acces">{this.state.chosenFlow === "login" &&
                  <div >
                    <Login getUser={this.getUser} />
                    <p onClick={() => this.setFlow("signup")} >¿Aún no tienes cuenta? <span> Regístrate</span> </p>
                  </div>}
                </div>
                <div className="acces">{this.state.chosenFlow === "signup" &&
                  <div>
                    <Signup getUser={this.getUser} />
                    <p onClick={() => this.setFlow("login")} >¿Ya tienes cuenta? <span>Accede</span> </p>
                  </div>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default User;
