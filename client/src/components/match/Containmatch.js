// import "./home.css";
import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

class Containmacth extends React.Component {

  render() {
    debugger
    return (

        <div className="container">
        
        <Link to={`/post/${this.props.id}`}>
            <div>
    
              <h1>{this.props.name}</h1>
            </div>
            <div>
              <h2>{this.props.location}</h2>
              <h1>{moment(this.props.date).format("DD/MM/YYYY")}</h1>
              <p>{this.props.type} </p>
              <p>{this.props.price}</p>
            </div>
            </Link>
          </div>
    );
  }
}

export default Containmacth;