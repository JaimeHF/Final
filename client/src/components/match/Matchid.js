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
        isAdd:null,
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
      })
    });
  }



  userIn=()=>{
    for(let i=0;i < this.state.user_id.length; i++ )
    if(this.state.user_id[i] === this.props.loggedInUser._id){
      return this.setState({...this.state,isAdd:true})
    }


    // let isAdd = null;
    // add !==undefined ? isAdd = true :isAdd = false;
    // this.setState({isAdd:add})
  
  }

  addOne=(id)=> {
  this.match.addOne(id,{newUser:this.props.loggedInUser._id}).then(response=>{
    this.setState({
      ...this.state,
      user_id:this.props.loggedInUser._id

    })
  })
  }

  componentDidMount = () => {
    this.matchDetail(this.props.match.params.id);
    this.userIn()
    
  };

  render() {
    const { macthname,price,date,time,userCreated_id,user_id,location,TYPE, username,imgPath } = this.state
    console.log(this.state.user_id.find(user => user === this.props.loggedInUser._id))
    console.log(this.state.user_id.length)
    return (
      <div className="Postid">
        <h1>partido</h1>
        <Link to="/User/home">back</Link>
        <div>
          <h1>{macthname}</h1>
        </div>
        <div>
          <h1>{price}Euros</h1>
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
        </div>
        {this.props.isAdd  ?(
        <button type="submit" onSubmit={this.addOne}>Apuntarse</button>
        ):(
        <button type="submit" onSubmit={this.addOne}>Salirse</button>
        )}
      </div>
    );
  }
}

export default Matchid;