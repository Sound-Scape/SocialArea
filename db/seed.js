const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/songs');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => console.log('Database Connected!'));

const songSchema = new mongoose.Schema({
  id: Number,
  name: String,
  plays: Number,
  likes: Number,
  reposts: Number,
});

const Songs = mongoose.model('Songs', songSchema);

const randNum = function generateRandomNumber() { return Math.floor(Math.random() * 10000); };

for (let i = 0; i < 100; i += 1) {
  const stat = new Songs({
    id: i + 1, plays: randNum(), likes: randNum(), reposts: randNum(),
  });
  stat.save();
}

// db.dropDatabase();
