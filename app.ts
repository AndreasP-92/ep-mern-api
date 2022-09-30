const express = require('express');
const app = express();
const cors = require('cors');

require('./startup/routes')(app);

app.use(cors());

const port = process.env.PORT || 8080;
const server = app.listen(port, () =>
  console.log(`Listening on port ${port}...`)
);

module.exports = server;
