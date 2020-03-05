import "./home.css";
import React from "react";
import { Link } from "react-router-dom";

class Containpost extends React.Component {

  render() {
    return (

      <div className="containpost">

    <div>
    <h1>{this.props.club_id}</h1>
    </div>
    <div>
    <h2>{this.props.title}</h2>
      <h1>{this.props.date}</h1>
    <p>Created by:{this.props.des} </p>
</div> 

      </div>
    );
  }
}

export default Containpost;