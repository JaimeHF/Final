const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const playerSchema = new Schema({
  imgPath: {
    type: String,
    default: `https://res.cloudinary.com/dwwfzwx93/image/upload/v1583865232/default_wye5xb.png`
  },
  position: {
    type: [String],
    enum: [`Portero`, `Defensa`, `Lateral`, `Centrocampista`, `Extremo`, `Delantero`]
  },
  match: [Array]

});

module.exports = playerSchema;