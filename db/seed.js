const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/statistics');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => console.log('Database Connected!'));

const statSchema = new mongoose.Schema({
  id: Number,
  name: String,
  plays: Number,
  likes: Number,
  reposts: Number,
});

const totalStats = [];
const Statistics = mongoose.model('Statistics', statSchema);

const randNum = function generateRandomNumber() { return Math.floor(Math.random() * 10000); };

for (let i = 0; i < 100; i += 1) {
  const stat = new Statistics({ plays: randNum(), likes: randNum(), reposts: randNum() });
  stat.save();
  totalStats.push(stat);
}

console.log(totalStats);
// db.dropDatabase();
