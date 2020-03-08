const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const playerSchema = new Schema({
  imgPath: {
    type: String,
    default: `../images/default.png`
  },
  position: {
    type: [String],
    enum: [`Portero`, `Defensa`, `Lateral`, `Centrocampista`, `Extremo`, `Delantero`]
  },
  match: [Array]

});

module.exports = playerSchema;