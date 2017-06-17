const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes/router');

const app = express();

app.use(bodyParser.json());
app.use('/', router);

const PORT = process.env.port || 3000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
