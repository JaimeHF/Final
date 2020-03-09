import React from "react";
import Clubsignup from "../auth/Clubsignup";
import Clublogin from "../auth/Clublogin";
import Navbarclub from "./navbar/Navbarclub";
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
                <Link to="/user">user</Link>
               </div>
              
            </div>

          </div>
          <div className="right">
            <div className="user">
              <div >
                <div className="acces">{this.state.chosenFlow === "login" &&
                  <div >
                    <Clublogin getUser={this.getUser} />
                    <p onClick={() => this.setFlow("signup")} >¿Aún no tienes cuenta? <span> Regístrate</span> </p>
                  </div>}
                </div>
                <div className="acces">{this.state.chosenFlow === "signup" &&
                  <div>
                    <Clubsignup getUser={this.getUser} />
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


