// require('dotenv').config();

// const mongoose = require("mongoose");
// const bcrypt = require("bcrypt");
// const User = require("../models/User");
// const Match = require("../models/Match");

// const bcryptSalt = 10;

// mongoose
//   .connect(`${process.env.DB_LOCAL}`, {useNewUrlParser: true})
//   .then(x => {
//     console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
//   })
//   .catch(err => {
//     console.error('Error connecting to mongo', err)
//   });


//   const arrPlayer = Array(33)
//     .fill()
//     .map(() => {
//         return new mongoose.mongo.ObjectId()
//     })

//     // const arrMatch = Array(5)
//     // .fill()
//     // .map(() => {
//     //     return new mongoose.mongo.ObjectId()
//     // })


// let users = [
//   {
//     _id:`${arrPlayer[0]}`,
//   username: "PACO HUERTO",
//   password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
//   imgPath: `../images/paco huerto.jpeg`,
//   position:[`Defensa`,`Lateral`],
// },
// {
//   _id:`${arrPlayer[1]}`,
//   username: "MACCO",
//   password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
//   imgPath: `../images/macco.jpeg`,
//   position:[`Lateral`,`Extremo`],
// },
// {
//   _id:`${arrPlayer[2]}`,
//   username: "CASTOLO",
//   password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
//   imgPath: `../images/castolo.jpeg`,
//   position:`Delantero`,
// },
// {
//   _id:`${arrPlayer[3]}`,
//   username: "JULIEN FAUBERT",
//   password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
//   imgPath: `../images/faubert.jpeg`,
//   position:[`Delantero`,`Centrocampista`]
// },
// {
//   _id:`${arrPlayer[4]}`,
//   username: "ROYSTON DRENTHE",
//   password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
//   imgPath: `../images/drenthe+.jpeg`,
//   position:`Lateral`,
// },
// {
//   _id:`${arrPlayer[5]}`,
//   username: "DENILSON",
//   password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
//   imgPath: `../images/denilson.jpeg`,
//   position:[`Extremo`,`Delantero`]
// },
// {
//   _id:`${arrPlayer[6]}`,
//   username: "MANOLO CABEZA",
//   password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
//   imgPath: `../images/default.png`,
//   position:`Extremo`,
// },
// {
//   _id:`${arrPlayer[7]}`,
//   username: "MAGICO GONZALEZ",
//   password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
//   imgPath: `../images/magico.jpeg`,
//   position:[`Extremo`,`Centrocampista`]
// },
// {
//   _id:`${arrPlayer[8]}`,
//   username: "JARIC",
//   password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
//   imgPath: `../images/jaric.jpg`,
//   position:`Lateral`,
// },
// {
//   _id:`${arrPlayer[9]}`,
//   username: "BRUCE HARPER",
//   password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
//   imgPath: `../images/bruce.jpeg`,
//   position:`Extremo`,
// },
// {
//   _id:`${arrPlayer[10]}`,
//   username: "MARK LENDER",
//   password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
//   imgPath: `../images/mark.jpeg`,
//   position:`Centrocampista`,
// },
// {
//   _id:`${arrPlayer[11]}`,
//   username: "OLIVER ATOM",
//   password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
//   imgPath: `../images/oliver.jpeg`,
//   position:`Delantero`,
// },
// {
//   _id:`${arrPlayer[12]}`,
//   username: "DON MANUE",
//   password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
//   imgPath: `../images/donmanue.jpeg`,
//   position:`Centrocampista`,
// },
// {
//   _id:`${arrPlayer[13]}`,
//   username: "STREMER",
//   password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
//   imgPath: `../images/stremer.jpegç`,
//   position:`Defensa`,
// },
// {
//   _id:`${arrPlayer[14]}`,
//   username: "CAMPBELL",
//   password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
//   imgPath: `../images/sol.jpeg`,
//   position:`Lateral`,
// },
// {
//   _id:`${arrPlayer[15]}`,
//   username: "DE PEDRO",
//   password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
//   imgPath: `../images/pedro.jpeg`,
//   position:`Extremo`,
// },
// {
//   _id:`${arrPlayer[16]}`,
//   username: "VICENTE",
//   password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
//   imgPath: `../images/vicente.jpeg`,
//   position:`Extremo`,
// },
// {
//   _id:`${arrPlayer[17]}`,
//   username: "RUI COSTA",
//   password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
//   imgPath: `../images/rui.jpeg`,
//   position:`Centrocampista`,
// },
// {
//   _id:`${arrPlayer[18]}`,
//   username: "PETIT",
//   password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
//   imgPath: `../images/petit.jpeg`,
//   position:`Centrocampista`,
// },
// {
//   _id:`${arrPlayer[19]}`,
//   username: "VIERA",
//   password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
//   imgPath: `../images/viera.jpeg`,
//   position:`Centrocampista`,
// },
// {
//   _id:`${arrPlayer[20]}`,
//   username: "NEDVED",
//   password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
//   imgPath: `../images/nedved.jpeg`,
//   position:`Centrocampista`,
// },
// {
//   _id:`${arrPlayer[21]}`,
//   username: "STANKOVIC",
//   password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
//   imgPath: `../images/dejan+.jpeg`,
//   position:`Centrocampista`,
// },
// {
//   _id:`${arrPlayer[22]}`,
//   username: "JUAN CARLOS VALERON",
//   password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
//   imgPath: `../images/valeron.jpeg`,
//   position:`Centrocampista`,
// },
// {
//   _id:`${arrPlayer[23]}`,
//   username: "AMANDA SAN PEDRO",
//   password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
//   imgPath: `../images/amanda.jpeg`,
//   position:`Centrocampista`,
// },
// {
//   _id:`${arrPlayer[24]}`,
//   username: "VICKY LOSADA",
//   password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
//   imgPath: `../images/vicky.jpeg`,
//   position:`Centrocampista`,
// },
// {
//   _id:`${arrPlayer[25]}`,
//   username: "FLAPPY",
//   password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
//   imgPath: `../images/flappy.png`,
//   position:`Defensa`,
// },
// {
//   _id:`${arrPlayer[26]}`,
//   username: "PEPE REINA",
//   password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
//   imgPath: `../images/default.png`,
//   position:`Portero`,
// },
// {
//   _id:`${arrPlayer[27]}`,
//   username: "TONI DOBLAS",
//   password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
//   imgPath: `../public/images/doblas.jpg`,
//   position:`Portero`,
// },
// {
//   _id:`${arrPlayer[28]}`,
//   username: "WATER SAMUEL",
//   password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
//   imgPath: `../public/images/samuel.jpeg`,
//   position:`Defensa`,
// },
// {
//   _id:`${arrPlayer[29]}`,
//   username: "CONTRERAS",
//   password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
//   imgPath: `../public/images/contreras.jpeg`,
//   position:`Portero`,
// },
//   {
//     _id:`${arrPlayer[30]}`,
//   username: "IVANOV",
//   password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
//   imgPath: `../public/images/ivanov.jpeg`,
//   position:`Portero`,
// },
// {
//   _id:`${arrPlayer[31]}`,
//   username: "FERNANDO HIERRO",
//   password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
//   imgPath: `../public/images/fernando.jpeg`,
//   position:`Defensa`,
// }

// ]


// let macthes =[
//   {
//     // _id:`${arrMatch[0]}`,
//    macthname: "PARTIDO DE DOMINGO",
//   price: 2.5,
//   location: [40.4375097,-3.6606042],
//   date: "2020-03-15",
//   time:"18:00",
//   TYPE:`Futbol 7`,
//   user_id: [`${arrPlayer[24]}`,`${arrPlayer[27]}`,`${arrPlayer[22]}`,`${arrPlayer[28]}`,`${arrPlayer[0]}`,`${arrPlayer[19]}`,`${arrPlayer[15]}`,`${arrPlayer[11]}`,`${arrPlayer[9]}`],
//   userCreate_id:`${arrPlayer[0]}`, 
//   },
//   {
//     // _id:`${arrMatch[1]}`,
//     macthname: "MIERCOLES NOCHE",
//    price: 2.5,
//    location: [40.4456018,-3.709284],
//    date: "2020-03-18",
//    time:"21:00",
//    TYPE:`Futbol 11`,
//    user_id: [`${arrPlayer[15]}`,`${arrPlayer[21]}`,`${arrPlayer[20]}`,`${arrPlayer[18]}`,`${arrPlayer[17]}`,`${arrPlayer[16]}`],
//    userCreate_id:`${arrPlayer[15]}`, 
//    },
//    {
//     // _id:`${arrMatch[2]}`,
//     macthname: "CLASICO DE VIERNES",
//    price: 2.5,
//    location: [40.3954079,-3.7047247],
//    date: "2020-03-13",
//    time:"22:00",
//    TYPE:`Futbol 7`,
//    user_id: [`${arrPlayer[25]}`,`${arrPlayer[14]}`,`${arrPlayer[23]}`,`${arrPlayer[30]}`,`${arrPlayer[31]}`,`${arrPlayer[13]}`,`${arrPlayer[12]}`,`${arrPlayer[10]}`,`${arrPlayer[6]}`,`${arrPlayer[1]}`,`${arrPlayer[2]}`,`${arrPlayer[3]}`,`${arrPlayer[4]}`],
//    userCreate_id:`${arrPlayer[25]}`, 
//    },
//    {
//     // _id:`${arrMatch[3]}`,
//     macthname: "LUNES MAÑANA",
//    price: 2.5,
//    location: [40.6125205,-3.7168026],
//    date: "2020-03-16",
//    time:"10:00",
//    TYPE:`Futbol Sala`,
//    user_id: [`${arrPlayer[29]}`,`${arrPlayer[8]}`,`${arrPlayer[7]}`,`${arrPlayer[5]}`],
//    userCreate_id:`${arrPlayer[29]}`, 
//    },
//    {
//     // _id:`${arrMatch[4]}`,
//     macthname: "CLASICO DE VIERNES",
//    price: 2.5,
//    location: [40.3954079,-3.7047247],
//    date: "2020-03-20",
//    time:"22:00",
//    TYPE:`Futbol 7`,
//    user_id:[`${arrPlayer[25]}`,`${arrPlayer[8]}`,`${arrPlayer[7]}`,`${arrPlayer[23]}`,`${arrPlayer[30]}`],
//    userCreate_id:`${arrPlayer[25]}`, 
//    }
// ]



//   User.deleteMany()
//   .then(() => {
//     return User.insertMany(users);
//   })
//   .then(() => {
//     console.log("succesfully added all the data");
//     mongoose.connection.close();
//     process.exit(0);
  
// })
// .catch(err => {
//   console.error("Error connecting to mongo", err);
// });



// Match.deleteMany()
// .then(() => {
//   return Match.insertMany(macthes);
// })
// .then(() => {
//   console.log("succesfully added all the data");
//   mongoose.connection.close();
//   process.exit(0);
// })
// .catch(err => {
// console.error("Error connecting to mongo", err);
// });
