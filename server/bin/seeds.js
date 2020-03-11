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
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit inceptos curae ullamcorper per cursus ad cubilia nulla vulputate urna sed, facilisi sociis pharetra vehicula velit magnis morbi nisi diam ornare eget bibendum malesuada ultricies tortor a. Non urna sociosqu molestie arcu montes volutpat dignissim eleifend leo pharetra, mus himenaeos imperdiet libero class cum taciti lacus fringilla. Malesuada nisl maecenas ornare euismod nisi rhoncus eleifend enim cum magnis aenean nunc erat, nostra senectus volutpat augue cubilia tempor neque morbi mus ut ad sem.",
    }
  },
  {
    username: "C.D. BETIS SAN ISIDRO",
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
    role: "club",
    clubData: {
      imgPath: `https://res.cloudinary.com/dwwfzwx93/image/upload/v1583766638/Betis-San-Isidro-escudo_tgy9er.jpg`,
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit inceptos curae ullamcorper per cursus ad cubilia nulla vulputate urna sed, facilisi sociis pharetra vehicula velit magnis morbi nisi diam ornare eget bibendum malesuada ultricies tortor a. Non urna sociosqu molestie arcu montes volutpat dignissim eleifend leo pharetra, mus himenaeos imperdiet libero class cum taciti lacus fringilla. Malesuada nisl maecenas ornare euismod nisi rhoncus eleifend enim cum magnis aenean nunc erat, nostra senectus volutpat augue cubilia tempor neque morbi mus ut ad sem.",
    }
  },
  {
    username: "MACABI DE LEVANTAR F7",
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
    role: "club",
    clubData: {
      imgPath: `https://res.cloudinary.com/dwwfzwx93/image/upload/v1583766640/macabi_a4yzfj.jpg`,
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit inceptos curae ullamcorper per cursus ad cubilia nulla vulputate urna sed, facilisi sociis pharetra vehicula velit magnis morbi nisi diam ornare eget bibendum malesuada ultricies tortor a. Non urna sociosqu molestie arcu montes volutpat dignissim eleifend leo pharetra, mus himenaeos imperdiet libero class cum taciti lacus fringilla. Malesuada nisl maecenas ornare euismod nisi rhoncus eleifend enim cum magnis aenean nunc erat, nostra senectus volutpat augue cubilia tempor neque morbi mus ut ad sem.",
    }
  },
  {
    username: "BORUSIA DE DONUT F7",
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
  role: "club",
  clubData: {
    imgPath: `https://res.cloudinary.com/dwwfzwx93/image/upload/v1583766640/donuts_rh7yop.jpg`,
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit inceptos curae ullamcorper per cursus ad cubilia nulla vulputate urna sed, facilisi sociis pharetra vehicula velit magnis morbi nisi diam ornare eget bibendum malesuada ultricies tortor a. Non urna sociosqu molestie arcu montes volutpat dignissim eleifend leo pharetra, mus himenaeos imperdiet libero class cum taciti lacus fringilla. Malesuada nisl maecenas ornare euismod nisi rhoncus eleifend enim cum magnis aenean nunc erat, nostra senectus volutpat augue cubilia tempor neque morbi mus ut ad sem.",
  }
  },
  {
    username: "A.D. GIGANTES",
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
  role: "club",
  clubData:{
    imgPath: `https://res.cloudinary.com/dwwfzwx93/image/upload/v1583766640/GIGANTES_xbxei2.jpg`,
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit inceptos curae ullamcorper per cursus ad cubilia nulla vulputate urna sed, facilisi sociis pharetra vehicula velit magnis morbi nisi diam ornare eget bibendum malesuada ultricies tortor a. Non urna sociosqu molestie arcu montes volutpat dignissim eleifend leo pharetra, mus himenaeos imperdiet libero class cum taciti lacus fringilla. Malesuada nisl maecenas ornare euismod nisi rhoncus eleifend enim cum magnis aenean nunc erat, nostra senectus volutpat augue cubilia tempor neque morbi mus ut ad sem.",
  }},
  {
    username: "RACING VILLAVERDE C.F.",
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
  role: "club",
  clubData:{
    imgPath: `https://res.cloudinary.com/dwwfzwx93/image/upload/v1583766641/Racing_Villaverde_czmqqi.jpg`,
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit inceptos curae ullamcorper per cursus ad cubilia nulla vulputate urna sed, facilisi sociis pharetra vehicula velit magnis morbi nisi diam ornare eget bibendum malesuada ultricies tortor a. Non urna sociosqu molestie arcu montes volutpat dignissim eleifend leo pharetra, mus himenaeos imperdiet libero class cum taciti lacus fringilla. Malesuada nisl maecenas ornare euismod nisi rhoncus eleifend enim cum magnis aenean nunc erat, nostra senectus volutpat augue cubilia tempor neque morbi mus ut ad sem.",
  }},
  {
    username: "CELTIC CASTILLA C.F.",
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
  role: "club",
  clubData:{
    imgPath: `https://res.cloudinary.com/dwwfzwx93/image/upload/v1583766638/CELTIC_CASTILLA_iucbas.jpg`,
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit inceptos curae ullamcorper per cursus ad cubilia nulla vulputate urna sed, facilisi sociis pharetra vehicula velit magnis morbi nisi diam ornare eget bibendum malesuada ultricies tortor a. Non urna sociosqu molestie arcu montes volutpat dignissim eleifend leo pharetra, mus himenaeos imperdiet libero class cum taciti lacus fringilla. Malesuada nisl maecenas ornare euismod nisi rhoncus eleifend enim cum magnis aenean nunc erat, nostra senectus volutpat augue cubilia tempor neque morbi mus ut ad sem.",
   } },
  {
    username: "C.D. ALONSO CANO",
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
  role: "club",
  clubData:{
    imgPath: `https://res.cloudinary.com/dwwfzwx93/image/upload/v1583766638/ALONSO_memxdr.jpg`,
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit inceptos curae ullamcorper per cursus ad cubilia nulla vulputate urna sed, facilisi sociis pharetra vehicula velit magnis morbi nisi diam ornare eget bibendum malesuada ultricies tortor a. Non urna sociosqu molestie arcu montes volutpat dignissim eleifend leo pharetra, mus himenaeos imperdiet libero class cum taciti lacus fringilla. Malesuada nisl maecenas ornare euismod nisi rhoncus eleifend enim cum magnis aenean nunc erat, nostra senectus volutpat augue cubilia tempor neque morbi mus ut ad sem.",
 } },
  {
    username: "ASTON BIRRA FS",
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
  role: "club",
  clubData:{
    imgPath: `https://res.cloudinary.com/dwwfzwx93/image/upload/v1583766638/astonbirra_olvkrp.gif`,
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit inceptos curae ullamcorper per cursus ad cubilia nulla vulputate urna sed, facilisi sociis pharetra vehicula velit magnis morbi nisi diam ornare eget bibendum malesuada ultricies tortor a. Non urna sociosqu molestie arcu montes volutpat dignissim eleifend leo pharetra, mus himenaeos imperdiet libero class cum taciti lacus fringilla. Malesuada nisl maecenas ornare euismod nisi rhoncus eleifend enim cum magnis aenean nunc erat, nostra senectus volutpat augue cubilia tempor neque morbi mus ut ad sem.",
  }},
]

let players = [{
    username: "PACO HUERTO",
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
    role: "player",
    playerData: {
      imgPath: `https://res.cloudinary.com/dwwfzwx93/image/upload/v1583766641/paco_huerto_grlc7t.jpg`,
      position: [`Defensa`, `Lateral`],
    }
  },
  {
    username: "MACCO",
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
    role: "player",
    playerData: {
      imgPath: `https://res.cloudinary.com/dwwfzwx93/image/upload/v1583766641/macco_dgbbk3.jpg`,
      position: [`Lateral`, `Extremo`],
    }
  },
  {    username: "CASTOLO",
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
    role: "player",
    playerData: {
    imgPath: `https://res.cloudinary.com/dwwfzwx93/image/upload/v1583766638/castolo_gkj37k.jpg`,
    position:`Delantero`,
  }},
  {    username: "JULIEN FAUBERT",
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
    role: "player",
    playerData: {
    imgPath: `https://res.cloudinary.com/dwwfzwx93/image/upload/v1583766640/faubert_cai9cv.jpg`,
    position:[`Delantero`,`Centrocampista`]
  }},
  {    username: "ROYSTON DRENTHE",
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
    role: "player",
    playerData: {
    imgPath: `https://res.cloudinary.com/dwwfzwx93/image/upload/v1583766640/drenthe_e9d97c.jpg`,
    position:`Lateral`,
  }},
  {    username: "DENILSON",
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
    role: "player",
    playerData: {
    imgPath: `https://res.cloudinary.com/dwwfzwx93/image/upload/v1583766639/denilson_qxelqd.jpg`,
    position:[`Extremo`,`Delantero`]
  }},
  {    username: "MANOLO CABEZA",
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
    role: "player",
    playerData: {
    imgPath: `../images/default.png`,
    position:`Extremo`,
  }},
  {    username: "MAGICO GONZALEZ",
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
    role: "player",
    playerData: {
    imgPath: `https://res.cloudinary.com/dwwfzwx93/image/upload/v1583766640/magico_nhnznw.jpg`,
    position:[`Extremo`,`Centrocampista`]
  }},
  {    username: "JARIC",
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
    role: "player",
    playerData: {
    imgPath: `https://res.cloudinary.com/dwwfzwx93/image/upload/v1583766640/jaric_cwz0rc.jpg`,
    position:`Lateral`,
  }},
  {    username: "BRUCE HARPER",
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
    role: "player",
    playerData: {
    imgPath: `https://res.cloudinary.com/dwwfzwx93/image/upload/v1583766638/bruce_haeri6.jpg`,
    position:`Extremo`,
  }},
  {
    username: "MARK LENDER",
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
    role: "player",
    playerData: {
    imgPath: `https://res.cloudinary.com/dwwfzwx93/image/upload/v1583766641/mark_ddjgew.jpg`,
    position:`Centrocampista`,
  }},
  {
    username: "OLIVER ATOM",
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
    role: "player",
    playerData: {
    imgPath: `https://res.cloudinary.com/dwwfzwx93/image/upload/v1583766641/oliver_f1kpga.jpg`,
    position:`Delantero`,
  }},
  {
    username: "DON MANUE",
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
    role: "player",
    playerData: {
    imgPath: `https://res.cloudinary.com/dwwfzwx93/image/upload/v1583766639/donmanue_xdrroo.jpg`,
    position:`Centrocampista`,
  }},
  {
    username: "STREMER",
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
    role: "player",
    playerData: {
    imgPath: `https://res.cloudinary.com/dwwfzwx93/image/upload/v1583766642/stremer_oayq5j.jpg`,
    position:`Defensa`,
  }},
  {
    username: "CAMPBELL",
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
    role: "player",
    playerData: {
    imgPath: `https://res.cloudinary.com/dwwfzwx93/image/upload/v1583766642/sol_xrpi5s.jpg`,
    position:`Lateral`,
  }},
  {
    username: "DE PEDRO",
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
    role: "player",
    playerData: {
    imgPath: `https://res.cloudinary.com/dwwfzwx93/image/upload/v1583766641/pedro_fp8so4.jpg`,
    position:`Extremo`,
  }},
  {
    username: "VICENTE",
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
    role: "player",
    playerData: {
    imgPath: `https://res.cloudinary.com/dwwfzwx93/image/upload/v1583766642/vicente_ui8w9g.jpg`,
    position:`Extremo`,
  }},
  {
    username: "RUI COSTA",
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
    role: "player",
    playerData: {
    imgPath: `https://res.cloudinary.com/dwwfzwx93/image/upload/v1583766641/rui_ywzhyc.jpg`,
    position:`Centrocampista`,
  }},
  {
    username: "PETIT",
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
    role: "player",
    playerData: {
    imgPath: `https://res.cloudinary.com/dwwfzwx93/image/upload/v1583766641/petit_lddgka.jpg`,
    position:`Centrocampista`,
  }},
  {
    username: "VIERA",
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
    role: "player",
    playerData: {
    imgPath: `../images/viera.jpeg`,
    position:`Centrocampista`,
  }},
  {
    username: "NEDVED",
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
    role: "player",
    playerData: {
    imgPath: `../images/nedved.jpeg`,
    position:`Centrocampista`,
  }},
  {
    username: "STANKOVIC",
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
    role: "player",
    playerData: {
    imgPath: `../images/dejan+.jpeg`,
    position:`Centrocampista`,
  }},
  {
    username: "JUAN CARLOS VALERON",
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
    role: "player",
    playerData: {
    imgPath: `../images/valeron.jpeg`,
    position:`Centrocampista`,
  }},
  {
    username: "AMANDA SAN PEDRO",
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
    role: "player",
    playerData: {
    imgPath: `../images/amanda.jpeg`,
    position:`Centrocampista`,
  }},
  {
    username: "VICKY LOSADA",
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
    role: "player",
    playerData: {
    imgPath: `../images/vicky.jpeg`,
    position:`Centrocampista`,
  }},
  {
    username: "FLAPPY",
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
    role: "player",
    playerData: {
    imgPath: `https://res.cloudinary.com/dwwfzwx93/image/upload/v1582131476/folder-name/flappy.png.png`,
    position:`Defensa`,
  }},
  {
    username: "PEPE REINA",
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
    role: "player",
    playerData: {
    imgPath: `../images/default.png`,
    position:`Portero`,
  }},
  {
    username: "TONI DOBLAS",
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
    role: "player",
    playerData: {
    imgPath: `../public/images/doblas.jpg`,
    position:`Portero`,
  }},
  {
    username: "WATER SAMUEL",
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
    role: "player",
    playerData: {
    imgPath: `../public/images/samuel.jpeg`,
    position:`Defensa`,
  }},
  {
    username: "CONTRERAS",
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
    role: "player",
    playerData: {
    imgPath: `../public/images/contreras.jpeg`,
    position:`Portero`,
  }},
    {

    username: "IVANOV",
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
    role: "player",
    playerData: {
    imgPath: `../public/images/ivanov.jpeg`,
    position:`Portero`,
  }},
  {
    username: "FERNANDO HIERRO",
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
    role: "player",
    playerData: {
    imgPath: `../public/images/fernando.jpeg`,
    position:`Defensa`,
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
      price: 2.5,
      location: [40.4375097,-3.6606042],
      date: "2020-03-15",
      time:"18:00",
      type:`Futbol 7`,
      user_id: [`${createdPlayer[24]._id}`,`${createdPlayer[27]._id}`,`${createdPlayer[22]._id}`,`${createdPlayer[28]._id}`,`${createdPlayer[0]._id}`,`${createdPlayer[19]._id}`,`${createdPlayer[15]._id}`,`${createdPlayer[11]._id}`,`${createdPlayer[9]._id}`],
      userCreate_id:`${createdPlayer[0]._id}`, 
      },
      {
        macthname: "MIERCOLES NOCHE",
       price: 2.5,
       location: [40.4456018,-3.709284],
       date: "2020-03-18",
       time:"21:00",
       type:`Futbol 11`,
       user_id: [`${createdPlayer[15]._id}`,`${createdPlayer[21]._id}`,`${createdPlayer[20]._id}`,`${createdPlayer[18]._id}`,`${createdPlayer[17]._id}`,`${createdPlayer[16]._id}`],
       userCreate_id:`${createdPlayer[15]._id}`, 
       },
       {
        macthname: "CLASICO DE VIERNES",
       price: 2.5,
       location: [40.3954079,-3.7047247],
       date: "2020-03-13",
       time:"22:00",
       type:`Futbol 7`,
       user_id: [`${createdPlayer[25]._id}`,`${createdPlayer[14]._id}`,`${createdPlayer[23]._id}`,`${createdPlayer[30]._id}`,`${createdPlayer[31]._id}`,`${createdPlayer[13]._id}`,`${createdPlayer[12]._id}`,`${createdPlayer[10]._id}`,`${createdPlayer[6]._id}`,`${createdPlayer[1]._id}`,`${createdPlayer[2]._id}`,`${createdPlayer[3]._id}`,`${createdPlayer[4]._id}`],
       userCreate_id:`${createdPlayer[25]._id}`, 
       },
       {
        macthname: "LUNES MAÑANA",
       price: 2.5,
       location: [40.6125205,-3.7168026],
       date: "2020-03-16",
       time:"10:00",
       type:`Futbol Sala`,
       user_id: [`${createdPlayer[29]._id}`,`${createdPlayer[8]._id}`,`${createdPlayer[7]._id}`,`${createdPlayer[5]._id}`],
       userCreate_id:`${createdPlayer[29]._id}`, 
       },
       {
        macthname: "CLASICO DE VIERNES",
       price: 2.5,
       location: [40.3954079,-3.7047247],
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
        location: [40.4462334, -3.7091072],
        description: "C.D. ALONSO CANO anuncia que con el comienzo de la pretenmporada el proximo dia 15 de agosto ha decidido abrir sus puertas a todo el mundo que quiera venir a entrenar y probas suerte para conseguir plaza en el equipo para la temporada.Somos un equipo con un muy buen ambiente y lo primordial venir con muchas ganas de pasarlo bien y trabajar",
        date: new Date(2020, 07, 10),
        club_id: createdClubs[8]._id
      },
      {
        title: "SE BUSCA PORTERO",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit inceptos curae ullamcorper per cursus ad cubilia nulla vulputate urna sed, facilisi sociis pharetra vehicula velit magnis morbi nisi diam ornare eget bibendum malesuada ultricies tortor a. Non urna sociosqu molestie arcu montes volutpat dignissim eleifend leo pharetra, mus himenaeos imperdiet libero class cum taciti lacus fringilla. Malesuada nisl maecenas ornare euismod nisi rhoncus eleifend enim cum magnis aenean nunc erat, nostra senectus volutpat augue cubilia tempor neque morbi mus ut ad sem.",
        date: "2020-06-17",
        club_id: createdClubs[0]._id
      },
      {
        title: "COMIENZA PLAZO DE PRUEBAS PARA EL PRIMER EQUIPO",
        location: [40.4032248, -3.6685674],
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit inceptos curae ullamcorper per cursus ad cubilia nulla vulputate urna sed, facilisi sociis pharetra vehicula velit magnis morbi nisi diam ornare eget bibendum malesuada ultricies tortor a. Non urna sociosqu molestie arcu montes volutpat dignissim eleifend leo pharetra, mus himenaeos imperdiet libero class cum taciti lacus fringilla. Malesuada nisl maecenas ornare euismod nisi rhoncus eleifend enim cum magnis aenean nunc erat, nostra senectus volutpat augue cubilia tempor neque morbi mus ut ad sem.",
        date: "2020-07-20",
        club_id: createdClubs[7]._id
      },
      {
        title: "SE BUSCA DELANTERO GOLEADOR Y HABIL EN EL TERCER TIEMPO",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit inceptos curae ullamcorper per cursus ad cubilia nulla vulputate urna sed, facilisi sociis pharetra vehicula velit magnis morbi nisi diam ornare eget bibendum malesuada ultricies tortor a. Non urna sociosqu molestie arcu montes volutpat dignissim eleifend leo pharetra, mus himenaeos imperdiet libero class cum taciti lacus fringilla. Malesuada nisl maecenas ornare euismod nisi rhoncus eleifend enim cum magnis aenean nunc erat, nostra senectus volutpat augue cubilia tempor neque morbi mus ut ad sem.",
        date: "2020-01-20",
        club_id: createdClubs[9]._id
      },
      {
        title: "NUEVO EQUIPO BUSCA",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit inceptos curae ullamcorper per cursus ad cubilia nulla vulputate urna sed, facilisi sociis pharetra vehicula velit magnis morbi nisi diam ornare eget bibendum malesuada ultricies tortor a. Non urna sociosqu molestie arcu montes volutpat dignissim eleifend leo pharetra, mus himenaeos imperdiet libero class cum taciti lacus fringilla. Malesuada nisl maecenas ornare euismod nisi rhoncus eleifend enim cum magnis aenean nunc erat, nostra senectus volutpat augue cubilia tempor neque morbi mus ut ad sem.",
        date: "2020-06-20",
        club_id: createdClubs[3]._id
      },
      {
        title: "SE BUSCA PORTERO",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit inceptos curae ullamcorper per cursus ad cubilia nulla vulputate urna sed, facilisi sociis pharetra vehicula velit magnis morbi nisi diam ornare eget bibendum malesuada ultricies tortor a. Non urna sociosqu molestie arcu montes volutpat dignissim eleifend leo pharetra, mus himenaeos imperdiet libero class cum taciti lacus fringilla. Malesuada nisl maecenas ornare euismod nisi rhoncus eleifend enim cum magnis aenean nunc erat, nostra senectus volutpat augue cubilia tempor neque morbi mus ut ad sem.",
        date: "2020-02-20",
        club_id: createdClubs[4]._id
      },
      {
        title: "COMIENZA UNA NUEVA AVENTURA",
        location: [40.3969897, -3.7357897],
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit inceptos curae ullamcorper per cursus ad cubilia nulla vulputate urna sed, facilisi sociis pharetra vehicula velit magnis morbi nisi diam ornare eget bibendum malesuada ultricies tortor a. Non urna sociosqu molestie arcu montes volutpat dignissim eleifend leo pharetra, mus himenaeos imperdiet libero class cum taciti lacus fringilla. Malesuada nisl maecenas ornare euismod nisi rhoncus eleifend enim cum magnis aenean nunc erat, nostra senectus volutpat augue cubilia tempor neque morbi mus ut ad sem.",
        date: "2020-07-01",
        club_id: createdClubs[2]._id
      },
      {
        title: "COMIENZA UNA NUEVA AVENTURA",
        location: [40.3969897, -3.7357897],
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit inceptos curae ullamcorper per cursus ad cubilia nulla vulputate urna sed, facilisi sociis pharetra vehicula velit magnis morbi nisi diam ornare eget bibendum malesuada ultricies tortor a. Non urna sociosqu molestie arcu montes volutpat dignissim eleifend leo pharetra, mus himenaeos imperdiet libero class cum taciti lacus fringilla. Malesuada nisl maecenas ornare euismod nisi rhoncus eleifend enim cum magnis aenean nunc erat, nostra senectus volutpat augue cubilia tempor neque morbi mus ut ad sem.",
        date: "2019-07-01",
        club_id: createdClubs[2]._id
      },
      {
        title: "ABIERTO ENTRENAMIENTOS PARA NUEVOS INTEGANTES",
        location: [40.3953098, -3.704617],
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit inceptos curae ullamcorper per cursus ad cubilia nulla vulputate urna sed, facilisi sociis pharetra vehicula velit magnis morbi nisi diam ornare eget bibendum malesuada ultricies tortor a. Non urna sociosqu molestie arcu montes volutpat dignissim eleifend leo pharetra, mus himenaeos imperdiet libero class cum taciti lacus fringilla. Malesuada nisl maecenas ornare euismod nisi rhoncus eleifend enim cum magnis aenean nunc erat, nostra senectus volutpat augue cubilia tempor neque morbi mus ut ad sem.",
        date: "2020-07-20",
        club_id: createdClubs[5]._id
      },
      {
        title: "ABIERTO ENTRENAMIENTOS PARA NUEVOS INTEGANTES",
        location: [40.3953098, -3.704617],
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit inceptos curae ullamcorper per cursus ad cubilia nulla vulputate urna sed, facilisi sociis pharetra vehicula velit magnis morbi nisi diam ornare eget bibendum malesuada ultricies tortor a. Non urna sociosqu molestie arcu montes volutpat dignissim eleifend leo pharetra, mus himenaeos imperdiet libero class cum taciti lacus fringilla. Malesuada nisl maecenas ornare euismod nisi rhoncus eleifend enim cum magnis aenean nunc erat, nostra senectus volutpat augue cubilia tempor neque morbi mus ut ad sem.",
        date: "2019-07-20",
        club_id: createdClubs[5]._id
      },
      {
        title: "SE BUSCA EQUIPO PARA JUGAR ESTE VERANO",
         description:"Lorem ipsum dolor sit amet consectetur adipiscing elit inceptos curae ullamcorper per cursus ad cubilia nulla vulputate urna sed, facilisi sociis pharetra vehicula velit magnis morbi nisi diam ornare eget bibendum malesuada ultricies tortor a. Non urna sociosqu molestie arcu montes volutpat dignissim eleifend leo pharetra, mus himenaeos imperdiet libero class cum taciti lacus fringilla. Malesuada nisl maecenas ornare euismod nisi rhoncus eleifend enim cum magnis aenean nunc erat, nostra senectus volutpat augue cubilia tempor neque morbi mus ut ad sem.",
         date: "2020-07-01",
         club_id: createdClubs[0]._id
    },
      {
        title: "NO TE QUEDES SIN DEMOSTRAR LO QUE VALES",
        location: [40.3736818, -3.7296272],
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit inceptos curae ullamcorper per cursus ad cubilia nulla vulputate urna sed, facilisi sociis pharetra vehicula velit magnis morbi nisi diam ornare eget bibendum malesuada ultricies tortor a. Non urna sociosqu molestie arcu montes volutpat dignissim eleifend leo pharetra, mus himenaeos imperdiet libero class cum taciti lacus fringilla. Malesuada nisl maecenas ornare euismod nisi rhoncus eleifend enim cum magnis aenean nunc erat, nostra senectus volutpat augue cubilia tempor neque morbi mus ut ad sem.",
        date: "2020-07-10",
        club_id: createdClubs[6]._id
      },
      {
        title: "EN BUSCA DE DEFENSA CONTUNDENTE",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit inceptos curae ullamcorper per cursus ad cubilia nulla vulputate urna sed, facilisi sociis pharetra vehicula velit magnis morbi nisi diam ornare eget bibendum malesuada ultricies tortor a. Non urna sociosqu molestie arcu montes volutpat dignissim eleifend leo pharetra, mus himenaeos imperdiet libero class cum taciti lacus fringilla. Malesuada nisl maecenas ornare euismod nisi rhoncus eleifend enim cum magnis aenean nunc erat, nostra senectus volutpat augue cubilia tempor neque morbi mus ut ad sem.",
        date: "2020-08-13",
        club_id: createdClubs[9]._id
      },
      {
        title: "COMIENZO ENTRENMIENTOS",
        location: [40.4462334, -3.7091072],
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit inceptos curae ullamcorper per cursus ad cubilia nulla vulputate urna sed, facilisi sociis pharetra vehicula velit magnis morbi nisi diam ornare eget bibendum malesuada ultricies tortor a. Non urna sociosqu molestie arcu montes volutpat dignissim eleifend leo pharetra, mus himenaeos imperdiet libero class cum taciti lacus fringilla. Malesuada nisl maecenas ornare euismod nisi rhoncus eleifend enim cum magnis aenean nunc erat, nostra senectus volutpat augue cubilia tempor neque morbi mus ut ad sem.",
        date: "2020-06-30",
        club_id: createdClubs[8]._id
      },
      {
        title: "SE BUSCA PORTERO",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit inceptos curae ullamcorper per cursus ad cubilia nulla vulputate urna sed, facilisi sociis pharetra vehicula velit magnis morbi nisi diam ornare eget bibendum malesuada ultricies tortor a. Non urna sociosqu molestie arcu montes volutpat dignissim eleifend leo pharetra, mus himenaeos imperdiet libero class cum taciti lacus fringilla. Malesuada nisl maecenas ornare euismod nisi rhoncus eleifend enim cum magnis aenean nunc erat, nostra senectus volutpat augue cubilia tempor neque morbi mus ut ad sem.",
        date: "2019-04-20",
        club_id: createdClubs[9]._id
      },
      {
        title: "NUEVO EQUIPO",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit inceptos curae ullamcorper per cursus ad cubilia nulla vulputate urna sed, facilisi sociis pharetra vehicula velit magnis morbi nisi diam ornare eget bibendum malesuada ultricies tortor a. Non urna sociosqu molestie arcu montes volutpat dignissim eleifend leo pharetra, mus himenaeos imperdiet libero class cum taciti lacus fringilla. Malesuada nisl maecenas ornare euismod nisi rhoncus eleifend enim cum magnis aenean nunc erat, nostra senectus volutpat augue cubilia tempor neque morbi mus ut ad sem.",
        date: "2020-06-22",
        club_id: createdClubs[9]._id
      },
      {
        title: "SE BUSCA PORTERO DA IGUAL EL NIVEL",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit inceptos curae ullamcorper per cursus ad cubilia nulla vulputate urna sed, facilisi sociis pharetra vehicula velit magnis morbi nisi diam ornare eget bibendum malesuada ultricies tortor a. Non urna sociosqu molestie arcu montes volutpat dignissim eleifend leo pharetra, mus himenaeos imperdiet libero class cum taciti lacus fringilla. Malesuada nisl maecenas ornare euismod nisi rhoncus eleifend enim cum magnis aenean nunc erat, nostra senectus volutpat augue cubilia tempor neque morbi mus ut ad sem.",
        date: "2020-03-20",
        club_id: createdClubs[0]._id
      },
      {
        title: "BUSCO EQUIPO CONTRA EL QUE JUGAR",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit inceptos curae ullamcorper per cursus ad cubilia nulla vulputate urna sed, facilisi sociis pharetra vehicula velit magnis morbi nisi diam ornare eget bibendum malesuada ultricies tortor a. Non urna sociosqu molestie arcu montes volutpat dignissim eleifend leo pharetra, mus himenaeos imperdiet libero class cum taciti lacus fringilla. Malesuada nisl maecenas ornare euismod nisi rhoncus eleifend enim cum magnis aenean nunc erat, nostra senectus volutpat augue cubilia tempor neque morbi mus ut ad sem.",
        date: "2020-03-20",
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