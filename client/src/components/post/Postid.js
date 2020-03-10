import React from "react";
import moment from "moment";
import Post from "../../services/Post";
import { Link } from "react-router-dom";


class Postid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: null,
      description: null,
      date: null,
      club_id: null,
    };
    this.post = new Post();
    // this.club = new AuthServiceClub()
  }

  postDetail(id) {
    return this.post.getPostDetails(id).then(response => {
      this.setState({
        title: response.title,
        description: response.description,
        date: response.date,
        club_id: response.club_id,

      });
    });
  }

  componentDidMount = () => {
    this.postDetail(this.props.match.params.id);
  };

  render() {
    const { title, date, description, club_id } = this.state
    return (
      <div className="Postid">
        <Link to="/User/home">back</Link>
        <h1>Postid</h1>
        <img src={this.props.img} alt="foto club" />
        <Link to={`/club/${club_id}`} >
          <div>
            <h1>{title}</h1>
          </div>
        </Link>
        <div>
          <p></p>
        </div>
        <div>
          <h1>{moment(date).format("DD/MM/YYYY")}</h1>
          <p>{description} </p>
        </div>

      </div>
    );
  }
}

export default Postid;
