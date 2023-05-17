const neo4j = require('neo4j-driver');

const uri = `${process.env.NEO4J_CONNECTIONSTRING}`
const user = `${process.env.NEO4J_USER}`;
const password = `${process.env.NEO4J_PASSWORD}`;

// To learn more about the driver: https://neo4j.com/docs/javascript-manual/current/client-applications/#js-driver-driver-object
const driver = neo4j.driver(uri, neo4j.auth.basic(user, password));


module.exports = driver;


