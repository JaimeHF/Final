import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import Club from "../../services/Clubs";
import "./club.scss"


class Clubid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      imgPath: null,
      description: null

    };
    this.club = new Club();
  }

  clubDetail(id) {
    return this.club.getClubDetails(id)
      .then(response => {
        this.setState({
          username: response.username,
          imgPath: response.clubData.imgPath,
          description: response.clubData.description

        });
      });
  }

  componentDidMount = () => {
    this.clubDetail(this.props.match.params.id);
  };

  render() {
    const { description, imgPath, username } = this.state
    return (
      <div className="Clubid">
        <div className="clubleft">
          <div>
            <img src={imgPath} alt="foto club" className="do"/>
          </div>
          <div className="envia">
            <div>
              <p className="pip">Enviar  mensaje</p>
            </div>
          </div>
        </div>
        <div className="clubright">
          <div>
            <p className="clname">{username}</p>
          </div>
          <div>
            <p className="tion">{description} </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Clubid;