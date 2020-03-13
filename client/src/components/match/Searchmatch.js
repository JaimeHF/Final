import React from "react";
import Navbar from "./navbar/Navbar";
import { Link } from "react-router-dom";
import Containmacth from "../match/Containmatch"
import "./macth.scss"




class Searchmatch extends React.Component {



    

  render() {
    console.log(this.props)
    return (
      <div>
        <h1>woooolaaaaaaa</h1>
        <Link to="/searchmatch"></Link>
        {this.props.allPost.map(post => (
          <Containmacth onClick={() => this.props.postDetail(post)} id={post._id} title={post.title} name={post.club_id.username} img={post.club_id.clubData.imgPath} date={post.date} description={post.description}  ></Containmacth>
        ))}

      </div>
    )
  }
}

export default Searchmatch;