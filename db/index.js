const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/songs', { useNewUrlParser: true });

const songSchema = new mongoose.Schema({
  id: Number,
  name: String,
  plays: Number,
  likes: Number,
  reposts: Number,
});

const Songs = mongoose.model('Songs', songSchema);

const getSong = (id, callback) => {
  Songs.find({ id }, callback);
};

exports.getSong = getSong;
