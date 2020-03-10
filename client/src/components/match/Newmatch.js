import React from "react";
import moment from "moment";
import Match from "../../services/Match"
import { Redirect } from "react-router-dom";

class Newmatch extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      
      macthname: "",
      price: "",
      // location: "",
      date: "",
      time: "",
      type: "",
      userCreate_id:"",
      user_id:""
    };
    this.match = new Match();
  }

  handleFormSubmit = (event) => {
    debugger
    event.preventDefault();
    const macthname = this.state.macthname;
    const price = this.state.price;
    // const location = this.state.location;
    const date = this.state.date;
    const time = this.state.time;
    const type = this.state.type;
    const userCreate_id= this.props.loggedInUser._id
    const user_id = this.props.loggedInUser._id
    

    this.match.newMatch(macthname, price, date, time, type,userCreate_id,user_id)
      .then(response => {
        this.setState({
          macthname: macthname,
          price: price,
          // location: location,
          date: date,
          time: time,
          type: type.value,
          userCreate_id:userCreate_id,
          user_id:user_id,
          error: false
        });

      this.goBack()
      })
      .catch(error => {
        this.setState({
          macthname: macthname,
          price: price,
          // location: location,
          date: date,
          time: time,
          type: type,
          userCreate_id:userCreate_id,
          user_id:user_id,
          error: true
        });
      })
  }


  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  componentDidMount(){
    this.setState({ ...this.state, userCreate_id:this.props.loggedInUser._id,user_id:this.props.loggedInUser._id })
  }

  render() {

    console.log(this.props.loggedInUser._id)
    debugger
    return (
      <div className="">
        <div>
          <img src="" alt="icono" />
        </div>
        <div>
          <h3 className="">Acceaso para jugador</h3>
        </div>
        <form onSubmit={this.handleFormSubmit} >
          <div className="">
            <div>
              <fieldset>
                <input className="macthname" type="text" name="macthname" placeholder="Dale un nombre al partido" value={this.state.macthname} onChange={e => this.handleChange(e)} />
              </fieldset>
            </div>
            <div>
              <fieldset>
                <input type="time" name="time" className="" value={this.state.time} onChange={e => this.handleChange(e)} />
              </fieldset>
            </div>
            <div>
              <fieldset>
                <input type="date" name="date" className="" placeholder="Introduce tu contraseña" value={this.state.date} onChange={e => this.handleChange(e)} />
              </fieldset>
            </div>
            <div>
              <fieldset>
                <input type="number" name="price" className="data" placeholder="precio" value={this.state.number} onChange={e => this.handleChange(e)} />
              </fieldset>
            </div>
            <div>
              <select value={this.state.type} name="type" onChange={e => this.handleChange(e)}>
                <option value="Futbol Sala">Futbol Sala</option>
                <option value="Futbol 7">Futbol 7</option>
                <option value="Futbol 11">Futbol 11</option>
              </select>
            </div>


            <div className="">
              <input className="" type="submit" value="Acceder" />
            </div>
          </div>
        </form>
      </div>)
  }

}

export default Newmatch;