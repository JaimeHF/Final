import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import Club from "../../services/Clubs";


class Clubid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        username:null,

      };
      this.club = new Club();
  }

  clubDetail(id) {
    return this.club.getClubDetails(id)
    .then(response => {
      this.setState({
        username: response,
        
      });
    });
  }

  componentDidMount = () => {
    this.clubDetail(this.props.match.params.id);
    console.log(this.props.match.params.id)
  };

  render() {
    const { username, date, description,club_id } = this.state
    return (
      <div className="Postid">
      <Link to="/User/home">back</Link>
        <h1>Clubdetail</h1>
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

export default Clubid;