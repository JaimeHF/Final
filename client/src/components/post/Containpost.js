import "../home.css";
import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";


class Containpost extends React.Component {

  render() {
    debugger
    return (

        <Link to={`/post/${this.props.id}`}>
      <div className="container">
          <div>
            <p>{moment(this.props.date).format("DD/MM/YYYY")}</p>
          </div>
          <div>
          <h3>{this.props.title}</h3>
          </div>
          {/* <div>
          <img src={this.props.img} alt="foto club" />
          </div> */}
          <div>

            <p>{this.props.name}</p>
          </div>
          <div>
           
            
            {/* <p>{this.props.description} </p> */}
          </div>
      </div>
        </Link>
    );
  }
}

export default Containpost;