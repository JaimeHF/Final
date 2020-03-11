import "../home.css";
import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import moment from "moment";
import Post from "../../services/Post";
import Postid from "../post/Postid";
import User from "../../services/User";

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        username: null,
        imgPath: null
    };
    this.user = new User()
  }
  playerDetails(id) {
    return this.user.getPlayerDetails(id).then(response => {
      this.setState({
        username: response.username,
        imgPath: response.playerData.imgPath,
      });
    });
  }

  componentDidMount = () => {
    this.playerDetails(this.props.user)
  };

  render() {
    return (
  
      <div>
        <Link to={`/user/${this.props.user}`}   >
        <div className="">
          <div>
          <h3>{this.state.username}</h3>
          </div>
          <div>
            <img src={this.state.imgPath} alt=""/>
          </div>
       
      </div>
        </Link>
      </div>
    );
  }
}

export default Player;
