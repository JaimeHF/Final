const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ClubModel = require("./subdocuments/Club")
const PlayerModel = require("./subdocuments/Player")

const userSchema = new Schema({
  username: String,
  password: String,
  role: {type: String, enum: ["player", "club"]},
  clubData: ClubModel,
  playerData: PlayerModel,
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;