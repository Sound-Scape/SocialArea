const express = require('express');
const cors = require('cors');
const { getSong } = require('../db');

const app = express();
const port = process.env.PORT || 3004;

app.use(cors());

app.use(express.static('public'));

app.get('/api/stats/:id', (req, res) => {
  getSong(req.params.id, (err, data) => {
    res.json(data);
  });
});

app.listen(port, () => console.log(`Listening to port ${port}...`));
