const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/statistics');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => console.log('Database Connected!'));
