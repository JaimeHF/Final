import React from "react";
import Navbar from "./navbar/Navbar";
import { Link } from "react-router-dom";
import Containpost from "../post/Containpost"
import Containmatch from "../match/Containmatch";




class Userhome extends React.Component {

  state = {
    chosenFlow: "post",
  }
  setFlow(flowType) {
    this.setState({
      ...this.state,
      chosenFlow: flowType
    });
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <h1>woooolaaaaaaa</h1>

        <button onClick={() => this.setFlow("post")} >post futbol</button>
        <button onClick={() => this.setFlow("match")} >buscar partidos de futbol</button>
        <div>{this.state.chosenFlow === "post" &&
          <div>
            {this.props.allPost.map(post => (
              <Containpost onClick={() => this.props.postDetail(post)} key={post._id} title={post.title} name={post.club_id.username} img={post.club_id.clubData.imgPath} date={post.date} description={post.description}  ></Containpost>
            ))}
          </div>}
        </div>

        <div>{this.state.chosenFlow === "match" &&
          <div>
            {this.props.allMatch.map(match => (
              <Containmatch onClick={() => this.props.postDetail(match)} key={match._id} id={match._id} name={match.matchname} location={match.location} price={match.price} date={match.date} type={match.type}  ></Containmatch>
            ))}
          </div>}
        </div>

      </div>
    )
  }
}

export default Userhome;