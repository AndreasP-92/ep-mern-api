import * as Events from './types/events';
const express : any = require('express');
const app : any  = express();
const cors : any  = require('cors');



app.use(cors());
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(express.json({ limit: '50mb' }));

require('./controller/routes')(app);

const port = process.env.PORT || 8080;
const server = app.listen(port, () =>
  console.log(`Listening on port ${port}...`)
);

module.exports = server;



