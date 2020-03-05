require('dotenv').config();

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Club = require("../models/Club");
const Post = require("../models/Post");
const bcryptSalt = 10;


mongoose
  .connect(`${process.env.DB_LOCAL}`, {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

const arrClub = Array(10)
    .fill()
    .map(() => {
        return new mongoose.mongo.ObjectId()
    })

let clubs =[{
    _id:`${arrClub[0]}`,
    clubname: "ALICATES FS",
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
    imgPath: `../public/images/alicates.png`,
    description: "Wooolaaa!! Somos un equipo formado por un grupo de amigos que jugamos la liga local de tres cantos, estamos en la segunda categoria y nuestras intenciones son de ascenso. No solo quedamos para jugar al futbol, despues de cada partido toca un poco de cerveza con el equipo, no todo va a ser cansarse corriendo!!",
  },
  {
    _id:`${arrClub[1]}`,
    clubname: "COMARCA FS",
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
    imgPath: `../public/images/comarca.png`,
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit inceptos curae ullamcorper per cursus ad cubilia nulla vulputate urna sed, facilisi sociis pharetra vehicula velit magnis morbi nisi diam ornare eget bibendum malesuada ultricies tortor a. Non urna sociosqu molestie arcu montes volutpat dignissim eleifend leo pharetra, mus himenaeos imperdiet libero class cum taciti lacus fringilla. Malesuada nisl maecenas ornare euismod nisi rhoncus eleifend enim cum magnis aenean nunc erat, nostra senectus volutpat augue cubilia tempor neque morbi mus ut ad sem.",
  },
  {
    _id:`${arrClub[2]}`,
    clubname: "C.D. BETIS SAN ISIDRO",
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
     imgPath: `../public/images/Betis-San-Isidro-escudo.jpg`,
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit inceptos curae ullamcorper per cursus ad cubilia nulla vulputate urna sed, facilisi sociis pharetra vehicula velit magnis morbi nisi diam ornare eget bibendum malesuada ultricies tortor a. Non urna sociosqu molestie arcu montes volutpat dignissim eleifend leo pharetra, mus himenaeos imperdiet libero class cum taciti lacus fringilla. Malesuada nisl maecenas ornare euismod nisi rhoncus eleifend enim cum magnis aenean nunc erat, nostra senectus volutpat augue cubilia tempor neque morbi mus ut ad sem.",
  },
  {
    _id:`${arrClub[3]}`,
    clubname: "MACABI DE LEVANTAR F7",
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
     imgPath: `../public/images/macabi.jpeg`,
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit inceptos curae ullamcorper per cursus ad cubilia nulla vulputate urna sed, facilisi sociis pharetra vehicula velit magnis morbi nisi diam ornare eget bibendum malesuada ultricies tortor a. Non urna sociosqu molestie arcu montes volutpat dignissim eleifend leo pharetra, mus himenaeos imperdiet libero class cum taciti lacus fringilla. Malesuada nisl maecenas ornare euismod nisi rhoncus eleifend enim cum magnis aenean nunc erat, nostra senectus volutpat augue cubilia tempor neque morbi mus ut ad sem.",
  },
  {
    _id:`${arrClub[4]}`,
    clubname: "BORUSIA DE DONUT F7",
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
     imgPath: `../public/images/donuts.jpg`,
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit inceptos curae ullamcorper per cursus ad cubilia nulla vulputate urna sed, facilisi sociis pharetra vehicula velit magnis morbi nisi diam ornare eget bibendum malesuada ultricies tortor a. Non urna sociosqu molestie arcu montes volutpat dignissim eleifend leo pharetra, mus himenaeos imperdiet libero class cum taciti lacus fringilla. Malesuada nisl maecenas ornare euismod nisi rhoncus eleifend enim cum magnis aenean nunc erat, nostra senectus volutpat augue cubilia tempor neque morbi mus ut ad sem.",
  },
  {
    _id:`${arrClub[5]}`,
    clubname: "A.D. GIGANTES",
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
     imgPath: `../public/images/GIGANTES.jpg`,
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit inceptos curae ullamcorper per cursus ad cubilia nulla vulputate urna sed, facilisi sociis pharetra vehicula velit magnis morbi nisi diam ornare eget bibendum malesuada ultricies tortor a. Non urna sociosqu molestie arcu montes volutpat dignissim eleifend leo pharetra, mus himenaeos imperdiet libero class cum taciti lacus fringilla. Malesuada nisl maecenas ornare euismod nisi rhoncus eleifend enim cum magnis aenean nunc erat, nostra senectus volutpat augue cubilia tempor neque morbi mus ut ad sem.",
  },
  {
    _id:`${arrClub[6]}`,
    clubname: "RACING VILLAVERDE C.F.",
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
     imgPath: `../public/images/Racing_Villaverde.jpg`,
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit inceptos curae ullamcorper per cursus ad cubilia nulla vulputate urna sed, facilisi sociis pharetra vehicula velit magnis morbi nisi diam ornare eget bibendum malesuada ultricies tortor a. Non urna sociosqu molestie arcu montes volutpat dignissim eleifend leo pharetra, mus himenaeos imperdiet libero class cum taciti lacus fringilla. Malesuada nisl maecenas ornare euismod nisi rhoncus eleifend enim cum magnis aenean nunc erat, nostra senectus volutpat augue cubilia tempor neque morbi mus ut ad sem.",
  },
  {
    _id:`${arrClub[7]}`,
    clubname: "CELTIC CASTILLA C.F.",
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
     imgPath: `../public/images/CELTIC_CASTILLA.png`,
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit inceptos curae ullamcorper per cursus ad cubilia nulla vulputate urna sed, facilisi sociis pharetra vehicula velit magnis morbi nisi diam ornare eget bibendum malesuada ultricies tortor a. Non urna sociosqu molestie arcu montes volutpat dignissim eleifend leo pharetra, mus himenaeos imperdiet libero class cum taciti lacus fringilla. Malesuada nisl maecenas ornare euismod nisi rhoncus eleifend enim cum magnis aenean nunc erat, nostra senectus volutpat augue cubilia tempor neque morbi mus ut ad sem.",
  },
  {
    _id:`${arrClub[8]}`,
    clubname: "C.D. ALONSO CANO",
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
     imgPath: `../public/images/ALONSO .JPG`,
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit inceptos curae ullamcorper per cursus ad cubilia nulla vulputate urna sed, facilisi sociis pharetra vehicula velit magnis morbi nisi diam ornare eget bibendum malesuada ultricies tortor a. Non urna sociosqu molestie arcu montes volutpat dignissim eleifend leo pharetra, mus himenaeos imperdiet libero class cum taciti lacus fringilla. Malesuada nisl maecenas ornare euismod nisi rhoncus eleifend enim cum magnis aenean nunc erat, nostra senectus volutpat augue cubilia tempor neque morbi mus ut ad sem.",
  },
  {
    _id:`${arrClub[9]}`,
    clubname: "ASTON BIRRA FS",
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
     imgPath: `../public/images/astonbirra.jpg`,
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit inceptos curae ullamcorper per cursus ad cubilia nulla vulputate urna sed, facilisi sociis pharetra vehicula velit magnis morbi nisi diam ornare eget bibendum malesuada ultricies tortor a. Non urna sociosqu molestie arcu montes volutpat dignissim eleifend leo pharetra, mus himenaeos imperdiet libero class cum taciti lacus fringilla. Malesuada nisl maecenas ornare euismod nisi rhoncus eleifend enim cum magnis aenean nunc erat, nostra senectus volutpat augue cubilia tempor neque morbi mus ut ad sem.",
  },
]


let post =[
    {
    title: "VEN A PROBAR SUERTE",
     location: [40.4462334,-3.7091072],
     description:"C.D. ALONSO CANO anuncia que con el comienzo de la pretenmporada el proximo dia 15 de agosto ha decidido abrir sus puertas a todo el mundo que quiera venir a entrenar y probas suerte para conseguir plaza en el equipo para la temporada.Somos un equipo con un muy buen ambiente y lo primordial venir con muchas ganas de pasarlo bien y trabajar",
     date: new Date(2020,07,10),
     club_id: `${arrClub[8]}`,
},
{
    title: "SE BUSCA PORTERO",
     description:"Lorem ipsum dolor sit amet consectetur adipiscing elit inceptos curae ullamcorper per cursus ad cubilia nulla vulputate urna sed, facilisi sociis pharetra vehicula velit magnis morbi nisi diam ornare eget bibendum malesuada ultricies tortor a. Non urna sociosqu molestie arcu montes volutpat dignissim eleifend leo pharetra, mus himenaeos imperdiet libero class cum taciti lacus fringilla. Malesuada nisl maecenas ornare euismod nisi rhoncus eleifend enim cum magnis aenean nunc erat, nostra senectus volutpat augue cubilia tempor neque morbi mus ut ad sem.",
     date: "2020-06-17",
     club_id: `${arrClub[0]}`,
},
{
    title: "COMIENZA PLAZO DE PRUEBAS PARA EL PRIMER EQUIPO",
     location: [40.4032248,-3.6685674],
     description:"Lorem ipsum dolor sit amet consectetur adipiscing elit inceptos curae ullamcorper per cursus ad cubilia nulla vulputate urna sed, facilisi sociis pharetra vehicula velit magnis morbi nisi diam ornare eget bibendum malesuada ultricies tortor a. Non urna sociosqu molestie arcu montes volutpat dignissim eleifend leo pharetra, mus himenaeos imperdiet libero class cum taciti lacus fringilla. Malesuada nisl maecenas ornare euismod nisi rhoncus eleifend enim cum magnis aenean nunc erat, nostra senectus volutpat augue cubilia tempor neque morbi mus ut ad sem.",
     date: "2020-07-20",
     club_id: `${arrClub[7]}`,
},
{
    title: "SE BUSCA DELANTERO GOLEADOR Y HABIL EN EL TERCER TIEMPO",
     description:"Lorem ipsum dolor sit amet consectetur adipiscing elit inceptos curae ullamcorper per cursus ad cubilia nulla vulputate urna sed, facilisi sociis pharetra vehicula velit magnis morbi nisi diam ornare eget bibendum malesuada ultricies tortor a. Non urna sociosqu molestie arcu montes volutpat dignissim eleifend leo pharetra, mus himenaeos imperdiet libero class cum taciti lacus fringilla. Malesuada nisl maecenas ornare euismod nisi rhoncus eleifend enim cum magnis aenean nunc erat, nostra senectus volutpat augue cubilia tempor neque morbi mus ut ad sem.",
     date: "2020-01-20",
     club_id: `${arrClub[9]}`,
},
{
    title: "NUEVO EQUIPO BUSCA",
     description:"Lorem ipsum dolor sit amet consectetur adipiscing elit inceptos curae ullamcorper per cursus ad cubilia nulla vulputate urna sed, facilisi sociis pharetra vehicula velit magnis morbi nisi diam ornare eget bibendum malesuada ultricies tortor a. Non urna sociosqu molestie arcu montes volutpat dignissim eleifend leo pharetra, mus himenaeos imperdiet libero class cum taciti lacus fringilla. Malesuada nisl maecenas ornare euismod nisi rhoncus eleifend enim cum magnis aenean nunc erat, nostra senectus volutpat augue cubilia tempor neque morbi mus ut ad sem.",
     date: "2020-06-20",
     club_id: `${arrClub[3]}`,
},
{
    title: "SE BUSCA PORTERO",
     description:"Lorem ipsum dolor sit amet consectetur adipiscing elit inceptos curae ullamcorper per cursus ad cubilia nulla vulputate urna sed, facilisi sociis pharetra vehicula velit magnis morbi nisi diam ornare eget bibendum malesuada ultricies tortor a. Non urna sociosqu molestie arcu montes volutpat dignissim eleifend leo pharetra, mus himenaeos imperdiet libero class cum taciti lacus fringilla. Malesuada nisl maecenas ornare euismod nisi rhoncus eleifend enim cum magnis aenean nunc erat, nostra senectus volutpat augue cubilia tempor neque morbi mus ut ad sem.",
     date: "2020-02-20",
     club_id: `${arrClub[4]}`,
},
{
    title: "COMIENZA UNA NUEVA AVENTURA",
     location: [40.3969897,-3.7357897],
     description:"Lorem ipsum dolor sit amet consectetur adipiscing elit inceptos curae ullamcorper per cursus ad cubilia nulla vulputate urna sed, facilisi sociis pharetra vehicula velit magnis morbi nisi diam ornare eget bibendum malesuada ultricies tortor a. Non urna sociosqu molestie arcu montes volutpat dignissim eleifend leo pharetra, mus himenaeos imperdiet libero class cum taciti lacus fringilla. Malesuada nisl maecenas ornare euismod nisi rhoncus eleifend enim cum magnis aenean nunc erat, nostra senectus volutpat augue cubilia tempor neque morbi mus ut ad sem.",
     date: "2020-07-01",
     club_id: `${arrClub[2]}`,
},
{
    title: "COMIENZA UNA NUEVA AVENTURA",
     location: [40.3969897,-3.7357897],
     description:"Lorem ipsum dolor sit amet consectetur adipiscing elit inceptos curae ullamcorper per cursus ad cubilia nulla vulputate urna sed, facilisi sociis pharetra vehicula velit magnis morbi nisi diam ornare eget bibendum malesuada ultricies tortor a. Non urna sociosqu molestie arcu montes volutpat dignissim eleifend leo pharetra, mus himenaeos imperdiet libero class cum taciti lacus fringilla. Malesuada nisl maecenas ornare euismod nisi rhoncus eleifend enim cum magnis aenean nunc erat, nostra senectus volutpat augue cubilia tempor neque morbi mus ut ad sem.",
     date: "2019-07-01",
     club_id: `${arrClub[2]}`,
},
{
    title: "ABIERTO ENTRENAMIENTOS PARA NUEVOS INTEGANTES",
     location: [40.3953098,-3.704617],
     description:"Lorem ipsum dolor sit amet consectetur adipiscing elit inceptos curae ullamcorper per cursus ad cubilia nulla vulputate urna sed, facilisi sociis pharetra vehicula velit magnis morbi nisi diam ornare eget bibendum malesuada ultricies tortor a. Non urna sociosqu molestie arcu montes volutpat dignissim eleifend leo pharetra, mus himenaeos imperdiet libero class cum taciti lacus fringilla. Malesuada nisl maecenas ornare euismod nisi rhoncus eleifend enim cum magnis aenean nunc erat, nostra senectus volutpat augue cubilia tempor neque morbi mus ut ad sem.",
     date: "2020-07-20",
     club_id: `${arrClub[5]}`,
},
{
    title: "ABIERTO ENTRENAMIENTOS PARA NUEVOS INTEGANTES",
     location: [40.3953098,-3.704617],
     description:"Lorem ipsum dolor sit amet consectetur adipiscing elit inceptos curae ullamcorper per cursus ad cubilia nulla vulputate urna sed, facilisi sociis pharetra vehicula velit magnis morbi nisi diam ornare eget bibendum malesuada ultricies tortor a. Non urna sociosqu molestie arcu montes volutpat dignissim eleifend leo pharetra, mus himenaeos imperdiet libero class cum taciti lacus fringilla. Malesuada nisl maecenas ornare euismod nisi rhoncus eleifend enim cum magnis aenean nunc erat, nostra senectus volutpat augue cubilia tempor neque morbi mus ut ad sem.",
     date: "2019-07-20",
     club_id: `${arrClub[5]}`,
},
{
    title: "SE BUSCA EQUIPO PARA JUGAR ESTE VERANO",
     description:"Lorem ipsum dolor sit amet consectetur adipiscing elit inceptos curae ullamcorper per cursus ad cubilia nulla vulputate urna sed, facilisi sociis pharetra vehicula velit magnis morbi nisi diam ornare eget bibendum malesuada ultricies tortor a. Non urna sociosqu molestie arcu montes volutpat dignissim eleifend leo pharetra, mus himenaeos imperdiet libero class cum taciti lacus fringilla. Malesuada nisl maecenas ornare euismod nisi rhoncus eleifend enim cum magnis aenean nunc erat, nostra senectus volutpat augue cubilia tempor neque morbi mus ut ad sem.",
     date: "2020-07-01",
     club_id: `${arrClub[0]}`,
},
{
    title: "NO TE QUEDES SIN DEMOSTRAR LO QUE VALES",
     location: [40.3736818,-3.7296272],
     description:"Lorem ipsum dolor sit amet consectetur adipiscing elit inceptos curae ullamcorper per cursus ad cubilia nulla vulputate urna sed, facilisi sociis pharetra vehicula velit magnis morbi nisi diam ornare eget bibendum malesuada ultricies tortor a. Non urna sociosqu molestie arcu montes volutpat dignissim eleifend leo pharetra, mus himenaeos imperdiet libero class cum taciti lacus fringilla. Malesuada nisl maecenas ornare euismod nisi rhoncus eleifend enim cum magnis aenean nunc erat, nostra senectus volutpat augue cubilia tempor neque morbi mus ut ad sem.",
     date: "2020-07-10",
     club_id: `${arrClub[6]}`,
},
{
    title: "EN BUSCA DE DEFENSA CONTUNDENTE",
     description:"Lorem ipsum dolor sit amet consectetur adipiscing elit inceptos curae ullamcorper per cursus ad cubilia nulla vulputate urna sed, facilisi sociis pharetra vehicula velit magnis morbi nisi diam ornare eget bibendum malesuada ultricies tortor a. Non urna sociosqu molestie arcu montes volutpat dignissim eleifend leo pharetra, mus himenaeos imperdiet libero class cum taciti lacus fringilla. Malesuada nisl maecenas ornare euismod nisi rhoncus eleifend enim cum magnis aenean nunc erat, nostra senectus volutpat augue cubilia tempor neque morbi mus ut ad sem.",
     date: "2020-08-13",
     club_id: `${arrClub[9]}`,
},
{
    title: "COMIENZO ENTRENMIENTOS",
     location: [40.4462334,-3.7091072],
     description:"Lorem ipsum dolor sit amet consectetur adipiscing elit inceptos curae ullamcorper per cursus ad cubilia nulla vulputate urna sed, facilisi sociis pharetra vehicula velit magnis morbi nisi diam ornare eget bibendum malesuada ultricies tortor a. Non urna sociosqu molestie arcu montes volutpat dignissim eleifend leo pharetra, mus himenaeos imperdiet libero class cum taciti lacus fringilla. Malesuada nisl maecenas ornare euismod nisi rhoncus eleifend enim cum magnis aenean nunc erat, nostra senectus volutpat augue cubilia tempor neque morbi mus ut ad sem.",
     date: "2020-06-30",
     club_id: `${arrClub[8]}`,
},
{
    title: "SE BUSCA PORTERO",
     description:"Lorem ipsum dolor sit amet consectetur adipiscing elit inceptos curae ullamcorper per cursus ad cubilia nulla vulputate urna sed, facilisi sociis pharetra vehicula velit magnis morbi nisi diam ornare eget bibendum malesuada ultricies tortor a. Non urna sociosqu molestie arcu montes volutpat dignissim eleifend leo pharetra, mus himenaeos imperdiet libero class cum taciti lacus fringilla. Malesuada nisl maecenas ornare euismod nisi rhoncus eleifend enim cum magnis aenean nunc erat, nostra senectus volutpat augue cubilia tempor neque morbi mus ut ad sem.",
     date: "2019-04-20",
     club_id: `${arrClub[9]}`,
},
{
    title: "NUEVO EQUIPO",
     description:"Lorem ipsum dolor sit amet consectetur adipiscing elit inceptos curae ullamcorper per cursus ad cubilia nulla vulputate urna sed, facilisi sociis pharetra vehicula velit magnis morbi nisi diam ornare eget bibendum malesuada ultricies tortor a. Non urna sociosqu molestie arcu montes volutpat dignissim eleifend leo pharetra, mus himenaeos imperdiet libero class cum taciti lacus fringilla. Malesuada nisl maecenas ornare euismod nisi rhoncus eleifend enim cum magnis aenean nunc erat, nostra senectus volutpat augue cubilia tempor neque morbi mus ut ad sem.",
     date: "2020-06-22",
     club_id: `${arrClub[9]}`,
},
{
    title: "SE BUSCA PORTERO DA IGUAL EL NIVEL",
     description:"Lorem ipsum dolor sit amet consectetur adipiscing elit inceptos curae ullamcorper per cursus ad cubilia nulla vulputate urna sed, facilisi sociis pharetra vehicula velit magnis morbi nisi diam ornare eget bibendum malesuada ultricies tortor a. Non urna sociosqu molestie arcu montes volutpat dignissim eleifend leo pharetra, mus himenaeos imperdiet libero class cum taciti lacus fringilla. Malesuada nisl maecenas ornare euismod nisi rhoncus eleifend enim cum magnis aenean nunc erat, nostra senectus volutpat augue cubilia tempor neque morbi mus ut ad sem.",
     date: "2020-03-20",
     club_id: `${arrClub[0]}`,
},
{
    title: "BUSCO EQUIPO CONTRA EL QUE JUGAR",
     description:"Lorem ipsum dolor sit amet consectetur adipiscing elit inceptos curae ullamcorper per cursus ad cubilia nulla vulputate urna sed, facilisi sociis pharetra vehicula velit magnis morbi nisi diam ornare eget bibendum malesuada ultricies tortor a. Non urna sociosqu molestie arcu montes volutpat dignissim eleifend leo pharetra, mus himenaeos imperdiet libero class cum taciti lacus fringilla. Malesuada nisl maecenas ornare euismod nisi rhoncus eleifend enim cum magnis aenean nunc erat, nostra senectus volutpat augue cubilia tempor neque morbi mus ut ad sem.",
     date: "2020-03-20",
     club_id: `${arrClub[1]}`,
},   
]



  Club.deleteMany()
  .then(() => {
    return Club.insertMany(clubs);
  })
  .then(() => {
    console.log("succesfully added all the data");
    mongoose.connection.close();
    process.exit(0);
  })
.catch(err => {
  console.error("Error connecting to mongo", err);
});



Post.deleteMany()
.then(() => {
  return Post.insertMany(post);
})
.then(() => {
  console.log("succesfully added all the data");
  mongoose.connection.close();
  process.exit(0);
})
.catch(err => {
console.error("Error connecting to mongo", err);
});

