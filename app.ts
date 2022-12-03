export { };

const express = require('express');
const connectMongo = require('./startup/mongoDB')

const connectNeo4j = require('./startup/neo4j')

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

connectNeo4j()

// switch(process.env.CONNECTED_DB){
//   case 'mysql' :
//     const db = require('./startup/mysql.js')

//     db.sequelize.sync()
//     .then(() => {
//       console.log("Synced db.");
//     })
//     .catch((err: any) => {
//       console.log("Failed to sync db: " + err.message);
//     });

//     break;
// case 'mongo' :
//     connectMongo();
//     break;
// case 'neo4j' :
//     break;
// }

const port = process.env.PORT || 8080;

app.listen(port, () =>
  console.log(`Listening on port ${port}...`)
);


app.use(
  '/api-docs',
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument)
);