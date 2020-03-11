import React from "react";
import Navbar from "./navbar/Navbar";
import { Link } from "react-router-dom";
import Containpost from "../post/Containpost"
import Containmatch from "../match/Containmatch";
import Post from "../../services/Post"
import "./user.scss"




class Userhome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenFlow: "post",
      post: null,
      chooseSport:null

    }
    this.post = new Post()
  }


  setFlow(flowType) {
    this.setState({
      ...this.state,
      chosenFlow: flowType
    });
  }

  setSport(flowType) {
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
        <div className="per">
          <div className="perall">
            <div className="perfil">
              <div>
                <img src={this.props.loggedInUser.playerData.imgPath} alt="foto perfil" />
              </div>
              <div>
                <h1>{this.props.loggedInUser.username}</h1>
              </div>
            </div>
            <div className="np" >
              <Link to="/newmatch"  >
                <h1  >Crea partido</h1>
              </Link>
            </div>
          </div>
        </div>
        <div className="po">
          <div className="sup">
            <div className="pob">
              <div>
                <button onClick={() => this.setFlow("post")} >Publicaciones</button>
              </div>
              <div>
                <button onClick={() => this.setFlow("match")} >Partidos</button>
              </div>
            </div>
            <div className="bus">

            <div className="depo">
              <p ><img src="https://res.cloudinary.com/dwwfzwx93/image/upload/v1583933005/illustration-football_x2_muou9a.png" alt=""/></p>
            </div>
            <div className="depo">
              <p ><img src="https://res.cloudinary.com/dwwfzwx93/image/upload/v1583933005/illustration-paddle_x2_er2sbn.png" alt=""/></p>
            </div>
            <div className="depo">
              <p ><img src="https://res.cloudinary.com/dwwfzwx93/image/upload/v1583933005/illustration-basket_x2_b5o5ta.png" alt=""/></p>
            </div>
            <div className="depo">
              <p ><img src="https://res.cloudinary.com/dwwfzwx93/image/upload/v1583933005/illustration-cycle_x2_esbwov.png" alt=""/></p>
            </div>
            </div>
              <div >
            <div>{this.state.chosenFlow === "post" &&
              <p className="encontrado"> Encontrados {this.props.allPost.length} publicaciones cerca de ti </p>}
            </div>
            <div>{this.state.chosenFlow === "match" &&
              <p className="encontrado"> Encontrados {this.props.allMatch.length} publicaciones cerca de ti </p>}
            </div>
            </div>
          </div>

          <div className="componentes">
            <div>{this.state.chosenFlow === "post" &&
              <div>
                {this.props.allPost.map(post => (
                  <Containpost key={post._idx} id={post._id} title={post.title} name={post.club_id.username} img={post.club_id.clubData.imgPath} date={post.date} description={post.description}  > </Containpost>
                ))}
              </div>}
            </div>
            <div>{this.state.chosenFlow === "match" &&
              <div>
                {this.props.allMatch.map(match => (
                  <Containmatch key={match._idx} id={match._id} name={match.macthname} time={match.time} location={match.location} price={match.price} date={match.date} type={match.type} user={match.user_id} ></Containmatch>
                ))}
              </div>}
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default Userhome;