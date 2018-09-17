const express = require('express');
const bodyParser = require('body-parser');
const { getAll } = require('../db/index.js');

const app = express();

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/song', (req, res) => {
  getAll('1', (err, data) => {
    res.send(JSON.stringify(data[0]));
  });
});

app.listen(3004, () => console.log('Listening to port 3004...'));
