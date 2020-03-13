import React from "react";
import moment from "moment";
import Match from "../../services/Match";
import User from "../../services/User";
import Player from "../user/Player";
import "./macth.scss"
import { Link } from "react-router-dom";



class Matchid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      _id:null,
      macthname: null,
      price: null,
      date: null,
      time: null,
      type: null,
      user_id: [],
      location: null,
      username: null,
      isAdd: null,
      description:null,
    };
    this.match = new Match();
    this.user = new User()
  }

  matchDetail(id) {
    return this.match.getMatchDetails(id).then(response => {
      this.setState({
        _id:response._id,
        macthname: response.macthname,
        price: response.price,
        date: response.date,
        time: response.time,
        username: response.userCreate_id.username,
        type: response.type,
        user_id: response.user_id,
        location: response.location,
        description: response.description,
      })
    });
  }

  addOne = () => {
    console.log("entro")
    this.match.addOne(this.state._id, { newUser: this.props.loggedInUser._id })
    .then(response => {
      this.setState({
        user_id: response

      },()=>{this.matchDetail(this.props.match.params.id)})
    })
  }

  
  componentDidMount = () => {
    this.matchDetail(this.props.match.params.id);
  };

  render() {
    console.log(this.state)
    const { macthname, price, date, time, type, username, description } = this.state
    return (
      <div className="paco">
        <div className="macht">
          <div className="mactleft">
            <div className="maclefname">
              <p>{macthname}</p>
            </div>
            <div className="leftleft">
              <div>
              <div className="macleftime">
                <div>
                  <p>{moment(date).format("DD/MM/YYYY")}</p>
                </div>
                <div>
                  <p>{time}</p>
                </div>
              </div>
              <div className="macleftime">
                <div>
                  <p>{type} </p>
                </div>
                <div>
                  <p>{price} €</p>
                </div>
              </div>
              </div>
              <div>
              <p>Partido creado por:  {this.state.username} </p>
            </div>
            </div>


            <div className="maclefdes">
              <p>{description}</p>
            </div>
            <div >
            <Link to={`/match/${this.state._id}`} >
              {this.state.user_id.some(e=>e===this.props.loggedInUser._id) ? (
                <button  onClick={this.exit} className="maclefbos">Salirae</button>
              ) : (
                  <button  onClick={this.addOne} className="maclefbos">Apuntarse</button>
                )}
</Link>
            </div>
          </div>

          <div className="mactright">
            <div className="macthuser">
              <div className="team">
                <div><p>EQUIPO A</p></div>

                <div><p>EQUIPO B</p></div>
              </div>
              <div className="userma">
                {this.state.user_id.map((user,idx) => (
                  <Player key={idx} user={user}> </Player>
                ))}
              </div>
            </div>
          </div>


        </div>

      </div>
    );
  }
}

export default Matchid;