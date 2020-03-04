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
                <h5 className="card-title"> Special title treatment </h5>{" "}
                <p className="card-text">
                  {" "}
                  With supporting text below as a natural lead - in to
                  additional content.{" "}
                </p>{" "}
                <Link to="/user" className="btn btn-primary">
                  <h1 onClick={() => this.props.setFlow("jugador")}>
                    {" "}
                    JUGADOR{" "}
                  </h1>
                </Link>
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title"> Special title treatment </h5>{" "}
                <p className="card-text">
                  {" "}
                  With supporting text below as a natural lead - in to
                  additional content.{" "}
                </p>{" "}
                <Link to="/club" className="btn btn-primary">
                  <h1 onClick={() => this.props.setFlow("club")}> CLUB </h1>
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
