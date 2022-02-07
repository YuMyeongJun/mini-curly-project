const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const api = require('./routes/index');
const cors = require('cors');
app.use(cors());

app.use(express.static(__dirname));
app.use(cors({ origin: true, credentials: true }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', api);

app.listen(3001, () => console.log('Node.js Server is running on port 3001...'));