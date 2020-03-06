const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ClubModel = require("../models/Club")
const ClubModel = require("../models")

const userSchema = new Schema({
  username: String,
  password: String,
  imgPath: {
    type: String,
    default: `../images/default.png`
  },
  clubData: ClubModel,
  userData: {
    position: {
      type: [String],
      enum: [`Portero`, `Defensa`, `Lateral`, `Centrocampista`, `Extremo`, `Delantero`]
    },
    match: [Array]
  }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;