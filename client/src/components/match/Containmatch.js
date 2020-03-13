import "./macth.scss"
import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

class Containmacth extends React.Component {
  state = {
    user: []
  }

  render() {

    return (
        <Link to={`/match/${this.props.id}`} className="containmatch">
     
            <div className="conleft">
            <div className="dat">
    <p>{moment(this.props.date).format("DD/MM/YYYY")} </p>
    <p>{this.props.time}</p>
            </div>
            <div className="price">
              <p>{this.props.price}€</p>
            </div>
            </div>
            <div className="concenter"> 
          <div className="title">
            <p>{this.props.name}</p>
          </div>
          <div>
            <h2>{this.props.location}</h2>
            </div>
            </div>
            <div className="conright">
            <div className="futbol">
              <div> {this.props.type[0] === "Futbol Sala" &&
                <div>
                  <p>  <img className="img"  src="https://res.cloudinary.com/dwwfzwx93/image/upload/v1583933005/icon-player_x2_uo5kqd.png" alt=""/> {this.props.user.length}/10 </p>
                </div>}</div>
              <div>  {this.props.type[0] === "Futbol 11" &&
                <div>
                  <p> <img  className="img" src="https://res.cloudinary.com/dwwfzwx93/image/upload/v1583933005/icon-player_x2_uo5kqd.png" alt=""/> {this.props.user.length}/22 </p>
                </div>}
              </div>
              <div> {this.props.type[0] === "Futbol 7" &&
                <div>
                  <p> <img  className="img" src="https://res.cloudinary.com/dwwfzwx93/image/upload/v1583933005/icon-player_x2_uo5kqd.png" alt=""/> {this.props.user.length}/14 </p>
                </div>}
              </div>
            </div>
            <div className="type">
              <p>{this.props.type} </p>
            </div>
            </div>
        </Link>
    );
  }
}

export default Containmacth;