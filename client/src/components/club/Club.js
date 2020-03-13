import React from "react";
import Clubsignup from "../auth/Clubsignup";
import Clublogin from "../auth/Clublogin";
import { Link } from "react-router-dom";



class Club extends React.Component {

  state = {
    loggedInUser: null,
    chosenFlow: "login",
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ ...this.state, loggedInUser: nextProps["loggedInUser"], chosenFlow: nextProps["chosenFlow"] });
  }
  setFlow(flowType) {
    this.setState({
      ...this.state,
      chosenFlow: flowType
    });
  }

  componentDidMount() {


  }

  render() {

    return (
      <div >
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
                <Link to="/user">user</Link>
               </div>
              
            </div>

          </div>
          <div className="der">
            <div className="user">
              <div >
                <div className="acces">{this.state.chosenFlow === "login" &&
                  <div >
                    <Clublogin getUser={this.props.getUser} />
                    <p onClick={() => this.setFlow("signup")} >¿Aún no tienes cuenta? <span> Regístrate</span> </p>
                  </div>}
                </div>
                <div className="acces">{this.state.chosenFlow === "signup" &&
                  <div>
                    <Clubsignup getUser={this.props.getUser} />
                    <p onClick={() => this.setFlow("login")} >¿Ya tienes cuenta? <span>Accede</span> </p>
                  </div>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  

      )
    }
  }



export default Club;


