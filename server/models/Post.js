const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const postSchema = new Schema({
  title: String,
  coord: {
    lat: Number,
    lng: Number
  },
  description: String,
  date: {type: Date,
  default: Date.now},
  club_id: {
    type: Schema.Types.ObjectId, 
    ref: "Club"},
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Post = mongoose.model('Post', postSchema);
module.exports = Post;