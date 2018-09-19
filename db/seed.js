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

const randNumPlays = function generateRandomNumber() { return Math.floor(Math.random() * 10000); };
const randNumLikes = function generateRandomNumber() { return Math.floor(Math.random() * 1000); };
const randNumReposts = function generateRandomNumber() { return Math.floor(Math.random() * 500); };

for (let i = 0; i < 100; i += 1) {
  const stat = new Songs({
    id: i + 1, plays: randNumPlays(), likes: randNumLikes(), reposts: randNumReposts(),
  });
  stat.save();
}

// db.dropDatabase();
