import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="row">
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title"> JUGADOR </h5>{" "}
                <p className="card-text">
                  {" "}
                BUSCA UN PARTIDO CERCA DE TI{" "}
                </p>{" "}
                <Link to="/user" className="btn btn-primary">
                  <h1 onClick={() => this.props.setFlow("entrar")}>
                    {" "}
                    Entrar{" "}
                  </h1>
                </Link>
                <Link to="/user" className="btn btn-primary">
                  <h1 onClick={() => this.props.setFlow("crear")}>
                    {" "}
                    Crear{" "}
                  </h1>
                </Link>
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title"> CLUB </h5>{" "}
                <p className="card-text">
                  {" "}
                  BUSCA JUGADORES CERCA DE TI PARA COMPLETAR TU EQUIPO{" "}
                </p>{" "}
                <Link to="/club" className="btn btn-primary">
                  <h1 onClick={() => this.props.setFlow("crear")}> Crear</h1>
                </Link>{" "}
                <Link to="/club" className="btn btn-primary">
                  <h1 onClick={() => this.props.setFlow("entrar")}> Entrar </h1>
                </Link>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>
    );
  }
}

export default Home;
