import React from "react";
import Navbar from "./navbar/Navbar";
import { Link } from "react-router-dom";
import Containpost from "../post/Containpost"
import Containmatch from "../match/Containmatch";
import Post from "../../services/Post"




class Userhome extends React.Component {
  constructor(props) {
    super(props);
  this.state = {
    chosenFlow: "post",
    post:null
    
  }
  this.post = new Post()
}


  setFlow(flowType) {
    this.setState({
      ...this.state,
      chosenFlow: flowType
    });
  }


  // postDetail(){
  //   console.log("hola postDetail")
  //   return this.post.getPostDetails()
  // .then(response=>{
  //   this.setState({ 
  //     post:response
  //   })
  // })
 
// }

  render() {
    return (
      <div className="homeuser">
       <div>
        <div className="per">
          <div className="perfil">
            <div>
              <img src="{this.props.loggedInUser.playerData.imgPath}" alt="foto perfil"/>
            </div>
            <div>
              <h1>{this.props.loggedInUser.username}</h1>
            </div>
          </div>
        </div>
        <div>
          <Link to="/newmatch"  >
            <p>Organiza un partido</p>
          </Link>
        </div>
        </div>
        <div>
        <button onClick={() => this.setFlow("post")} >post futbol</button>
        <button onClick={() => this.setFlow("match")} >buscar partidos de futbol</button>
        <div>{this.state.chosenFlow === "post" &&
          <div>
            {this.props.allPost.map(post => (
    <Containpost key={post._idx}  id={post._id} title={post.title} name={post.club_id.username} img={post.club_id.clubData.imgPath} date={post.date} description={post.description}  > </Containpost>
            ))}
          </div>}
        </div>
        <div>{this.state.chosenFlow === "match" &&
          <div>
            {this.props.allMatch.map(match => (
              <Containmatch  key={match._idx} id={match._id} name={match.macthname}  location={match.location} price={match.price} date={match.date} type={match.TYPE} user={match.user_id} ></Containmatch>
            ))}
          </div>}
        </div>
        </div>

      </div>
    )
  }
}

export default Userhome;