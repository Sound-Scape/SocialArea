const express = require('express');
const { getSong } = require('../db/index.js');

const app = express();
const port = process.env.PORT || 3004;

app.use(express.static('public'));
app.use('/songs/:id', express.static('public'));

app.get('/api/:id', (req, res) => {
  getSong(req.params.id, (err, data) => {
    res.send(data[0]);
  });
});

app.listen(port, () => console.log(`Listening to port ${port}...`));
