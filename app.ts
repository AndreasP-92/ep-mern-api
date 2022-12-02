export { };

const express = require('express');
const connectMongo = require('./startup/mongoDB')
const connectMysql = require("./startup/mysql.js");

const cors = require('cors');
const path = require('path')

const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./repository/swagger.json');

app.use(cors());
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(express.json({ limit: '50mb' }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// app.use('/api', routes)

require('./controller/routes')(app);

// connectMongo();



connectMysql.connectMysql(connectMysql.initializeMysql());

// const db = require('./startup/mysql')

// db.sequelize.sync()
// .then(() => {
//   console.log("Synced db.");
// })
// .catch((err:any) => {
//   console.log("Failed to sync db: " + err.message);
// });

const port = process.env.PORT || 8080;

app.listen(port, () =>
  console.log(`Listening on port ${port}...`)
);


app.use(
  '/api-docs',
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument)
);