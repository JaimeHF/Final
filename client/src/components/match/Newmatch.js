import React from "react";
import Match from "../../services/Match"
import "./macth.scss"

class Newmatch extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      
      macthname: "",
      price: null,
      // location: "",
      date: "",
      time: "",
      type: "",
      userCreate_id:"",
      user_id:"",
      description:"",
      calc:0
    };
    this.match = new Match();
  }

  handleFormSubmit = (event) => {
    // debugger
    event.preventDefault();
    const macthname = this.state.macthname;
    const price = this.state.price;
    // const location = this.state.location;
    const date = this.state.date;
    const time = this.state.time;
    const type = this.state.type;
    const userCreate_id= this.props.loggedInUser._id
    const user_id = this.props.loggedInUser._id
    const description = this.state.description
    

    this.match.newMatch(macthname, price, date, time, type,userCreate_id,user_id, description)
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
          description: description,
          error: false
        });

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

  howMa=()=>{
    if(this.state.type === "Futbol Sala"){
        let sum =(this.state.price/10).toFixed(2);
        this.setState({calc:sum})
    }if(this.state.type === "Futbol 7"){
      let suma =(this.state.price/14).toFixed(2);
      this.setState({calc:suma})
    }if(this.state.type === "Futbol 11"){
      let su =(this.state.price/22).toFixed(2);
      this.setState({calc:su})
    }
  }


  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value },()=>{this.howMa()});
  }

  componentDidMount(){
    this.setState({ ...this.state, userCreate_id:this.props.loggedInUser._id,user_id:this.props.loggedInUser._id })
  }

  render() {
    console.log(this.state.price)
    console.log(this.state.price/10)
    
    return (
      <div className="newma">
      <div className="newmaleft">
      <p>Organiza un partido, es muy sencillo, sigue estos sencillos pasos:</p>
      <p>1) Dale un nombre al partido para que tus amigos puedan encontrarlo</p>
      <p>2) Escoge una fecha y una hora para jugar el partido</p>
      <p>3) Indica el deporte y pon el precio de la pista, ya nosotros te decimos cuanto es el precio unitario</p>
      <p>4) Escribe informacion extra sobre el partido</p>
      <p>5) Y para terminar solo tienes que darle al boton Crear</p>
      </div>
          <div className="newmaright">
        <form onSubmit={this.handleFormSubmit} >
            <div>
              <fieldset>
                <input className="newmacthname" type="text" name="macthname" placeholder="Dale un nombre al partido" value={this.state.macthname} onChange={e => this.handleChange(e)} />
              </fieldset>
            </div>
            <div className="horafecha">
              <fieldset>
                <input type="time" name="time" className="time" value={this.state.time} onChange={e => this.handleChange(e)} />
              </fieldset>
              <fieldset>
                <input type="date" name="date" className="datanew" placeholder="Introduce tu contraseña" value={this.state.date} onChange={e => this.handleChange(e)} />
              </fieldset>
            </div>
            <div className="dinero">
              <fieldset>
                <input type="number" name="price" className="datanew" placeholder="precio" value={this.state.price} onChange={e => this.handleChange(e)} />
              </fieldset>
              <select value={this.state.type} name="type" className="select" onChange={e => this.handleChange(e)}>
              <option ></option>
                <option value="Futbol Sala">Futbol Sala</option>
                <option value="Futbol 7">Futbol 7</option>
                <option value="Futbol 11">Futbol 11</option>
              </select>
            </div>
            <div className="precabe">
              <p>Precio por persona {this.state.calc} €</p>
            </div>
            <div className="newaba">
            <fieldset>
              <textarea type="text" name="description" id="" rows="6" cols="30" maxLength="300" className="textito" placeholder="Escribe aquí.." onChange={e => this.handleChange(e)}/>
               </fieldset>
            <div className="botsub">
              <input className="bosub" type="submit" value="Crear" />
            </div>
            </div>
        </form>
          </div>
      </div>)
  }

}

export default Newmatch;