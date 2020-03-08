const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clubSchema = new Schema({
  imgPath: {
    type: String,
    default: `../public/images/escudodefault.png`
  },
  description: String,
});


module.exports = clubSchema;