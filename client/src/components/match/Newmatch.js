import React from "react";
import moment from "moment";
import Match from "../../services/Match"
class Newmatch extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            macthname: '',
         price: '' ,
        location:"",
        date:"",
        time:"",
        type:"",
    };
        this.service = new Match();
      }
    
      handleFormSubmit = (event) => {
        debugger
        event.preventDefault();
        const macthname = this.state.macthname;
        const price = this.state.price;
        const location = this.state.password;
        const date = this.state.date;
        const time = this.state.time;
        const type = this.state.type;
    
        this.service.newMatch(macthname, price,location,date,time, type)
          .then(response => {
            this.setState({
              macthname: macthname,
              price: price,
              location: location,
              date : date,
              time:time,
              type:type,
              error: false
            });
    
            this.props.getUser(response)
          })
          .catch(error => {
            this.setState({
                macthname: macthname,
                price: price,
                location: location,
                date : date,
                time:time,
                type:type,
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
          <div className="log">
            <div>
            <img src="" alt="icono"/>
            </div>
            <div>
              <h3 className="acceso">Acceaso para jugador</h3>
            </div>
            <form onSubmit={this.handleFormSubmit} >
              <div className="datos">
              <div>
              <fieldset>
                {/* <label>Username:</label> */}
                <input className="username" type="text" name="macthname" placeholder="Introduce tu nombre de usuario" value={this.state.username} onChange={e => this.handleChange(e)} />
              </fieldset>
              </div>
            <div>
              <fieldset>
                {/* <label>Password:</label> */}
                <input type="password" name="password" className="password" placeholder="Introduce tu contraseña" value={this.state.password} onChange={e => this.handleChange(e)} />
              </fieldset>
              </div>
            <div className="botonlo">
              <input className="bot" type="submit" value="Acceder" />
              </div>
              </div>
            </form>
    
    
            <h1>{this.state.error ? 'Error' : ''}</h1>
          </div>)
      }
    
}

export default Newmatch;