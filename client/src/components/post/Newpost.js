import React from "react";
import Post from "../../services/Post"
import "./post.scss"

class Newmatch extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

      title: "",
      description: "",
      location: [],
      // date: "",
      club_id: ""

    };
    this.post = new Post();
  }

  handleFormSubmit = (event) => {
    // debugger
    event.preventDefault();
    const title = this.state.title;
    const description = this.state.description;
    const location = this.state.location;
    // const date = this.state.date;
    const club_id = this.props.loggedInUser._id

    this.post.newPost(title, description, location, club_id)
      .then(response => {
        this.setState({
          title: title,
          description: description,
          location: location,
          // date: date,
          club_id: club_id,
          error: false
        });

        this.props.getUser(response)
      })
      .catch(error => {
        this.setState({
          title: title,
          description: description,
          location: location,
          // date: date,
          club_id: club_id,
          error: true
        });
      })
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  componentDidMount() {
    this.setState({ ...this.state, club_id: this.props.loggedInUser._id })
  }
  render() {
    return (
      <div className="newpost">
        <div className="newpos">
          <div className="newposleft">
       <p>Crea un post, lo podras hacer en unos secillos pasos:</p>
      <p>1) Introduce un titulo para captar la atencion de los jugadores.</p>
    <p>2) Escribe toda la informacion que quieras hacer llegar a los jugadores y equipos. </p>
      <p>3) Y para terminar solo tienes que darle al boton Crear.</p>
          </div>
          <div className="newpostright">
          <form onSubmit={this.handleFormSubmit} >
            <div className="">
              <div>
                <fieldset>
                  <input className="newposttitle" type="text" name="title" placeholder="Ponle un titulo llamativo" value={this.state.title} onChange={e => this.handleChange(e)} />
                </fieldset>
              </div>
              <div>
                <fieldset>
                  <textarea type="text" name="newpostdescription" id="" rows="10" cols="60" maxLength="300" class="textito" placeholder="Escribe aquí.." onChange={e => this.handleChange(e)} />
                </fieldset>
              </div>
              <div>
              </div>
              <div>
              </div>
              <div className="">
                <input className="newpossubm" type="submit" value="Crear" />
              </div>
            </div>
          </form>
          </div>
        </div>
      </div>)
  }

}

export default Newmatch;