import React from "react";

import moment from "moment";

class Postid extends React.Component {

    postDetail(){
        return this.post.getPostDetails()
      .then(response=>{
        this.setState({ 
          post:response
        })
      })
     
    }

  render() {
    console.log(this.props)
    return (

      <div className="Postid">
      <h1>Postid</h1>
    <img src={this.props.img} alt="foto club"/>
    <div>
    <h1>{this.props.name}</h1>
    </div>
    <div>
    <h2>{this.props.title}</h2>
      <h1>{moment(this.props.date).format("DD/MM/YYYY")}</h1>
    <p>{this.props.description} </p>
</div> 

      </div>
    );
  }
}

export default Postid;