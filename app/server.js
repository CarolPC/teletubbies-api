const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const PORT = process.env.port || 3000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
