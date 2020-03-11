import "./post.scss"
import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import moment from "moment";
import Post from "../../services/Post";
import Postid from "../post/Postid";

class Containpost extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     postData: null,
  //     postId: null
  //   };
  //   this.post = new Post();
  // }

  // componentDidMount = () => {
  //   this.setState({
  //     postId: this.props.id
  //   });
  // };

  render() {
    // console.log(this.props.img)
    return (
      <div>
        <Link to={`/post/${this.props.id}`} img={this.props.img} className="containpost" >
        <div className="containpos">
          <div className="date">
            <p>{moment(this.props.date).format("DD/MM/YYYY")}</p>
          </div>
          <div className="title">
          <h3>{this.props.title}</h3>
          </div>
          <div>
            <img src="" alt=""/>
          </div>
          <div className="equi">
            <p>{this.props.name}</p>
          </div>
      </div>
        </Link>
      </div>
    );
  }
}

export default Containpost;
