import React from "react";
import moment from "moment";
import Match from "../../services/Match"

class Newmatch extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      
      macthname: "",
      price: "",
      location: "",
      date: "",
      time: "",
      type: "",
    };
    this.match = new Match();
  }

  handleFormSubmit = (event) => {
    debugger
    event.preventDefault();
    const macthname = this.state.macthname;
    const price = this.state.price;
    const location = this.state.location;
    const date = this.state.date;
    const time = this.state.time;
    const type = this.state.type;

    this.match.newMatch(macthname, price, location, date, time, type)
      .then(response => {
        this.setState({
          macthname: macthname,
          price: price,
          location: location,
          date: date,
          time: time,
          type: type,
          error: false
        });

        this.props.getUser(response)
      })
      .catch(error => {
        this.setState({
          macthname: macthname,
          price: price,
          location: location,
          date: date,
          time: time,
          type: type,
          error: true
        });
      })
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
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
              <select value={this.state.type}>
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


        <h1>{this.state.error ? 'Error' : ''}</h1>
      </div>)
  }

}

export default Newmatch;