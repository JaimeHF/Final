import React from "react";
import { Link } from "react-router-dom";
import "./home.css";


class Home extends React.Component {
 

  render() {
    return (

<div className="home">

            <div class="row">
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <Link to="/user" class="btn btn-primary">
                <h1>JUGADOR</h1>
               </Link>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <Link to="/club" class="btn btn-primary">
                <h1>CLUB</h1>
               </Link>
      </div>
    </div>
  </div>
</div>
</div>
    );
  }
}

export default Home;