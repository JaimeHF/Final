import React from "react";
import moment from "moment";
import Post from "../../services/Post"

class Newmatch extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      
      title: "",
      description: "",
      location: [],
      date: "",
      club_id:""

    };
    this.post = new Post();
  }

  handleFormSubmit = (event) => {
    debugger
    event.preventDefault();
    const title = this.state.title;
    const description = this.state.description;
    const location = this.state.location;
    const date = this.state.date;
    const club_id = this.props.loggedInUser._id

    this.post.newPost(title, description, location, date,club_id)
      .then(response => {
        this.setState({
          title: title,
          description: description,
          location: location,
          date: date,
          club_id:club_id,
          error: false
        });

        this.props.getUser(response)
      })
      .catch(error => {
        this.setState({
          title: title,
          description: description,
          location: location,
          date: date,
          club_id:club_id,
          error: true
        });
      })
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  componentDidMount(){
    this.setState({ ...this.state, club_id:this.props.loggedInUser._id})
  }
  render() {
    console.log(this.props.loggedInUser._id)
    return (
      <div className="">
        <div>
          <img src="" alt="icono" />
        </div>
        <div>
          <h3 className="">Crear posdt</h3>
        </div>
        <form onSubmit={this.handleFormSubmit} >
          <div className="">
            <div>
              <fieldset>
                <input className="title" type="text" name="title" placeholder="Dale un nombre al partido" value={this.state.title} onChange={e => this.handleChange(e)} />
              </fieldset>
            </div>
            <div>
              <fieldset>
                <input type="text" name="description" className="" value={this.state.description} onChange={e => this.handleChange(e)} />
              </fieldset>
            </div>
            <div>
              <fieldset>
                <input type="date" name="date" className="" placeholder="Introduce tu contraseña" value={this.state.date} onChange={e => this.handleChange(e)} />
              </fieldset>
            </div>
            <div>
            </div>
            <div>
            </div>


            <div className="">
              <input className="" type="submit" value="Acceder" />
            </div>
          </div>
        </form>


        <h1>{this.state.error ? 'Error' : ''}</h1>
      </div>)
  }

}

export default Newmatch;