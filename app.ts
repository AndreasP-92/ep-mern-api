export { };

const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes');
const connect = require('./startup/mongoDB')
const cors = require('cors');
const path = require('path')

const app = express();

app.use(cors());
app.use(express.urlencoded({limit: '50mb', extended: true}));
app.use(express.json({limit: '50mb'}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// app.use('/api', routes)

require('./controller/routes')(app);

connect()

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
