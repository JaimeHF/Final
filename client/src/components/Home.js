import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

class Home extends React.Component {


  render() {
    return (

      <div className="home">
        <div className="left">
          <div>
            <img src="https://res.cloudinary.com/dwwfzwx93/image/upload/v1583766640/logo-color_x2_plcr4s.png" alt="logotipo" />
          </div>
          <div className="loco">
            <h1>Locos por el deporte, éste es vuestro sitio. ¡Bienvenidos!</h1>
          </div>
          <div className="encuentra">
            <p>Encuentra partidos, conecta con otros jugadores y mantente activo con tu deporte favorito.</p>
          </div>
          <div>
          </div>
        </div>
        <div className="right">
          <div>
            <div className="escoge">
              <h1>Escoge el perfil que mejor se adapta a ti.</h1>
            </div>
          </div>
          <div className="down">
            <div className="jugador">
              <h5 > JUGADOR </h5>
              <p className="siere"> Si eres jugador y buscas partidos para unirte o quieres probar suerte en algún club o equipo éste es tu camino.</p>
              <Link to="/user" className="acced" >
                <h1 className="accede" onClick={() => this.props.setFlow("jugador")}>Accede</h1>
              </Link>
            </div>
            <div className="Club">
              <h5 > CLUB </h5>
              <p className="sipe">Si perteneces a un equipo o club y estás en busca de nuevos jugadores accede o crea una cuenta.</p>
              <Link to="/club" className="acced">
                <h1 className="accede" onClick={() => this.props.setFlow("club")}> Accede</h1>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
