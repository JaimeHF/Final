import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import Player from "../../services/User";


class Userid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        username:null,

      };
      this.player = new Player();
    // this.club = new AuthServiceClub()
  }

  postDetail(id) {
    return this.player.getPlayerDetails(id).then(response => {
      this.setState({
        username: response.username,
  

      });
    });
  }

  componentDidMount = () => {
    this.postDetail(this.props.match.params.id);
  };

  render() {
    const { username, date, description,club_id } = this.state
    return (
      <div className="Postid">
      <Link to="/User/home">back</Link>
        <h1>Postid</h1>
        <img src="" alt="foto club" />
        <div>
          <h1>{username}</h1>
        </div>
        {/* <div>
          <p></p>
        </div>
        <div>
          <h1>{moment(date).format("DD/MM/YYYY")}</h1>
          <p>{description} </p>
        </div> */}
        
      </div>
    );
  }
}

export default Userid;
