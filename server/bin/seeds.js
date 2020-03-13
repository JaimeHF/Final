require('dotenv').config({ path: '/Users/jhf/Desktop/ironhack/Final/server/.env' });

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("../models/User");
const Post = require("../models/Post");
const Match = require("../models/Match")
const bcryptSalt = 10;


mongoose
  .connect(`${process.env.DBURL}`, {
    useNewUrlParser: true
  })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

let clubs = [{
    username: "ALICATES FS",
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
    role: "club",
    clubData: {
      imgPath: `https://res.cloudinary.com/dwwfzwx93/image/upload/v1583766638/alicates_jmlhbo.png`,
      description: "Wooolaaa!! Somos un equipo formado por un grupo de amigos que jugamos la liga local de tres cantos, estamos en la segunda categoria y nuestras intenciones son de ascenso. No solo quedamos para jugar al futbol, despues de cada partido toca un poco de cerveza con el equipo, no todo va a ser cansarse corriendo!!",
    }
  },
  {
    username: "COMARCA FS",
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
    role: "club",
    clubData: {
      imgPath: `https://res.cloudinary.com/dwwfzwx93/image/upload/v1583766640/comarca_ucdii1.png`,
      description: "Wooolaaa!! Somos un equipo formado por un grupo de amigos que jugamos la liga local de sevilla, estamos en la segunda categoria y nuestras intenciones son las de jugar y pasarlo bien, nos interesa mas juntarnos que el propio futbol. No solo quedamos para jugar al futbol, despues de cada partido toca un poco de cerveza con el equipo, no todo va a ser cansarse corriendo!!",
    }
  },
  {
    username: "C.D. BETIS SAN ISIDRO",
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
    role: "club",
    clubData: {
      imgPath: `https://res.cloudinary.com/dwwfzwx93/image/upload/v1583766638/Betis-San-Isidro-escudo_tgy9er.jpg`,
      description: "Somos un grupo de personas a las que nos ha unido nuestra afición por el deporte, especialmente el fútbo.Nuestra filosofía de equipo está basada en el compromiso, hacer las cosas bien, sin prisas y apoyándonos los unos en los otros y que todos puedan participar en el desarrollo diario de todos nuestros equipos. Ésta es la única manera en la que entendemos este proyecto.Y todo esto siempre acompañado de buen humor, de diversión, de disciplina, de trabajo, de alegrías y de penas, pero sobre todo de ilusión.Todo esto lo llevamos a la práctica tanto en los días de entrenamiento como en los fines de semana de partido; tanto en el campo de juego como fuera de él.",
    }
  },
  {
    username: "MACABI DE LEVANTAR F7",
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
    role: "club",
    clubData: {
      imgPath: `https://res.cloudinary.com/dwwfzwx93/image/upload/v1583766640/macabi_a4yzfj.jpg`,
      description: "Somos un grupo de personas a las que nos ha unido nuestra afición por el deporte, especialmente el fútbo.Nuestra filosofía de equipo está basada en el compromiso, hacer las cosas bien, sin prisas y apoyándonos los unos en los otros y que todos puedan participar en el desarrollo diario de todos nuestros equipos. Ésta es la única manera en la que entendemos este proyecto.Y todo esto siempre acompañado de buen humor, de diversión, de disciplina, de trabajo, de alegrías y de penas, pero sobre todo de ilusión.Todo esto lo llevamos a la práctica tanto en los días de entrenamiento como en los fines de semana de partido; tanto en el campo de juego como fuera de él.",
    }
  },
  {
    username: "BORUSIA DE DONUT F7",
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
  role: "club",
  clubData: {
    imgPath: `https://res.cloudinary.com/dwwfzwx93/image/upload/v1583766640/donuts_rh7yop.jpg`,
    description: "Somos un grupo de personas a las que nos ha unido nuestra afición por el deporte, especialmente el fútbo.Nuestra filosofía de equipo está basada en el compromiso, hacer las cosas bien, sin prisas y apoyándonos los unos en los otros y que todos puedan participar en el desarrollo diario de todos nuestros equipos. Ésta es la única manera en la que entendemos este proyecto.Y todo esto siempre acompañado de buen humor, de diversión, de disciplina, de trabajo, de alegrías y de penas, pero sobre todo de ilusión.Todo esto lo llevamos a la práctica tanto en los días de entrenamiento como en los fines de semana de partido; tanto en el campo de juego como fuera de él.",
  }
  },
  {
    username: "A.D. GIGANTES",
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
  role: "club",
  clubData:{
    imgPath: `https://res.cloudinary.com/dwwfzwx93/image/upload/v1583766640/GIGANTES_xbxei2.jpg`,
    description: "Somos un grupo de personas a las que nos ha unido nuestra afición por el deporte, especialmente el fútbo.Nuestra filosofía de equipo está basada en el compromiso, hacer las cosas bien, sin prisas y apoyándonos los unos en los otros y que todos puedan participar en el desarrollo diario de todos nuestros equipos. Ésta es la única manera en la que entendemos este proyecto.Y todo esto siempre acompañado de buen humor, de diversión, de disciplina, de trabajo, de alegrías y de penas, pero sobre todo de ilusión.Todo esto lo llevamos a la práctica tanto en los días de entrenamiento como en los fines de semana de partido; tanto en el campo de juego como fuera de él.",
  }},
  {
    username: "RACING VILLAVERDE C.F.",
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
  role: "club",
  clubData:{
    imgPath: `https://res.cloudinary.com/dwwfzwx93/image/upload/v1583766641/Racing_Villaverde_czmqqi.jpg`,
    description: "Somos un grupo de personas a las que nos ha unido nuestra afición por el deporte, especialmente el fútbo.Nuestra filosofía de equipo está basada en el compromiso, hacer las cosas bien, sin prisas y apoyándonos los unos en los otros y que todos puedan participar en el desarrollo diario de todos nuestros equipos. Ésta es la única manera en la que entendemos este proyecto.Y todo esto siempre acompañado de buen humor, de diversión, de disciplina, de trabajo, de alegrías y de penas, pero sobre todo de ilusión.Todo esto lo llevamos a la práctica tanto en los días de entrenamiento como en los fines de semana de partido; tanto en el campo de juego como fuera de él.",
  }},
  {
    username: "CELTIC CASTILLA C.F.",
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
  role: "club",
  clubData:{
    imgPath: `https://res.cloudinary.com/dwwfzwx93/image/upload/v1583766638/CELTIC_CASTILLA_iucbas.jpg`,
    description: "Somos un grupo de personas a las que nos ha unido nuestra afición por el deporte, especialmente el fútbo.Nuestra filosofía de equipo está basada en el compromiso, hacer las cosas bien, sin prisas y apoyándonos los unos en los otros y que todos puedan participar en el desarrollo diario de todos nuestros equipos. Ésta es la única manera en la que entendemos este proyecto.Y todo esto siempre acompañado de buen humor, de diversión, de disciplina, de trabajo, de alegrías y de penas, pero sobre todo de ilusión.Todo esto lo llevamos a la práctica tanto en los días de entrenamiento como en los fines de semana de partido; tanto en el campo de juego como fuera de él.",
   } },
  {
    username: "C.D. ALONSO CANO",
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
  role: "club",
  clubData:{
    imgPath: `https://res.cloudinary.com/dwwfzwx93/image/upload/v1583766638/ALONSO_memxdr.jpg`,
    description: "Somos un grupo de personas a las que nos ha unido nuestra afición por el deporte, especialmente el fútbo.Nuestra filosofía de equipo está basada en el compromiso, hacer las cosas bien, sin prisas y apoyándonos los unos en los otros y que todos puedan participar en el desarrollo diario de todos nuestros equipos. Ésta es la única manera en la que entendemos este proyecto.Y todo esto siempre acompañado de buen humor, de diversión, de disciplina, de trabajo, de alegrías y de penas, pero sobre todo de ilusión.Todo esto lo llevamos a la práctica tanto en los días de entrenamiento como en los fines de semana de partido; tanto en el campo de juego como fuera de él.",
 } },
  {
    username: "ASTON BIRRA FS",
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
  role: "club",
  clubData:{
    imgPath: `https://res.cloudinary.com/dwwfzwx93/image/upload/v1583766638/astonbirra_olvkrp.gif`,
    description: "Somos un grupo de personas a las que nos ha unido nuestra afición por el deporte, especialmente el fútbo.Nuestra filosofía de equipo está basada en el compromiso, hacer las cosas bien, sin prisas y apoyándonos los unos en los otros y que todos puedan participar en el desarrollo diario de todos nuestros equipos. Ésta es la única manera en la que entendemos este proyecto.Y todo esto siempre acompañado de buen humor, de diversión, de disciplina, de trabajo, de alegrías y de penas, pero sobre todo de ilusión.Todo esto lo llevamos a la práctica tanto en los días de entrenamiento como en los fines de semana de partido; tanto en el campo de juego como fuera de él.",
  }},
]

let players = [{
    username: "PACO HUERTO",
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
    role: "player",
    playerData: {
      imgPath: `https://res.cloudinary.com/dwwfzwx93/image/upload/v1583766641/paco_huerto_grlc7t.jpg`,
      position: [`Defensa`, `Lateral`],
        location:"Madrid",
  year:22,
  match: 22,
  contact:52,
    }
  },
  {
    username: "MACCO",
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
    role: "player",
    playerData: {
      imgPath: `https://res.cloudinary.com/dwwfzwx93/image/upload/v1583766641/macco_dgbbk3.jpg`,
      position: [`Lateral`, `Extremo`],
        location:"Vicalvaro",
  year:23,
  match: 23,
  contact:25,
    }
  },
  {    username: "CASTOLO",
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
    role: "player",
    playerData: {
    imgPath: `https://res.cloudinary.com/dwwfzwx93/image/upload/v1583766638/castolo_gkj37k.jpg`,
    position:`Delantero`,
      location:"Parla",
  year:24,
  match: 21,
  contact:23,
  }},
  {    username: "JULIEN FAUBERT",
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
    role: "player",
    playerData: {
    imgPath: `https://res.cloudinary.com/dwwfzwx93/image/upload/v1583766640/dre.jpg`,
    position:[`Delantero`,`Centrocampista`],
      location:"Madrid",
  year:34,
  match: 21,
  contact:20,
  }},
  {    username: "ROYSTON DRENTHE",
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
    role: "player",
    playerData: {
    imgPath: `https://res.cloudinary.com/dwwfzwx93/image/upload/v1583766640/drenthe_e9d97c.jpg`,
    position:`Lateral`,
      location:"Madrid",
  year:34,
  match: 32,
  contact:14,
  }},
  {    username: "DENILSON",
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
    role: "player",
    playerData: {
    imgPath: `https://res.cloudinary.com/dwwfzwx93/image/upload/v1583766639/denilson_qxelqd.jpg`,
    position:[`Extremo`,`Delantero`],
      location:"Alcobendas",
  year:26,
  match: 12,
  contact:14,
  }},
  {    username: "MANOLO CABEZA",
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
    role: "player",
    playerData: {
    imgPath: `https://res.cloudinary.com/dwwfzwx93/image/upload/v1583865232/default_wye5xb.png`,
    position:`Extremo`,
      location:"Tres Cantos",
  year:40,
  match: 12,
  contact:13,
  }},
  {    username: "MAGICO GONZALEZ",
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
    role: "player",
    playerData: {
    imgPath: `https://res.cloudinary.com/dwwfzwx93/image/upload/v1583766640/magico_nhnznw.jpg`,
    position:[`Extremo`,`Centrocampista`],
      location:"Alcorcon",
  year:13,
  match: 2,
  contact:11,
  }},
  {    username: "JARIC",
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
    role: "player",
    playerData: {
    imgPath: `https://res.cloudinary.com/dwwfzwx93/image/upload/v1583766640/jaric_cwz0rc.jpg`,
    position:`Lateral`,
      location:"Madrid",
  year:21,
  match: 4,
  contact:11,
  }},
  {    username: "BRUCE HARPER",
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
    role: "player",
    playerData: {
    imgPath: `https://res.cloudinary.com/dwwfzwx93/image/upload/v1583766638/bruce_haeri6.jpg`,
    position:`Extremo`,
      location:"Madrid",
  year:21,
  match: 9,
  contact:5,
  }},
  {
    username: "MARK LENDER",
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
    role: "player",
    playerData: {
    imgPath: `https://res.cloudinary.com/dwwfzwx93/image/upload/v1583766641/mark_ddjgew.jpg`,
    position:`Centrocampista`,
      location:"Madrid",
  year:33,
  match: 11,
  contact:9,
  }},
  {
    username: "OLIVER ATOM",
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
    role: "player",
    playerData: {
    imgPath: `https://res.cloudinary.com/dwwfzwx93/image/upload/v1583766641/oliver_f1kpga.jpg`,
    position:`Delantero`,
      location:"San Sebastian de los reyes",
  year:33,
  match: 22,
  contact:8,
  }},
  {
    username: "DON MANUE",
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
    role: "player",
    playerData: {
    imgPath: `https://res.cloudinary.com/dwwfzwx93/image/upload/v1583766639/donmanue_xdrroo.jpg`,
    position:`Centrocampista`,
      location:"Madrid",
  year:32,
  match: 23,
  contact:12,
  }},
  {
    username: "STREMER",
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
    role: "player",
    playerData: {
    imgPath: `https://res.cloudinary.com/dwwfzwx93/image/upload/v1583766642/stremer_oayq5j.jpg`,
    position:`Defensa`,
      location:"Parla",
  year:34,
  match: 43,
  contact:18,
  }},
  {
    username: "CAMPBELL",
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
    role: "player",
    playerData: {
    imgPath: `https://res.cloudinary.com/dwwfzwx93/image/upload/v1583766642/sol_xrpi5s.jpg`,
    position:`Lateral`,
      location:"Fuenlabrada",
  year:32,
  match: 23,
  contact:17,
  }},
  {
    username: "DE PEDRO",
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
    role: "player",
    playerData: {
    imgPath: `https://res.cloudinary.com/dwwfzwx93/image/upload/v1583766641/pedro_fp8so4.jpg`,
    position:`Extremo`,
      location:"Alcobendas",
  year:32,
  match: 23,
  contact:16,
  }},
  {
    username: "VICENTE",
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
    role: "player",
    playerData: {
    imgPath: `https://res.cloudinary.com/dwwfzwx93/image/upload/v1583766642/vicente_ui8w9g.jpg`,
    position:`Extremo`,
      location:"Madrid",
  year:34,
  match: 43,
  contact:15,
  }},
  {
    username: "RUI COSTA",
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
    role: "player",
    playerData: {
    imgPath: `https://res.cloudinary.com/dwwfzwx93/image/upload/v1583766641/rui_ywzhyc.jpg`,
    position:`Centrocampista`,
      location:"Colmenar viejo",
  year:23,
  match: 25,
  contact:14,
  }},
  {
    username: "PETIT",
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
    role: "player",
    playerData: {
    imgPath: `https://res.cloudinary.com/dwwfzwx93/image/upload/v1583766641/petit_lddgka.jpg`,
    position:`Centrocampista`,
      location:"Rivas",
  year:32,
  match: 53,
  contact:13,
  }},
  {
    username: "VIERA",
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
    role: "player",
    playerData: {
    imgPath: `https://res.cloudinary.com/dwwfzwx93/image/upload/v1583766643/viera_wysncf.jpg`,
    position:`Centrocampista`,
      location:"Madrid",
  year:21,
  match: 34,
  contact:12,
  }},
  {
    username: "NEDVED",
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
    role: "player",
    playerData: {
    imgPath: `https://res.cloudinary.com/dwwfzwx93/image/upload/v1583766641/nedved_rrmbfv.jpg`,
    position:`Centrocampista`,
      location:"Madrid",
  year:21,
  match: 23,
  contact:11,
  }},
  {
    username: "STANKOVIC",
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
    role: "player",
    playerData: {
    imgPath: `https://res.cloudinary.com/dwwfzwx93/image/upload/v1583766639/dejan_np7kes.jpg`,
    position:`Centrocampista`,
      location:"Madrid",
  year:32,
  match: 34,
  contact:9,
  }},
  {
    username: "JUAN CARLOS VALERON",
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
    role: "player",
    playerData: {
    imgPath: `https://res.cloudinary.com/dwwfzwx93/image/upload/v1583766642/valeron_hg0yvl.jpg`,
    position:`Centrocampista`,
      location:"Madrid",
  year:22,
  match: 33,
  contact:8,
  }},
  {
    username: "AMANDA SAN PEDRO",
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
    role: "player",
    playerData: {
    imgPath: `https://res.cloudinary.com/dwwfzwx93/image/upload/v1583766638/amanda_ffnvq6.jpg`,
    position:`Centrocampista`,
      location:"Madrid",
  year:33,
  match: 21,
  contact:7,
  }},
  {
    username: "VICKY LOSADA",
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
    role: "player",
    playerData: {
    imgPath: `https://res.cloudinary.com/dwwfzwx93/image/upload/v1583766642/vicky_l54ewa.jpg`,
    position:`Centrocampista`,
      location:"Madrid",
  year:23,
  match: 23,
  contact:6,
  }},
  {
    username: "FLAPPY",
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
    role: "player",
    playerData: {
    imgPath: `https://res.cloudinary.com/dwwfzwx93/image/upload/v1582131476/folder-name/flappy.png.png`,
    position:`Defensa`,
      location:"IRONHACK",
  year:30,
  match: 999,
  contact:999,
  }},
  {
    username: "PEPE REINA",
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
    role: "player",
    playerData: {
    imgPath: `https://res.cloudinary.com/dwwfzwx93/image/upload/v1583865232/default_wye5xb.png`,
    position:`Portero`,
      location:"Madrid",
  year:23,
  match: 23,
  contact:5,
  }},
  {
    username: "TONI DOBLAS",
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
    role: "player",
    playerData: {
    imgPath: `https://res.cloudinary.com/dwwfzwx93/image/upload/v1583766639/doblas_hkllc2.jpg`,
    position:`Portero`,
      location:"Madrid",
  year:23,
  match: 32,
  contact:4,
  }},
  {
    username: "WATER SAMUEL",
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
    role: "player",
    playerData: {
    imgPath: `https://res.cloudinary.com/dwwfzwx93/image/upload/v1583766642/samuel_nk6t1r.jpg`,
    position:`Defensa`,
      location:"Madrid",
  year:40,
  match: 50,
  contact:20,
  }},
  {
    username: "CONTRERAS",
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
    role: "player",
    playerData: {
    imgPath: `https://res.cloudinary.com/dwwfzwx93/image/upload/v1583766639/contreras_jpbjt1.jpgg`,
    position:`Portero`,
      location:"Madrid",
  year:39,
  match: 18,
  contact:2,
  }},
    {

    username: "IVANOV",
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
    role: "player",
    playerData: {
    imgPath: `https://res.cloudinary.com/dwwfzwx93/image/upload/v1583766640/ivanov_lobt5e.jpg`,
    position:`Portero`,
      location:"Madrid",
  year:23,
  match: 8,
  contact:10,
  }},
  {
    username: "FERNANDO HIERRO",
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
    role: "player",
    playerData: {
    imgPath: `https://res.cloudinary.com/dwwfzwx93/image/upload/v1583766640/fernando_nxkq5k.jpg`,
    position:`Defensa`,
      location:"Madrid",
  year:30,
  match: 10,
  contact:5,
  }}
  
]


User.deleteMany().then(() => Post.deleteMany()).then(()=>Match.deleteMany())
  .then(() => {
    return User.create(players)
  })
  .then((createdPlayer)=>{
    let macthes =[
      {
       macthname: "PARTIDO DE DOMINGO",
      price: 3.90,
      coord: {
        lat: 40.4375097,
        lng: -3.6606042
      },
      description:"1. Prohibido borrarse 24 horas antes, si lo hace sera sancionado y no se le volverá a admitir, al menos que abone su inscripción. 2. Se pide deportividad y juego limpio, cualquier acto verbal o de agregación sera automáticamente expulsado del evento.  3. Si quieres apuntar a tus amigos, primero avisa al organizador, no se aceptan equipos completos.  4. Los jugadores tienen que llevar camiseta negra y blanca, los balones lo ponemos nosotros.  5. La puntualidad nos lo tomamos enserio, por los que si son constante no se le volverá admitir.",
      date: "2020-03-15",
      time:"18:00",
      type:`Futbol 7`,
      user_id: [`${createdPlayer[24]._id}`,`${createdPlayer[27]._id}`,`${createdPlayer[22]._id}`,`${createdPlayer[28]._id}`,`${createdPlayer[0]._id}`,`${createdPlayer[19]._id}`,`${createdPlayer[15]._id}`,`${createdPlayer[11]._id}`,`${createdPlayer[9]._id}`],
      userCreate_id:`${createdPlayer[0]._id}`, 
      },
      {
        macthname: "MIERCOLES NOCHE",
       price: 4.50,
       coord: {
        lat: 40.4456018,
        lng: -3.709284
      },
      description:"1. Prohibido borrarse 24 horas antes, si lo hace sera sancionado y no se le volverá a admitir, al menos que abone su inscripción. 2. Se pide deportividad y juego limpio, cualquier acto verbal o de agregación sera automáticamente expulsado del evento.  3. Si quieres apuntar a tus amigos, primero avisa al organizador, no se aceptan equipos completos.  4. Los jugadores tienen que llevar camiseta negra y blanca, los balones lo ponemos nosotros.  5. La puntualidad nos lo tomamos enserio, por los que si son constante no se le volverá admitir.",
       date: "2020-03-18",
       time:"21:00",
       type:`Futbol 11`,
       user_id: [`${createdPlayer[15]._id}`,`${createdPlayer[21]._id}`,`${createdPlayer[20]._id}`,`${createdPlayer[18]._id}`,`${createdPlayer[17]._id}`,`${createdPlayer[16]._id}`],
       userCreate_id:`${createdPlayer[15]._id}`, 
       },
       {
        macthname: "CLASICO DE VIERNES",
       price: 3,
       coord: {
        lat: 40.3954079,
        lng: -3.7047247
      },
      description:"1. Prohibido borrarse 24 horas antes, si lo hace sera sancionado y no se le volverá a admitir, al menos que abone su inscripción. 2. Se pide deportividad y juego limpio, cualquier acto verbal o de agregación sera automáticamente expulsado del evento.  3. Si quieres apuntar a tus amigos, primero avisa al organizador, no se aceptan equipos completos.  4. Los jugadores tienen que llevar camiseta negra y blanca, los balones lo ponemos nosotros.  5. La puntualidad nos lo tomamos enserio, por los que si son constante no se le volverá admitir.",
       date: "2020-03-13",
       time:"22:00",
       type:`Futbol 7`,
       user_id: [`${createdPlayer[25]._id}`,`${createdPlayer[14]._id}`,`${createdPlayer[23]._id}`,`${createdPlayer[30]._id}`,`${createdPlayer[31]._id}`,`${createdPlayer[13]._id}`,`${createdPlayer[12]._id}`,`${createdPlayer[10]._id}`,`${createdPlayer[6]._id}`,`${createdPlayer[1]._id}`,`${createdPlayer[2]._id}`,`${createdPlayer[3]._id}`,`${createdPlayer[4]._id}`],
       userCreate_id:`${createdPlayer[25]._id}`, 
       },
       {
        macthname: "LUNES MAÑANA",
       price: 2,
       coord: {
        lat: 40.6125205,
        lng: -3.7168026
      },
      description:"1. Prohibido borrarse 24 horas antes, si lo hace sera sancionado y no se le volverá a admitir, al menos que abone su inscripción. 2. Se pide deportividad y juego limpio, cualquier acto verbal o de agregación sera automáticamente expulsado del evento.  3. Si quieres apuntar a tus amigos, primero avisa al organizador, no se aceptan equipos completos.  4. Los jugadores tienen que llevar camiseta negra y blanca, los balones lo ponemos nosotros.  5. La puntualidad nos lo tomamos enserio, por los que si son constante no se le volverá admitir.",
       date: "2020-03-16",
       time:"10:00",
       type:`Futbol Sala`,
       user_id: [`${createdPlayer[29]._id}`,`${createdPlayer[8]._id}`,`${createdPlayer[7]._id}`,`${createdPlayer[5]._id}`],
       userCreate_id:`${createdPlayer[29]._id}`, 
       },
       {
        macthname: "CLASICO DE VIERNES",
       price: 3,
       coord: {
        lat: 40.3954079,
        lng: -3.7047247
      },
      description:"1. Prohibido borrarse 24 horas antes, si lo hace sera sancionado y no se le volverá a admitir, al menos que abone su inscripción. 2. Se pide deportividad y juego limpio, cualquier acto verbal o de agregación sera automáticamente expulsado del evento.  3. Si quieres apuntar a tus amigos, primero avisa al organizador, no se aceptan equipos completos.  4. Los jugadores tienen que llevar camiseta negra y blanca, los balones lo ponemos nosotros.  5. La puntualidad nos lo tomamos enserio, por los que si son constante no se le volverá admitir.",
       date: "2020-03-20",
       time:"22:00",
       type:`Futbol 7`,
       user_id:[`${createdPlayer[25]._id}`,`${createdPlayer[8]._id}`,`${createdPlayer[7]._id}`,`${createdPlayer[23]._id}`,`${createdPlayer[30]._id}`],
       userCreate_id:createdPlayer[25]._id, 
       }
    ]
    return Match.create(macthes)
    
  })
  .then(() => {
    return User.create(clubs);
  })
  .then((createdClubs) => {
    let posts = [{
        title: "VEN A PROBAR SUERTE",
        coord: {
          lat: 40.4462334,
          lng: -3.7091072
        },
        description: "C.D. ALONSO CANO anuncia que con el comienzo de la pretenmporada el proximo dia 15 de agosto ha decidido abrir sus puertas a todo el mundo que quiera venir a entrenar y probas suerte para conseguir plaza en el equipo para la temporada.Somos un equipo con un muy buen ambiente y lo primordial venir con muchas ganas de pasarlo bien y trabajar",
        date: new Date(2020, 02, 10),
        club_id: createdClubs[8]._id
      },
      {
        title: "SE BUSCA PORTERO",
        coord: {
          lat: 40.5597218,
          lng: -3.6268323,
        },
        description: "Equipo de futbol  que jugamos los juegos deportivos municipales los domingos por la mañana. jugamos tanto amistosos como la liga por la zona sur, carabanchel, leganes, alcorcon... buscamos gente con un buen nivel, hemos ganado la liga varios años, somos un equipo serio y competitivo. un portero y un par de jugadores de campo un extremo carrilero ofensivo y un mediocentro organizador. veniros a probar un amistoso, la liga comienza pronto!!!",
        date: "2020-01-17",
        club_id: createdClubs[0]._id
      },
      {
        title: "COMIENZA PLAZO DE PRUEBAS PARA EL PRIMER EQUIPO",
        coord: {
          lat: 40.4032248,
          lng: -3.6685674
        },
        description: "El CELTIC CASTILLA C.F. realizará durante estas semanas las pruebas a los jugadores que puedan estar interesados en formar parte de la plantilla de cara a la próxima temporada. El ambicioso reto es el del ascenso el próximo curso  y, para ello, el club  pretende hacer un gran equipo con alguna incorporación que ayude a conseguirlo. El club además harán todo el esfuerzo posible para que los jugadores tengan la motivación de jugar con su escudo y, para ello, están acordando ayudas con diferentes empresas e instituciones con las que dar el salto de categoría.Asimismo, seguirán con la base de la temporada anterior apostando de nuevo por jugadores comprometidos y especialmente por los formados en el propio club, más ahora que el equipo juvenil consiguió el pasado fin de semana su permanencia en División de Honor, su máxima categoría. Las pruebas se realizarán los próximos martes, de 21 a 22:30 horas, y jueves, de 20:30 a 22:30 horas.",
        date: "2020-02-20",
        club_id: createdClubs[7]._id
      },
      {
        title: "SE BUSCA DELANTERO GOLEADOR Y HABIL EN EL TERCER TIEMPO",
        coord: {
          lat: 40.4460268,
          lng: -3.7082682,
        },
        description: "Equipo de futbol  que jugamos los juegos deportivos municipales los domingos por la mañana. jugamos tanto amistosos como la liga por la zona sur, carabanchel, leganes, alcorcon... buscamos gente con un buen nivel, hemos ganado la liga varios años, somos un equipo serio y competitivo. un portero y un par de jugadores de campo un extremo carrilero ofensivo y un mediocentro organizador. veniros a probar un amistoso, la liga comienza pronto!!!",
        date: "2020-01-20",
        club_id: createdClubs[9]._id
      },
      {
        title: "NUEVO EQUIPO BUSCA",
        coord: {
          lat: 40.4092892,
          lng: -3.6012756,
        },
        description: "Equipo de futbol 7 que jugamos los juegos deportivos municipales los domingos por la mañana. jugamos tanto amistosos como la liga por la zona sur, carabanchel, leganes, alcorcon... buscamos gente con un buen nivel, hemos ganado la liga varios años, somos un equipo serio y competitivo. un portero y un par de jugadores de campo un extremo carrilero ofensivo y un mediocentro organizador. veniros a probar un amistoso, la liga comienza pronto!!!",
        date: "2020-01-20",
        club_id: createdClubs[3]._id
      },
      {
        title: "SE BUSCA PORTERO",
        coord: {
          lat: 40.4134395,
          lng: -3.6714485,
        },
        description: "Equipo de futbol 7 que jugamos los juegos deportivos municipales los domingos por la mañana. jugamos tanto amistosos como la liga por la zona sur, carabanchel, leganes, alcorcon... buscamos gente con un buen nivel, hemos ganado la liga varios años, somos un equipo serio y competitivo. un portero y un par de jugadores de campo un extremo carrilero ofensivo y un mediocentro organizador. veniros a probar un amistoso, la liga comienza pronto!!!",
        date: "2020-02-20",
        club_id: createdClubs[4]._id
      },
      {
        title: "COMIENZA UNA NUEVA AVENTURA",
        coord: {
          lat: 40.3969897,
          lng: -3.7357897
        },
        description: "El  realizará durante estas semanas las pruebas a los jugadores que puedan estar interesados en formar parte de la plantilla de cara a la próxima temporada. El ambicioso reto es el del ascenso el próximo curso  y, para ello, el club  pretende hacer un gran equipo con alguna incorporación que ayude a conseguirlo. El club además harán todo el esfuerzo posible para que los jugadores tengan la motivación de jugar con su escudo y, para ello, están acordando ayudas con diferentes empresas e instituciones con las que dar el salto de categoría.Asimismo, seguirán con la base de la temporada anterior apostando de nuevo por jugadores comprometidos y especialmente por los formados en el propio club, más ahora que el equipo juvenil consiguió el pasado fin de semana su permanencia en División de Honor, su máxima categoría. Las pruebas se realizarán los próximos martes, de 21 a 22:30 horas, y jueves, de 20:30 a 22:30 horas.",
        date: "2020-02-01",
        club_id: createdClubs[2]._id
      },
      {
        title: "COMIENZA UNA NUEVA AVENTURA",
        coord: {
          lat: 40.3969897,
          lng: -3.7357897
        },
        description: "El C.D. BETIS SAN ISIDRO realizará durante estas semanas las pruebas a los jugadores que puedan estar interesados en formar parte de la plantilla de cara a la próxima temporada. El ambicioso reto es el del ascenso el próximo curso  y, para ello, el club  pretende hacer un gran equipo con alguna incorporación que ayude a conseguirlo. El club además harán todo el esfuerzo posible para que los jugadores tengan la motivación de jugar con su escudo y, para ello, están acordando ayudas con diferentes empresas e instituciones con las que dar el salto de categoría.Asimismo, seguirán con la base de la temporada anterior apostando de nuevo por jugadores comprometidos y especialmente por los formados en el propio club, más ahora que el equipo juvenil consiguió el pasado fin de semana su permanencia en División de Honor, su máxima categoría. Las pruebas se realizarán los próximos martes, de 21 a 22:30 horas, y jueves, de 20:30 a 22:30 horas.",
        date: "2019-02-01",
        club_id: createdClubs[2]._id
      },
      {
        title: "ABIERTO ENTRENAMIENTOS PARA NUEVOS INTEGANTES",
        coord: {
          lat: 40.3953098,
          lng: 3.704617
        },
        description: "El  A.D. GIGANTESrealizará durante estas semanas las pruebas a los jugadores que puedan estar interesados en formar parte de la plantilla de cara a la próxima temporada. El ambicioso reto es el del ascenso el próximo curso  y, para ello, el club  pretende hacer un gran equipo con alguna incorporación que ayude a conseguirlo. El club además harán todo el esfuerzo posible para que los jugadores tengan la motivación de jugar con su escudo y, para ello, están acordando ayudas con diferentes empresas e instituciones con las que dar el salto de categoría.Asimismo, seguirán con la base de la temporada anterior apostando de nuevo por jugadores comprometidos y especialmente por los formados en el propio club, más ahora que el equipo juvenil consiguió el pasado fin de semana su permanencia en División de Honor, su máxima categoría. Las pruebas se realizarán los próximos martes, de 21 a 22:30 horas, y jueves, de 20:30 a 22:30 horas.",
        date: "2020-01-20",
        club_id: createdClubs[5]._id
      },
      {
        title: "ABIERTO ENTRENAMIENTOS PARA NUEVOS INTEGANTES",
        coord: {
          lat: 40.3953098,
          lng: -3.704617
        },
        description: "El A.D. GIGANTES realizará durante estas semanas las pruebas a los jugadores que puedan estar interesados en formar parte de la plantilla de cara a la próxima temporada. El ambicioso reto es el del ascenso el próximo curso  y, para ello, el club  pretende hacer un gran equipo con alguna incorporación que ayude a conseguirlo. El club además harán todo el esfuerzo posible para que los jugadores tengan la motivación de jugar con su escudo y, para ello, están acordando ayudas con diferentes empresas e instituciones con las que dar el salto de categoría.Asimismo, seguirán con la base de la temporada anterior apostando de nuevo por jugadores comprometidos y especialmente por los formados en el propio club, más ahora que el equipo juvenil consiguió el pasado fin de semana su permanencia en División de Honor, su máxima categoría. Las pruebas se realizarán los próximos martes, de 21 a 22:30 horas, y jueves, de 20:30 a 22:30 horas.",
        date: "2019-02-20",
        club_id: createdClubs[5]._id
      },
      {
        title: "SE BUSCA EQUIPO PARA JUGAR ESTE VERANO",
        coord: {
          lat: 40.5597218,
          lng: -3.6268323,
        },
         description:"Pos eso, estamos buscando equipos contra los que jugar par los parones de liga y los meses de verano que sean serios y busquen la practica deportiva y nada marrulleros",
         date: "2020-01-01",
         club_id: createdClubs[0]._id
    },
      {
        title: "NO TE QUEDES SIN DEMOSTRAR LO QUE VALES",
        coord: {
          lat: 40.3736818,
          lng: -3.7296272
        },
        description: "El RACING VILLAVERDE C.F. realizará durante estas semanas las pruebas a los jugadores que puedan estar interesados en formar parte de la plantilla de cara a la próxima temporada. El ambicioso reto es el del ascenso el próximo curso  y, para ello, el club  pretende hacer un gran equipo con alguna incorporación que ayude a conseguirlo. El club además harán todo el esfuerzo posible para que los jugadores tengan la motivación de jugar con su escudo y, para ello, están acordando ayudas con diferentes empresas e instituciones con las que dar el salto de categoría.Asimismo, seguirán con la base de la temporada anterior apostando de nuevo por jugadores comprometidos y especialmente por los formados en el propio club, más ahora que el equipo juvenil consiguió el pasado fin de semana su permanencia en División de Honor, su máxima categoría. Las pruebas se realizarán los próximos martes, de 21 a 22:30 horas, y jueves, de 20:30 a 22:30 horas.",
        date: "2020-01-10",
        club_id: createdClubs[6]._id
      },
      {
        title: "EN BUSCA DE DEFENSA CONTUNDENTE",
        coord: {
          lat: 40.4460268,
          lng: -3.7082682,
        },
        description: "Equipo de futbol sala que jugamos los juegos deportivos municipales los domingos por la mañana. jugamos tanto amistosos como la liga por la zona sur, carabanchel, leganes, alcorcon... buscamos gente con un buen nivel, hemos ganado la liga varios años, somos un equipo serio y competitivo. un portero y un par de jugadores de campo un extremo carrilero ofensivo y un mediocentro organizador. veniros a probar un amistoso, la liga comienza pronto!!!",
        date: "2020-01-13",
        club_id: createdClubs[9]._id
      },
      {
        title: "COMIENZO ENTRENMIENTOS",
        coord: {
          lat: 40.4462334,
          lng: -3.7091072
        },
        description: "El C.D. ALONSO CANO realizará durante estas semanas las pruebas a los jugadores que puedan estar interesados en formar parte de la plantilla de cara a la próxima temporada. El ambicioso reto es el del ascenso el próximo curso  y, para ello, el club  pretende hacer un gran equipo con alguna incorporación que ayude a conseguirlo. El club además harán todo el esfuerzo posible para que los jugadores tengan la motivación de jugar con su escudo y, para ello, están acordando ayudas con diferentes empresas e instituciones con las que dar el salto de categoría.Asimismo, seguirán con la base de la temporada anterior apostando de nuevo por jugadores comprometidos y especialmente por los formados en el propio club, más ahora que el equipo juvenil consiguió el pasado fin de semana su permanencia en División de Honor, su máxima categoría. Las pruebas se realizarán los próximos martes, de 21 a 22:30 horas, y jueves, de 20:30 a 22:30 horas.",
        date: "2020-01-30",
        club_id: createdClubs[8]._id
      },
      {
        title: "SE BUSCA PORTERO",
        coord: {
          lat: 40.4460268,
          lng: -3.7082682,
        },
        description: "Equipo de futbol  que jugamos los juegos deportivos municipales los domingos por la mañana. jugamos tanto amistosos como la liga por la zona sur, carabanchel, leganes, alcorcon... buscamos gente con un buen nivel, hemos ganado la liga varios años, somos un equipo serio y competitivo. un portero y un par de jugadores de campo un extremo carrilero ofensivo y un mediocentro organizador. veniros a probar un amistoso, la liga comienza pronto!!!",
        date: "2019-04-20",
        club_id: createdClubs[9]._id
      },
      {
        title: "EQUIPO EN REMODELACION",
        coord: {
          lat: 40.4460268,
          lng: -3.7082682,
        },
        description: "Equipo de futbol  que jugamos los juegos deportivos municipales los domingos por la mañana. jugamos tanto amistosos como la liga por la zona sur, carabanchel, leganes, alcorcon... buscamos gente con un buen nivel, hemos ganado la liga varios años, somos un equipo serio y competitivo. un portero y un par de jugadores de campo un extremo carrilero ofensivo y un mediocentro organizador. veniros a probar un amistoso, la liga comienza pronto!!!",
        date: "2020-02-22",
        club_id: createdClubs[9]._id
      },
      {
        title: "SE BUSCA PORTERO DA IGUAL EL NIVEL",
        coord: {
          lat: 40.5597218,
          lng: -3.6268323,
        },
        description: "Equipo de futbol  que jugamos los juegos deportivos municipales los domingos por la mañana. jugamos tanto amistosos como la liga por la zona sur, carabanchel, leganes, alcorcon... buscamos gente con un buen nivel, hemos ganado la liga varios años, somos un equipo serio y competitivo. un portero y un par de jugadores de campo un extremo carrilero ofensivo y un mediocentro organizador. veniros a probar un amistoso, la liga comienza pronto!!!",
        date: "2020-01-20",
        club_id: createdClubs[0]._id
      },
      {
        title: "BUSCO EQUIPO CONTRA EL QUE JUGAR",
        coord: {
          lat: 37.3845307,
          lng: -6.0152011,
        },
        description: "Pos eso, estamos buscando equipos contra los que jugar par los parones de liga y los meses de verano que sean serios y busquen la practica deportiva y nada marrulleros",
        date: "2020-01-20",
        club_id: createdClubs[1]._id
      },
    ]

    return Post.create(posts)
  })
  .then(createdPosts => {
    console.log("posts and clubs succesfully created");
    mongoose.connection.close();
    process.exit(0);
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });