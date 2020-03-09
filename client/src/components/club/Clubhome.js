import React from "react";
import { Link } from "react-router-dom";
import Navbarclub from "./navbar/Navbarclub";




class Clubhome extends React.Component {

    state={
        loggedInUser:null,
      }

      
    render(){
        return(
            <div className="homeuser">
            <div>
             <div className="per">
               <div className="perfil">
                 <div>
                   <img src={this.props.loggedInUser.clubData.imgPath} alt="foto perfil"/>
                 </div>
                 <div>
                   <h1>{this.props.loggedInUser.username}</h1>
                 </div>
               </div>
             </div>
             <div>
               <Link to="/newpost"  >
                 <p>Organiza un partido</p>
               </Link>
             </div>
             </div>
             <div>
             {/* <div>{this.state.chosenFlow === "post" &&
               <div>
                 {this.props.allPost.map(post => (
                 <Containpost key={post._idx}  id={post._id} title={post.title} name={post.club_id.username} img={post.club_id.clubData.imgPath} date={post.date} description={post.description}  > </Containpost>
                 ))}
               </div>}
             </div> */}
             </div>
     
           </div>
            )
    }
}

export default Clubhome;