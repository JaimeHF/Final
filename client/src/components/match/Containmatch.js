// import "./home.css";
import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

class Containmacth extends React.Component {

count(){
      if(this.props.type ===` Futbol Sala` ){
      let x = (this.props.user).lenght/10
    }else if (this.props.type ===`Futbol 11`){
      let x = (this.props.user).lenght/22
    }else if(this.props.type ===`Futbol 7`){
      let x = (this.props.user).lenght/14
    }
}

  render() {

    return (
      console.log(this.props.user),

      <div className="container">

        <Link to={`/match/${this.props.id}`}>
          <div>
            <div>
              <p>{}</p>
            </div>
            <h1>{this.props.name}</h1>
          </div>
          <div>
            <h2>{this.props.location}</h2>
            <h1>{moment(this.props.date).format("DD/MM/YYYY")}</h1>
            <p>{this.props.type} </p>

            <div>
                <p count={this.count()} > </p>
            </div>
            <p>{this.props.price}</p>
          </div>
        </Link>
      </div>
    );
  }
}

export default Containmacth;