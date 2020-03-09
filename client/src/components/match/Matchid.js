import React from "react";
import moment from "moment";
import Match from "../../services/Match";
import { Link } from "react-router-dom";


class Matchid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        macthname: null,
        price: null,
        date: null,
        time: null,
        userCreated_id: null,
        TYPE: null,
        user_id: null,
        location: null,
    };
    this.match = new Match();
  }

  matchDetail(id) {
    return this.match.getMatchDetails(id).then(response => {
      this.setState({
        macthname: response.macthname,
        price: response.price,
        date: response.date,
        time: response.time,
        userCreated_id: response.userCreated_id,
        TYPE: response.TYPE,
        user_id: response.user_id,
        location: response.location,

      });
    });
  }

  componentDidMount = () => {
    this.matchDetail(this.props.match.params.id);
  };

  render() {
    const { macthname,price,date,time,userCreated_id,user_id,location,TYPE } = this.state
    return (
      <div className="Postid">
        <h1>Postid</h1>
        <Link to="/User/home">back</Link>
        <img src={this.props.img} alt="foto club" />
        <div>
          <h1>{macthname}</h1>
        </div>
        <div>
          <h1>{price}</h1>
        </div>
        <div>
          <h1>{time}</h1>
        </div>
        <div>
          <h1>{userCreated_id}</h1>
        </div>
        <div>
        
        <Link to={`/user/${this.props.id}`}>
          <h1>{user_id}</h1>
          </Link>
          <div>
          <h1>{location}</h1>
        </div>
        <div>
          <h1>{TYPE}</h1>
        </div>
        </div>
        <div>
          <h1>{moment(date).format("DD/MM/YYYY")}</h1>
          <p>{this.props.description} </p>
        </div>
      </div>
    );
  }
}

export default Matchid;