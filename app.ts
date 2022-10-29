export {};
const User = require('./Model/User')
const express = require('express');
const app  = express();
const cors  = require('cors');
const path = require('path')
const mongoose = require('mongoose');
const connect = require('./startup/mongoDB')

app.use(cors());
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(express.json({ limit: '50mb' }));
app.use(express.static(path.join(__dirname, 'public')));

require('./controller/routes')(app);

// const port = process.env.PORT || 8080;
// const server = app.listen(port, () =>
//   console.log(`Listening on port ${port}...`)
// );

// =============================================================================================================================================== //
// ================================================================== MONGO DB =================================================================== //
// =============================================================================================================================================== //


// const mongoDB = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}${process.env.MONGO_CONNECTION}`;

// console.log(mongoDB)

// mongoose.connect(mongoDB, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }).then(() => {
//       console.log("connected to db")
//   }).catch((err : any) => console.log(err))

  

// module.exports = server;

connect()

async function example() {
  const user = await User.create({
    firstName: "Abdu",
    lastName: "mohamed",
    address: "peters bangs vej 123",
    postal: 2610,
    email: "abdulahi@hotmail.com",
    password: "12334"
  })
  
  console.log(user)
}

example();

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
