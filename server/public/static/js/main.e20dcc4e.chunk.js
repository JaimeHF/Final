(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{20:function(e,t,a){},32:function(e,t,a){},37:function(e,t,a){e.exports=a(69)},42:function(e,t,a){},43:function(e,t,a){},61:function(e,t,a){},67:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(34),c=a.n(l),s=(a(42),a(9)),o=a(1),i=a(3),u=a(5),m=a(4),d=a(6),h=(a(43),a(16)),p=a(8),E=a(13),v=a.n(E),g=function e(){var t=this;Object(o.a)(this,e),this.signup=function(e,a){return t.service.post("/signup",{username:e,password:a,role:"player"}).then((function(e){return e.data}))},this.login=function(e,a){return t.service.post("/login",{username:e,password:a}).then((function(e){return e.data}))},this.loggedin=function(){return t.service.get("/currentuser").then((function(e){return e.data}))},this.logout=function(){return t.service.get("/logout").then((function(e){return e.data}))},this.service=v.a.create({baseURL:"".concat("https://nugame.herokuapp.com/api","/auth"),withCredentials:!0})},f=(a(32),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault();var t=a.state.username,n=a.state.password;a.service.signup(t,n).then((function(e){a.setState({username:"",password:""}),a.props.getUser(e.user)})).catch((function(e){a.setState({username:t,password:n,error:!0})}))},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(p.a)({},n,r))},a.state={username:"",password:""},a.service=new g,a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"log"},r.a.createElement("div",null,r.a.createElement("img",{src:"https://res.cloudinary.com/dwwfzwx93/image/upload/v1583768117/illustration-player_x2_cqgfvq.png",alt:"icono"})),r.a.createElement("div",null,r.a.createElement("h3",{className:"acceso"},"Registro como jugador")),r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("div",{className:"datos"},r.a.createElement("div",null,r.a.createElement("fieldset",null,r.a.createElement("input",{className:"username",type:"text",name:"username",placeholder:"Introduce tu nombre de usuario",value:this.state.username,onChange:function(t){return e.handleChange(t)}}))),r.a.createElement("div",null,r.a.createElement("fieldset",null,r.a.createElement("input",{className:"username",type:"text",name:"email",placeholder:"Introduce tu correo electronico",value:this.state.username,onChange:function(t){return e.handleChange(t)}}))),r.a.createElement("div",null,r.a.createElement("fieldset",null,r.a.createElement("input",{type:"password",name:"password",className:"password",placeholder:"Introduce tu contrase\xf1a",value:this.state.password,onChange:function(t){return e.handleChange(t)}}))),r.a.createElement("div",{className:"botonlo"},r.a.createElement("input",{className:"bot",type:"submit",value:"Acceder"})))),r.a.createElement("h1",null,"borrar"))}}]),t}(n.Component)),b=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault();var t=a.state.username,n=a.state.password;a.service.login(t,n).then((function(e){a.setState({username:t,password:n,error:!1}),a.props.getUser(e)})).catch((function(e){a.setState({username:t,password:n,error:!0})}))},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(p.a)({},n,r))},a.state={username:"",password:""},a.service=new g,a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"log"},r.a.createElement("div",null,r.a.createElement("img",{src:"https://res.cloudinary.com/dwwfzwx93/image/upload/v1583768117/illustration-player_x2_cqgfvq.png",alt:"icono"})),r.a.createElement("div",null,r.a.createElement("h3",{className:"acceso"},"Acceaso para jugador")),r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("div",{className:"datos"},r.a.createElement("div",null,r.a.createElement("fieldset",null,r.a.createElement("input",{className:"username",type:"text",name:"username",placeholder:"Introduce tu nombre de usuario",value:this.state.username,onChange:function(t){return e.handleChange(t)}}))),r.a.createElement("div",null,r.a.createElement("fieldset",null,r.a.createElement("input",{type:"password",name:"password",className:"password",placeholder:"Introduce tu contrase\xf1a",value:this.state.password,onChange:function(t){return e.handleChange(t)}}))),r.a.createElement("div",{className:"botonlo"},r.a.createElement("input",{className:"bot",type:"submit",value:"Acceder"})))))}}]),t}(n.Component),w=a(2),j=(a(61),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).handleLogout=function(e){a.props.logout()},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return this.props.userInSession?r.a.createElement("nav",{className:"navbar"},r.a.createElement("div",null,r.a.createElement(w.b,{to:"/User/home"}," ",r.a.createElement("img",{src:"https://res.cloudinary.com/dwwfzwx93/image/upload/v1583766640/logo-color_x2_plcr4s.png",alt:""})," ")),r.a.createElement("div",null,r.a.createElement("h1",{onClick:this.handleLogout},"Cerrar sesion"))):r.a.createElement("div",null,r.a.createElement("nav",{className:"nav-style"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(w.b,{to:"/"},r.a.createElement("img",{src:"https://res.cloudinary.com/dwwfzwx93/image/upload/v1583766640/logo-color_x2_plcr4s.png",alt:""})," ")),r.a.createElement("li",null,r.a.createElement(w.b,{to:"/club"},"club")))))}}]),t}(n.Component)),O=(a(67),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={loggedInUser:null,allPost:[],chosenFlow:"login"},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"setFlow",value:function(e){this.setState(Object(s.a)({},this.state,{chosenFlow:e}))}},{key:"fetchPost",value:function(){var e=this;return this.post.getAllPost().then((function(t){e.setState({allPost:t})})).catch((function(t){e.setState({loggedInUser:!1})}))}},{key:"componentWillReceiveProps",value:function(e){this.setState(Object(s.a)({},this.state,{loggedInUser:e.loggedInUser}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{className:"login"},r.a.createElement("div",{className:"izq"},r.a.createElement("div",null,r.a.createElement(w.b,{to:"/"},r.a.createElement("img",{src:"https://res.cloudinary.com/dwwfzwx93/image/upload/v1583768097/logo-white_x2_rwsvdj.png",alt:"logotipo"}))),r.a.createElement("div",{className:"loco"},r.a.createElement("h1",null,"Locos por el deporte, \xe9ste es vuestro sitio. \xa1Bienvenidos!")),r.a.createElement("div",{className:"encuentra"},r.a.createElement("p",null,"Encuentra partidos, conecta con otros jugadores y mantente activo con tu deporte favorito.")),r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(w.b,{to:"/club"},"club")))),r.a.createElement("div",{className:"der"},r.a.createElement("div",{className:"user"},r.a.createElement("div",null,r.a.createElement("div",{className:"acces"},"login"===this.state.chosenFlow&&r.a.createElement("div",null,r.a.createElement(b,{getUser:this.props.getUser}),r.a.createElement("p",{onClick:function(){return e.setFlow("signup")}},"\xbfA\xfan no tienes cuenta? ",r.a.createElement("span",null," Reg\xedstrate")," "))),r.a.createElement("div",{className:"acces"},"signup"===this.state.chosenFlow&&r.a.createElement("div",null,r.a.createElement(f,{getUser:this.props.getUser}),r.a.createElement("p",{onClick:function(){return e.setFlow("login")}},"\xbfYa tienes cuenta? ",r.a.createElement("span",null,"Accede")," "))))))))}}]),t}(r.a.Component)),y=(a(20),function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"home"},r.a.createElement("div",{className:"left"},r.a.createElement("div",null,r.a.createElement("img",{src:"https://res.cloudinary.com/dwwfzwx93/image/upload/v1583766640/logo-color_x2_plcr4s.png",alt:"logotipo"})),r.a.createElement("div",{className:"loco"},r.a.createElement("h1",null,"Locos por el deporte, \xe9ste es vuestro sitio. \xa1Bienvenidos!")),r.a.createElement("div",{className:"encuentra"},r.a.createElement("p",null,"Encuentra partidos, conecta con otros jugadores y mantente activo con tu deporte favorito.")),r.a.createElement("div",null)),r.a.createElement("div",{className:"right"},r.a.createElement("div",null,r.a.createElement("div",{className:"escoge"},r.a.createElement("h1",null,"Escoge el perfil que mejor se adapta a ti."))),r.a.createElement("div",{className:"down"},r.a.createElement("div",{className:"jugador"},r.a.createElement("h5",null," JUGADOR "),r.a.createElement("p",{className:"siere"}," Si eres jugador y buscas partidos para unirte o quieres probar suerte en alg\xfan club o equipo \xe9ste es tu camino."),r.a.createElement(w.b,{to:"/user",className:"acced"},r.a.createElement("h1",{className:"accede",onClick:function(){return e.props.setFlow("jugador")}},"Accede"))),r.a.createElement("div",{className:"Club"},r.a.createElement("h5",null," CLUB "),r.a.createElement("p",{className:"sipe"},"Si perteneces a un equipo o club y est\xe1s en busca de nuevos jugadores accede o crea una cuenta."),r.a.createElement(w.b,{to:"/club",className:"acced"},r.a.createElement("h1",{className:"accede",onClick:function(){return e.props.setFlow("club")}}," Accede"))))))}}]),t}(r.a.Component)),C=function e(){var t=this;Object(o.a)(this,e),this.signup=function(e,a){return t.service.post("/signup",{username:e,password:a,role:"club"}).then((function(e){return e.data}))},this.login=function(e,a){return t.service.post("/login",{username:e,password:a}).then((function(e){return e.data}))},this.loggedin=function(){return t.service.get("/currentuser").then((function(e){return e.data}))},this.logout=function(){return t.service.get("/logout").then((function(e){return e.data}))},this.service=v.a.create({baseURL:"".concat("https://nugame.herokuapp.com/api","/auth"),withCredentials:!0})},N=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault();var t=a.state.username,n=a.state.password;a.service.signup(t,n).then((function(e){a.setState({username:"",password:""}),a.props.getUser(e.user)})).catch((function(e){a.setState({username:t,password:n,error:!0})}))},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(p.a)({},n,r))},a.state={usearname:"",password:""},a.service=new C,a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"log"},r.a.createElement("div",null,r.a.createElement("img",{src:"https://res.cloudinary.com/dwwfzwx93/image/upload/v1583768116/illustration-club_x2_qul4t7.png",alt:"icono"})),r.a.createElement("div",null,r.a.createElement("h3",{className:"acceso"},"Registro como club/equipo")),r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("div",{className:"datos"},r.a.createElement("div",null,r.a.createElement("fieldset",null,r.a.createElement("input",{className:"username",type:"text",name:"username",placeholder:"Introduce tu nombre de usuario",value:this.state.username,onChange:function(t){return e.handleChange(t)}}))),r.a.createElement("div",null,r.a.createElement("fieldset",null,r.a.createElement("input",{className:"username",type:"text",name:"email",placeholder:"Introduce tu correo electronico",value:this.state.username,onChange:function(t){return e.handleChange(t)}}))),r.a.createElement("div",null,r.a.createElement("fieldset",null,r.a.createElement("input",{type:"password",name:"password",className:"password",placeholder:"Introduce tu contrase\xf1a",value:this.state.password,onChange:function(t){return e.handleChange(t)}}))),r.a.createElement("div",{className:"botonlo"},r.a.createElement("input",{className:"bot",type:"submit",value:"Acceder"})))))}}]),t}(n.Component),U=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault();var t=a.state.username,n=a.state.password;a.service.login(t,n).then((function(e){a.setState({username:t,password:n,error:!1}),a.props.getUser(e)})).catch((function(e){a.setState({username:t,password:n,error:!0})}))},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(p.a)({},n,r))},a.state={username:"",password:""},a.service=new C,a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"log"},r.a.createElement("div",null,r.a.createElement("img",{src:"https://res.cloudinary.com/dwwfzwx93/image/upload/v1583768116/illustration-club_x2_qul4t7.png",alt:"icono"})),r.a.createElement("div",null,r.a.createElement("h3",{className:"acceso"},"Acceso como club/equipo")),r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("div",{className:"datos"},r.a.createElement("div",null,r.a.createElement("fieldset",null,r.a.createElement("input",{className:"username",type:"text",name:"username",placeholder:"Introduce tu nombre de usuario",value:this.state.username,onChange:function(t){return e.handleChange(t)}}))),r.a.createElement("div",null,r.a.createElement("fieldset",null,r.a.createElement("input",{type:"password",name:"password",className:"password",placeholder:"Introduce tu contrase\xf1a",value:this.state.password,onChange:function(t){return e.handleChange(t)}}))),r.a.createElement("div",{className:"botonlo"},r.a.createElement("input",{className:"bot",type:"submit",value:"Acceder"})))))}}]),t}(n.Component),k=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).handleLogout=function(e){a.props.logout()},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return this.props.userInSession?r.a.createElement("nav",{className:"navbar"},r.a.createElement("div",null,r.a.createElement(w.b,{to:"/User/home"}," ",r.a.createElement("img",{src:"https://res.cloudinary.com/dwwfzwx93/image/upload/v1583766640/logo-color_x2_plcr4s.png",alt:""})," ")),r.a.createElement("div",null,r.a.createElement("h1",{onClick:this.handleLogout},"Cerrar sesion"))):r.a.createElement("div",null,r.a.createElement("nav",{className:"nav-style"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(w.b,{to:"/"},r.a.createElement("img",{src:"https://res.cloudinary.com/dwwfzwx93/image/upload/v1583766640/logo-color_x2_plcr4s.png",alt:""}))),r.a.createElement("li",null,r.a.createElement(w.b,{to:"/user"},"User")))))}}]),t}(n.Component),S=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={loggedInUser:null,chosenFlow:"login"},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState(Object(s.a)({},this.state,{loggedInUser:e.loggedInUser,chosenFlow:e.chosenFlow}))}},{key:"setFlow",value:function(e){this.setState(Object(s.a)({},this.state,{chosenFlow:e}))}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{className:"login"},r.a.createElement("div",{className:"izq"},r.a.createElement("div",null,r.a.createElement(w.b,{to:"/"},r.a.createElement("img",{src:"https://res.cloudinary.com/dwwfzwx93/image/upload/v1583768097/logo-white_x2_rwsvdj.png",alt:"logotipo"}))),r.a.createElement("div",{className:"loco"},r.a.createElement("h1",null,"Locos por el deporte, \xe9ste es vuestro sitio. \xa1Bienvenidos!")),r.a.createElement("div",{className:"encuentra"},r.a.createElement("p",null,"Encuentra partidos, conecta con otros jugadores y mantente activo con tu deporte favorito.")),r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(w.b,{to:"/user"},"user")))),r.a.createElement("div",{className:"der"},r.a.createElement("div",{className:"user"},r.a.createElement("div",null,r.a.createElement("div",{className:"acces"},"login"===this.state.chosenFlow&&r.a.createElement("div",null,r.a.createElement(U,{getUser:this.props.getUser}),r.a.createElement("p",{onClick:function(){return e.setFlow("signup")}},"\xbfA\xfan no tienes cuenta? ",r.a.createElement("span",null," Reg\xedstrate")," "))),r.a.createElement("div",{className:"acces"},"signup"===this.state.chosenFlow&&r.a.createElement("div",null,r.a.createElement(N,{getUser:this.props.getUser}),r.a.createElement("p",{onClick:function(){return e.setFlow("login")}},"\xbfYa tienes cuenta? ",r.a.createElement("span",null,"Accede")," "))))))))}}]),t}(r.a.Component),_=a(11),I=a.n(_),P=function e(){var t=this;Object(o.a)(this,e),this.getAllPost=function(){return t.service.get("/").then((function(e){return e.data}))},this.getPostDetails=function(e){return t.service.get("/".concat(e)).then((function(e){return e.data}))},this.newPost=function(e,a,n,r,l){return t.service.post("/newpost",{title:e,description:a,location:n,date:r,club_id:l}).then((function(e){return e.data}))},this.service=v.a.create({baseURL:"".concat("https://nugame.herokuapp.com/api","/post"),withCredentials:!0})},F=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).componentDidMount=function(){a.postDetail(a.props.match.params.id)},a.state={title:null,description:null,date:null,club_id:null},a.post=new P,a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"postDetail",value:function(e){var t=this;return this.post.getPostDetails(e).then((function(e){t.setState({title:e.title,description:e.description,date:e.date,club_id:e.club_id})}))}},{key:"render",value:function(){var e=this.state,t=e.title,a=e.date,n=e.description,l=e.club_id;return r.a.createElement("div",{className:"Postid"},r.a.createElement(w.b,{to:"/User/home"},"back"),r.a.createElement("h1",null,"Postid"),r.a.createElement("img",{src:"",alt:"foto club"}),r.a.createElement(w.b,{to:"/club/".concat(l)},r.a.createElement("div",null,r.a.createElement("h1",null,t))),r.a.createElement("div",null,r.a.createElement("p",null)),r.a.createElement("div",null,r.a.createElement("h1",null,I()(a).format("DD/MM/YYYY")),r.a.createElement("p",null,n," ")))}}]),t}(r.a.Component),D=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={postData:null,postId:null},a.post=new P,a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return console.log("yoooo"),console.log(this.props.img),r.a.createElement("div",null,r.a.createElement(w.b,{to:"/post/".concat(this.props.id)},r.a.createElement("div",{className:"container"},r.a.createElement("div",null,r.a.createElement("p",null,I()(this.props.date).format("DD/MM/YYYY"))),r.a.createElement("div",null,r.a.createElement("h3",null,this.props.title)),r.a.createElement("div",null,r.a.createElement("img",{src:this.props.img,alt:""})),r.a.createElement("div",null,r.a.createElement("p",null,this.props.name)))))}}]),t}(r.a.Component),x=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"count",value:function(){if(" Futbol Sala"===this.props.type)this.props.user.lenght;else if("Futbol 11"===this.props.type)this.props.user.lenght;else if("Futbol 7"===this.props.type)this.props.user.lenght}},{key:"render",value:function(){return console.log(this.props.user),r.a.createElement("div",{className:"container"},r.a.createElement(w.b,{to:"/match/".concat(this.props.id)},r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("p",null)),r.a.createElement("h1",null,this.props.name)),r.a.createElement("div",null,r.a.createElement("h2",null,this.props.location),r.a.createElement("h1",null,I()(this.props.date).format("DD/MM/YYYY")),r.a.createElement("p",null,this.props.type," "),r.a.createElement("div",null,r.a.createElement("p",{count:this.count()}," ")),r.a.createElement("p",null,this.props.price))))}}]),t}(r.a.Component),A=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={chosenFlow:"post",post:null},a.post=new P,a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"setFlow",value:function(e){this.setState(Object(s.a)({},this.state,{chosenFlow:e}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"homeuser"},r.a.createElement("div",null,r.a.createElement("div",{className:"per"},r.a.createElement("div",{className:"perfil"},r.a.createElement("div",null,r.a.createElement("img",{src:this.props.loggedInUser.playerData.imgPath,alt:"foto perfil"})),r.a.createElement("div",null,r.a.createElement("h1",null,this.props.loggedInUser.username)))),r.a.createElement("div",null,r.a.createElement(w.b,{to:"/newmatch"},r.a.createElement("p",null,"Organiza un partido")))),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return e.setFlow("post")}},"post futbol"),r.a.createElement("button",{onClick:function(){return e.setFlow("match")}},"buscar partidos de futbol"),r.a.createElement("div",null,"post"===this.state.chosenFlow&&r.a.createElement("div",null,this.props.allPost.map((function(e){return r.a.createElement(D,{key:e._idx,id:e._id,title:e.title,name:e.club_id.username,img:e.club_id.clubData.imgPath,date:e.date,description:e.description}," ")})))),r.a.createElement("div",null,"match"===this.state.chosenFlow&&r.a.createElement("div",null,this.props.allMatch.map((function(e){return r.a.createElement(x,{key:e._idx,id:e._id,name:e.macthname,location:e.location,price:e.price,date:e.date,type:e.TYPE,user:e.user_id})}))))))}}]),t}(r.a.Component),M=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={loggedInUser:null},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"homeuser"},r.a.createElement("div",null,r.a.createElement("div",{className:"per"},r.a.createElement("div",{className:"perfil"},r.a.createElement("div",null,r.a.createElement("img",{src:this.props.loggedInUser.clubData.imgPath,alt:"foto perfil"})),r.a.createElement("div",null,r.a.createElement("h1",null,this.props.loggedInUser.username)))),r.a.createElement("div",null,r.a.createElement(w.b,{to:"/newpost"},r.a.createElement("p",null,"Organiza un partido")))),r.a.createElement("div",null))}}]),t}(r.a.Component),Y=function e(){var t=this;Object(o.a)(this,e),this.getAllMatch=function(){return t.match.get("/").then((function(e){return e.data}))},this.getMatchDetails=function(e){return t.match.get("/".concat(e)).then((function(e){return e.data}))},this.newMatch=function(e,a,n,r,l,c,s){return t.match.post("/newmacth",{macthname:e,price:a,date:n,time:r,type:l,userCreate_id:c,user_id:s}).then((function(e){return e.data}))},this.addOne=function(e){return t.match.put("/editmacth/".concat(e),{id:e}).then((function(e){return console.log(e),e.data}))},this.match=v.a.create({baseURL:"".concat("https://nugame.herokuapp.com/api","/match"),withCredentials:!0})},z=function e(){var t=this;Object(o.a)(this,e),this.getAllPlayer=function(){return t.service.get("/").then((function(e){return e.data}))},this.getPlayerDetails=function(e){return t.service.get("/".concat(e)).then((function(e){return console.log("entro"),e.data}))},this.service=v.a.create({baseURL:"".concat("https://nugame.herokuapp.com/api","/user"),withCredentials:!0})},q=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).componentDidMount=function(){a.playerDetails(a.props.user)},a.state={username:null,imgPath:null},a.user=new z,a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"playerDetails",value:function(e){var t=this;return this.user.getPlayerDetails(e).then((function(e){console.log(e.username),t.setState({username:e.username,imgPath:e.playerData.imgPath})}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(w.b,{to:"/user/".concat(this.props.user)},r.a.createElement("div",{className:""},r.a.createElement("div",null,r.a.createElement("h3",null,this.state.username)),r.a.createElement("div",null,r.a.createElement("img",{src:this.state.imgPath,alt:""})))))}}]),t}(r.a.Component),L=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).componentDidMount=function(){a.matchDetail(a.props.match.params.id)},a.state={macthname:null,price:null,date:null,time:null,userCreated_id:"",TYPE:null,user_id:[],location:null,username:null},a.match=new Y,a.user=new z,a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"matchDetail",value:function(e){var t=this;return this.match.getMatchDetails(e).then((function(e){t.setState({macthname:e.macthname,price:e.price,date:e.date,time:e.time,userCreated_id:e.userCreated_id,TYPE:e.TYPE,user_id:e.user_id,location:e.location})}))}},{key:"render",value:function(){var e=this.state,t=e.macthname,a=e.price,n=e.date,l=e.time,c=e.userCreated_id,s=e.user_id,o=e.location,i=e.TYPE;e.username,e.imgPath;return console.log(s),r.a.createElement("div",{className:"Postid"},r.a.createElement("h1",null,"Postid"),r.a.createElement(w.b,{to:"/User/home"},"back"),r.a.createElement("img",{src:this.props.img,alt:"foto club"}),r.a.createElement("div",null,r.a.createElement("h1",null,t)),r.a.createElement("div",null,r.a.createElement("h1",null,a)),r.a.createElement("div",null,r.a.createElement("h1",null,l)),r.a.createElement("div",null,r.a.createElement("h1",null,c)),r.a.createElement("div",null,this.state.user_id.map((function(e){return r.a.createElement(q,{user:e}," ")})),r.a.createElement("div",null,r.a.createElement("h1",null,o)),r.a.createElement("div",null,r.a.createElement("h1",null,i))),r.a.createElement("div",null,r.a.createElement("h1",null,I()(n).format("DD/MM/YYYY")),r.a.createElement("p",null,this.props.description," ")),"match"===this.props.loggedInUser._id&&r.a.createElement("button",{type:"submit",onSubmit:this.addOne},"Apuntarse"))}}]),t}(r.a.Component),R=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).componentDidMount=function(){a.postDetail(a.props.match.params.id)},a.state={username:null},a.player=new z,a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"postDetail",value:function(e){var t=this;return this.player.getPlayerDetails(e).then((function(e){t.setState({username:e.username})}))}},{key:"render",value:function(){var e=this.state,t=e.username;e.date,e.description,e.club_id;return r.a.createElement("div",{className:"Postid"},r.a.createElement(w.b,{to:"/User/home"},"back"),r.a.createElement("h1",null,"Userid"),r.a.createElement("img",{src:"",alt:"foto club"}),r.a.createElement("div",null,r.a.createElement("h1",null,t)))}}]),t}(r.a.Component),B=function e(){var t=this;Object(o.a)(this,e),this.getAllClub=function(){return t.service.get("/").then((function(e){return e.data}))},this.getClubDetails=function(e){return t.service.get("/".concat(e)).then((function(t){return console.log(e),t.data}))},this.service=v.a.create({baseURL:"".concat("https://nugame.herokuapp.com/api","/post"),withCredentials:!0})},T=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).componentDidMount=function(){a.clubDetail(a.props.match.params.id),console.log(a.props.match.params.id)},a.state={username:null},a.club=new B,a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"clubDetail",value:function(e){var t=this;return this.club.getClubDetails(e).then((function(e){t.setState({username:e})}))}},{key:"render",value:function(){var e=this.state,t=e.username;e.date,e.description,e.club_id;return r.a.createElement("div",{className:"Postid"},r.a.createElement(w.b,{to:"/User/home"},"back"),r.a.createElement("h1",null,"Clubdetail"),r.a.createElement("img",{src:"",alt:"foto club"}),r.a.createElement("div",null,r.a.createElement("h1",null,t)))}}]),t}(r.a.Component),W=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault();var t=a.state.title,n=a.state.description,r=a.state.location,l=a.state.date,c=a.props.loggedInUser._id;a.post.newPost(t,n,r,l,c).then((function(e){a.setState({title:t,description:n,location:r,date:l,club_id:c,error:!1}),a.props.getUser(e)})).catch((function(e){a.setState({title:t,description:n,location:r,date:l,club_id:c,error:!0})}))},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(p.a)({},n,r))},a.state={title:"",description:"",location:[],date:"",club_id:""},a.post=new P,a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.setState(Object(s.a)({},this.state,{club_id:this.props.loggedInUser._id}))}},{key:"render",value:function(){var e=this;return console.log(this.props.loggedInUser._id),r.a.createElement("div",{className:""},r.a.createElement("div",null,r.a.createElement("img",{src:"",alt:"icono"})),r.a.createElement("div",null,r.a.createElement("h3",{className:""},"Crear posdt")),r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("div",{className:""},r.a.createElement("div",null,r.a.createElement("fieldset",null,r.a.createElement("input",{className:"title",type:"text",name:"title",placeholder:"Dale un nombre al partido",value:this.state.title,onChange:function(t){return e.handleChange(t)}}))),r.a.createElement("div",null,r.a.createElement("fieldset",null,r.a.createElement("input",{type:"text",name:"description",className:"",value:this.state.description,onChange:function(t){return e.handleChange(t)}}))),r.a.createElement("div",null,r.a.createElement("fieldset",null,r.a.createElement("input",{type:"date",name:"date",className:"",placeholder:"Introduce tu contrase\xf1a",value:this.state.date,onChange:function(t){return e.handleChange(t)}}))),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",{className:""},r.a.createElement("input",{className:"",type:"submit",value:"Acceder"})))),r.a.createElement("h1",null,this.state.error?"Error":""))}}]),t}(r.a.Component),J=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault();var t=a.state.macthname,n=a.state.price,r=a.state.date,l=a.state.time,c=a.state.type,s=a.props.loggedInUser._id,o=a.props.loggedInUser._id;a.match.newMatch(t,n,r,l,c,s,o).then((function(e){a.setState({macthname:t,price:n,date:r,time:l,type:c.value,userCreate_id:s,user_id:o,error:!1}),a.goBack()})).catch((function(e){a.setState({macthname:t,price:n,date:r,time:l,type:c,userCreate_id:s,user_id:o,error:!0})}))},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(p.a)({},n,r))},a.state={macthname:"",price:"",date:"",time:"",type:"",userCreate_id:"",user_id:""},a.match=new Y,a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.setState(Object(s.a)({},this.state,{userCreate_id:this.props.loggedInUser._id,user_id:this.props.loggedInUser._id}))}},{key:"render",value:function(){var e=this;return console.log(this.props.loggedInUser._id),r.a.createElement("div",{className:""},r.a.createElement("div",null,r.a.createElement("img",{src:"",alt:"icono"})),r.a.createElement("div",null,r.a.createElement("h3",{className:""},"Acceaso para jugador")),r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("div",{className:""},r.a.createElement("div",null,r.a.createElement("fieldset",null,r.a.createElement("input",{className:"macthname",type:"text",name:"macthname",placeholder:"Dale un nombre al partido",value:this.state.macthname,onChange:function(t){return e.handleChange(t)}}))),r.a.createElement("div",null,r.a.createElement("fieldset",null,r.a.createElement("input",{type:"time",name:"time",className:"",value:this.state.time,onChange:function(t){return e.handleChange(t)}}))),r.a.createElement("div",null,r.a.createElement("fieldset",null,r.a.createElement("input",{type:"date",name:"date",className:"",placeholder:"Introduce tu contrase\xf1a",value:this.state.date,onChange:function(t){return e.handleChange(t)}}))),r.a.createElement("div",null,r.a.createElement("fieldset",null,r.a.createElement("input",{type:"number",name:"price",className:"data",placeholder:"precio",value:this.state.number,onChange:function(t){return e.handleChange(t)}}))),r.a.createElement("div",null,r.a.createElement("select",{value:this.state.type,name:"type",onChange:function(t){return e.handleChange(t)}},r.a.createElement("option",{value:"Futbol Sala"},"Futbol Sala"),r.a.createElement("option",{value:"Futbol 7"},"Futbol 7"),r.a.createElement("option",{value:"Futbol 11"},"Futbol 11"))),r.a.createElement("div",{className:""},r.a.createElement("input",{className:"",type:"submit",value:"Acceder"})))))}}]),t}(r.a.Component),G=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).getUser=function(e){a.setState({loggedInUser:e})},a.logout=function(){a.service.logout().then((function(){a.setState({loggedInUser:null})}))},a.state={loggedInUser:null,chosenFlow:null,allPost:[],allMatch:[],user:null,post:null},a.service=new g,a.serviceClub=new C,a.post=new P,a.match=new Y,a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"fetchUser",value:function(){var e=this;return this.service.loggedin().then((function(t){e.setState({loggedInUser:t})})).catch((function(t){e.setState({loggedInUser:!1})}))}},{key:"fetchPost",value:function(){var e=this;return this.post.getAllPost().then((function(t){e.setState({allPost:t})}))}},{key:"fetchMatch",value:function(){var e=this;return this.match.getAllMatch().then((function(t){e.setState({allMatch:t})}))}},{key:"componentDidMount",value:function(){this.fetchUser(),this.fetchPost(),this.fetchMatch()}},{key:"postDetail",value:function(){var e=this;return this.post.getPostDetails().then((function(t){e.setState({post:t})}))}},{key:"setFlow",value:function(e){this.setState(Object(s.a)({},this.state,{chosenFlow:e}))}},{key:"render",value:function(){var e=this;return this.state.loggedInUser?"player"===this.state.loggedInUser.role?r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(j,{userInSession:this.state.loggedInUser,logout:this.logout}),r.a.createElement(h.a,{to:"/User/home",loggedInUser:this.state.loggedInUser}),r.a.createElement(h.d,null,r.a.createElement(h.b,{exact:!0,path:"/User/home",render:function(){return r.a.createElement(A,{allPost:e.state.allPost,allMatch:e.state.allMatch,postDetail:function(t){return e.postDetail(t)},loggedInUser:e.state.loggedInUser})}}),r.a.createElement(h.b,{exact:!0,path:"/post/:id",render:function(t){return r.a.createElement(F,Object.assign({Post:e.state.Post,fetchPost:e.fetchPost},t))}}),r.a.createElement(h.b,{exact:!0,path:"/match/:id",render:function(t){return r.a.createElement(L,Object.assign({match:e.state.Match,fetchPost:e.fetchPost,loggedInUser:e.state.loggedInUser},t))}}),r.a.createElement(h.b,{exact:!0,path:"/user/:id",render:function(t){return r.a.createElement(R,Object.assign({user:e.state.User,fetchPost:e.fetchPost},t))}}),r.a.createElement(h.b,{exact:!0,path:"/club/:id",render:function(t){return r.a.createElement(T,Object.assign({user:e.state.User,fetchPost:e.fetchPost},t))}}),r.a.createElement(h.b,{exact:!0,path:"/newmatch",render:function(t){return r.a.createElement(J,Object.assign({Post:e.state.Post,fetchPost:e.fetchPost,loggedInUser:e.state.loggedInUser},t))}})))):"club"===this.state.loggedInUser.role?r.a.createElement("div",{className:"App"},r.a.createElement(k,{logout:this.logout,userInSession:this.state.loggedInUser}),r.a.createElement(h.a,{to:"/Club/home",userInSession:this.state.loggedInUser,logout:this.logout}),r.a.createElement(h.d,null,r.a.createElement(h.b,{exact:!0,path:"/Club/home",render:function(){return r.a.createElement(M,{loggedInUser:e.state.loggedInUser})}}),r.a.createElement(h.b,{exact:!0,path:"/newpost",render:function(t){return r.a.createElement(W,Object.assign({Post:e.state.Post,fetchPost:e.fetchPost,loggedInUser:e.state.loggedInUser},t))}})),r.a.createElement("header",{className:"App-header"})):void 0:r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(h.a,{to:"/"}),r.a.createElement(h.d,null,r.a.createElement(h.b,{exact:!0,path:"/",render:function(){return r.a.createElement(y,{setFlow:function(t){return e.setFlow(t)}})}}),r.a.createElement(h.b,{exact:!0,path:"/club",render:function(){return r.a.createElement(S,{chosenFlow:e.state.chosenFlow,getUser:e.getUser})}}),r.a.createElement(h.b,{exact:!0,path:"/user",render:function(){return r.a.createElement(O,{chosenFlow:e.state.chosenFlow,getUser:e.getUser})}}),r.a.createElement(h.b,{exact:!0,path:"/signup",render:function(){return r.a.createElement(f,{getUser:e.getUser})}}),r.a.createElement(h.b,{exact:!0,path:"/login",render:function(){return r.a.createElement(b,{getUser:e.getUser})}}),r.a.createElement(h.b,{exact:!0,path:"/Clubsignup",render:function(){return r.a.createElement(N,{getUser:e.getUser})}}),r.a.createElement(h.b,{exact:!0,path:"/Clublogin",render:function(){return r.a.createElement(U,{getUser:e.getUser})}}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(w.a,null,r.a.createElement(G,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[37,1,2]]]);
//# sourceMappingURL=main.e20dcc4e.chunk.js.map