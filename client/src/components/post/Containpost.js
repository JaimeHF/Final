import "../home.css";
import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import moment from "moment";
import Post from "../../services/Post";
import Postid from "../post/Postid";

class Containpost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postData: null,
      postId: null
    };
    this.post = new Post();
  }

  // componentDidMount = () => {
  //   this.setState({
  //     postId: this.props.id
  //   });
  // };

  render() {
    console.log("yoooo")
    console.log(this.props.img)
    return (
      <div>
        <Link to={`/post/${this.props.id}`} >
        <div className="container">
          <div>
            <p>{moment(this.props.date).format("DD/MM/YYYY")}</p>
          </div>
          <div>
          <h3>{this.props.title}</h3>
          </div>
          <div>
            <img src={this.props.img} alt=""/>
          </div>
          <div>
            <p>{this.props.name}</p>
          </div>
      </div>
        </Link>
      </div>
    );
  }
}

export default Containpost;
