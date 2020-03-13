import React from "react";
import moment from "moment";
import Post from "../../services/Post";
import { Link } from "react-router-dom";
import Club from "../../services/Clubs";
import "./post.scss"


class Postid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: null,
      description: null,
      date: null,
      club_id: null,
      imgPath: null,
      username: null,

    };
    this.post = new Post();
    this.club = new Club()
    // this.club = new AuthServiceClub()
  }

  postDetail(id) {
    return this.post.getPostDetails(id).then(response => {
      this.setState({
        title: response.title,
        description: response.description,
        date: response.date,
        club_id: response.club_id,



      }, () => { this.clubDetail(this.state.club_id) });
    });
  }

  clubDetail(id) {
    return this.club.getClubDetails(id).then(response => {
      debugger
      this.setState({
        imgPath: response.clubData.imgPath,
        username: response.username
      })
    })
  }

  componentDidMount = () => {
    this.postDetail(this.props.match.params.id);
    this.clubDetail(this.state.club_id)
  };

  render() {
    const { title, date, description, club_id, imgPath, username } = this.state
    return (
      <div className="Postid">
       <div className="Postidall">
          <div className="postleft">
            <div className="datito">
              <p >{moment(date).format("DD/MM/YYYY")}</p>
            </div>
            <div >
                <div>
                  <p className="tit">{title}</p>
                </div>
            </div>
          
            <div>
              <p className="nom">{username}</p>
            </div>
            <div>
              <div>
                <p className="desc">{description} </p>
              </div>
            </div>
          </div>
          <div className="postright">
            <div >
              <img src={imgPath} alt="foto club" className="escudo" />
            </div>
            <div className="ficha">
            <Link to={`/club/${club_id}`} >
                <div>
                  <p className="pp">Ficha del club</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Postid;
