import React from "react";
import { Link } from "react-router-dom";
import Signup from "../auth/Signup";
import Login from "../auth/Login";

import "./user.scss"

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
    return (
      <div >
        {/* <Navbar loggedInUser={this.state.loggedInUser} logout={this.logout} /> */}
        <div className="login">
          <div className="izq">
            <div>
            <Link to="/">
            <img src="https://res.cloudinary.com/dwwfzwx93/image/upload/v1583768097/logo-white_x2_rwsvdj.png" alt="logotipo"/>
            </Link>
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
          <div className="der">
            <div className="user">
              <div >
                <div className="acces">{this.state.chosenFlow === "login" &&
                  <div >
                    <Login  getUser={this.props.getUser} />
                    <p onClick={() => this.setFlow("signup")}  >¿Aún no tienes cuenta? <span> Regístrate</span> </p>
                  </div>}
                </div>
                <div className="acces">{this.state.chosenFlow === "signup" &&
                  <div>
                    <Signup  getUser={this.props.getUser}/>
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
