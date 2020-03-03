const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const macthSchema = new Schema({
  macthname: String,
  price: Number,
  location: [Number],
  date: Date,
  time: String,
  TYPE: {
    type: [String],
    enum:[`Futbol Sala`,`Futbol 11`,`Futbol 7`]
  },
  userCreate_id: {
    type: Schema.Types.ObjectId, 
    ref: "User"},

  user_id:[ {
    type: Schema.Types.ObjectId, 
    ref: "User"}]
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Macth = mongoose.model('Macth', macthSchema);
module.exports = Macth;
