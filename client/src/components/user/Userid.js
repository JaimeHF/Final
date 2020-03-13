import React from "react";
import Player from "../../services/User";
import "./user.scss"



class Userid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id:null,
      username: null,
      imgPath: null,
      position: null,
      portero: null,
      defensa: null,
      lateral: null,
      centrocampista: null,
      extremo: null,
      delantero: null,
      location:null,
      year:null,
      match: null,
      contact:null,

    };
    this.player = new Player();
    // this.club = new AuthServiceClub()
  }
  //   [`Portero`, `Defensa`, `Lateral`, `Centrocampista`, `Extremo`, `Delantero`]


  mapPosition() {
    let arrP = this.state.position.some(e => e === "Portero");
    arrP === true ? this.setState({ portero: "Portero" }) : this.setState({ portero: null });
    let arP = this.state.position.some(e => e === "Lateral")
    arP === true ? this.setState({ lateral: "Lateral" }) : this.setState({ lateral: null });
    let aP = this.state.position.some(e => e === "Defensa")
    aP === true ? this.setState({ defensa: "Defensa" }) : this.setState({ defensa: null });
    let arr = this.state.position.some(e => e === "Centrocampista")
    arr === true ? this.setState({ centrocampista: "Centrocampista" }) : this.setState({ centrocampista: null });
    let rrP = this.state.position.some(e => e === "Extremo")
    rrP === true ? this.setState({ extremo: "Extremo" }) : this.setState({ extremo: null });
    let rr = this.state.position.some(e => e === "Delantero")
    rr === true ? this.setState({ delantero: "Delantero" }) : this.setState({ delantero: null });

  }

  postDetail(id) {
    return this.player.getPlayerDetails(id).then(response => {
      this.setState({
        id:response._id,
        username: response.username,
        imgPath: response.playerData.imgPath,
        position: response.playerData.position,
        location:response.playerData.location,
        year:response.playerData.year,
        match: response.playerData.match,
        contact:response.playerData.contact,

      }, () => { this.mapPosition() });
    });
  }

  componentDidMount = () => {
    this.postDetail(this.props.match.params.id);

  };

  render() {

    const { username, imgPath, contact,match,year,location} = this.state
    return (
      <div className="userID">
        <div className="userI">
          <div className="useridleft">
            <img src={imgPath} alt="foto club" className="leftimg" />
            <div>
              <p>{username}</p>
            </div>
            <div>
              <p>Amigos: {contact}</p>
            </div>
            <div>
              <p>Partidos jugados:{match}</p>
            </div>
            <div>
              <p>{location}</p>
            </div>
            <div>
              <p>{year} Años</p>
            </div>
          </div>
          <div className="useridright">
          <div >
            <div className="grid-container">
              <div className="grid-item"></div>
              <div className="grid-item">{this.state.lateral === "Lateral" && <img className="camiseta" src="https://res.cloudinary.com/dwwfzwx93/image/upload/v1584035954/Football_2-02_icon-icons.com_72080_owrzdg.png" alt="" />}</div>
              <div className="grid-item"></div>
              <div className="grid-item">{this.state.extremo === "Extremo" && <img className="camiseta" src="https://res.cloudinary.com/dwwfzwx93/image/upload/v1584035954/Football_2-02_icon-icons.com_72080_owrzdg.png" alt="" />}</div>
              <div className="grid-item">{this.state.portero === "Portero" && <img className="camiseta" src="https://res.cloudinary.com/dwwfzwx93/image/upload/v1584035954/Football_2-02_icon-icons.com_72080_owrzdg.png" alt="" />}</div>
              <div className="grid-item">{this.state.defensa === "Defensa" && <img className="camiseta" src="https://res.cloudinary.com/dwwfzwx93/image/upload/v1584035954/Football_2-02_icon-icons.com_72080_owrzdg.png" alt="" />}</div>
              <div className="grid-item">{this.state.centrocampista === "Centrocampista" && <img className="camiseta" src="https://res.cloudinary.com/dwwfzwx93/image/upload/v1584035954/Football_2-02_icon-icons.com_72080_owrzdg.png" alt="" />}</div>
              <div className="grid-item">{this.state.delantero === "Delantero" && <img className="camiseta" src="https://res.cloudinary.com/dwwfzwx93/image/upload/v1584035954/Football_2-02_icon-icons.com_72080_owrzdg.png" alt="" />}</div>
              <div className="grid-item"></div>
              <div className="grid-item">{this.state.lateral === "Lateral" && <img className="camiseta" src="https://res.cloudinary.com/dwwfzwx93/image/upload/v1584035954/Football_2-02_icon-icons.com_72080_owrzdg.png" alt="" />}</div>
              <div className="grid-item"></div>
              <div className="grid-item">{this.state.extremo === "Extremo" && <img className="camiseta" src="https://res.cloudinary.com/dwwfzwx93/image/upload/v1584035954/Football_2-02_icon-icons.com_72080_owrzdg.png" alt="" />}</div>
            </div>
          </div>

          <div>{this.props.loggedInUser._id===this.state.id?(
          <div>
            <p className="toca">Editar</p>
          </div>):
         ( <div>
            <p className="toca">Agregar</p>
          </div>)}
          </div>

          <div>
            <img src="" alt=""></img>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default Userid;
