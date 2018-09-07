const express = require('express');

const app = express();

app.use(express.static('public'));
app.get('/', (req, res) => res.send('GET request received!'));

app.listen(3004, () => console.log('Listening to port 3004...'));
