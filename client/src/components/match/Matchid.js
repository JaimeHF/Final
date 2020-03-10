import React from "react";
import moment from "moment";
import Match from "../../services/Match";
import { Link } from "react-router-dom";
import User from "../../services/User";
import Player from "../user/Player";



class Matchid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        macthname: null,
        price: null,
        date: null,
        time: null,
        userCreated_id: "",
        TYPE: null,
        user_id: [],
        location: null,
        username:null,
    };
    this.match = new Match();
    this.user = new User()
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



  // addOne=(id)=>{
  //     return this.match.addOne(id).then(response=>{
  //       this.setState({
  //         ...this.state,
  //         user_id:this.props.loggedInUser._id

  //       })
  //     })
  // }

  componentDidMount = () => {
    this.matchDetail(this.props.match.params.id);
    
  };

  render() {
    const { macthname,price,date,time,userCreated_id,user_id,location,TYPE, username,imgPath } = this.state
    console.log(user_id)
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
        {this.state.user_id.map(user => (
          <Player user={user}> </Player>
           ))}   
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
        </div>{this.props.loggedInUser._id === "match" &&
        <button type="submit" onSubmit={this.addOne}>Apuntarse</button>
        }
      </div>
    );
  }
}

export default Matchid;