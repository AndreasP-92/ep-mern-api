import * as Events from './types/events';
const express : any = require('express');
const app : any  = express();
const cors : any  = require('cors');
const path : any = require('path')
const mongoose = require('mongoose');

app.use(cors());
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(express.json({ limit: '50mb' }));
app.use(express.static(path.join(__dirname, 'public')));

require('./controller/routes')(app);

const port = process.env.PORT || 8080;
const server = app.listen(port, () =>
  console.log(`Listening on port ${port}...`)
);

// =============================================================================================================================================== //
// ================================================================== MONGO DB =================================================================== //
// =============================================================================================================================================== //


const mongoDB = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}${process.env.MONGO_CONNECTION}`;

console.log(mongoDB)

mongoose.connect(mongoDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
      console.log("connected to db")
  }).catch((err : any) => console.log(err))

  

module.exports = server;