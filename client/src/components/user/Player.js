import "./player.scss"
import React from "react";
import { Link} from "react-router-dom";
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
  
      <div className="player">
        <Link to={`/user/${this.props.user}`}   >
        <div className="player">
        <div > 
            <img src={this.state.imgPath} alt="" className="playerimg"/>
          </div>
          <div className="playername">
          <p>{this.state.username}</p>
          </div>
      </div>
        </Link>
      </div>
    );
  }
}

export default Player;
