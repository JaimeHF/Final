import React from "react";
import { Link } from "react-router-dom";
import Containpost from "../post/Containpost"
import "./club.scss"




class Clubhome extends React.Component {

  state = {
    loggedInUser: null,
  }


  render() {
    console.log(this.props.loggedInUser._id)
    return (
      <div className="homeclub">
        <div className="clubhomeleft">
          <div className="clubper">
            <div className="clubperfil">
              <div>
                <img src={this.props.loggedInUser.clubData.imgPath} alt="foto perfil" />
              </div>
              <div>
                <h1>{this.props.loggedInUser.username}</h1>
              </div>
            </div>
            <div className="clubperfilabaj">
              <Link to={`/club/${this.props.loggedInUser._id}`}  >
                <p className="cre">Perfil</p>
              </Link>
              <Link to="/newpost"  >
                <p className="cre">Crea un post</p>
              </Link>
            </div>

          </div>
        </div>

        <div className="clubhomeright">
          <div className="clubhomepo">
            <div className="clubcompo">
              {this.props.allPost.map((post, idx) => (
                <Containpost key={idx} id={post._id} title={post.title} name={post.club_id.username} img={post.club_id.clubData.imgPath} date={post.date} description={post.description}  > </Containpost>
              ))}
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default Clubhome;