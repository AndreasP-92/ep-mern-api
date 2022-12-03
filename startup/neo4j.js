const connectNeo4j = async () => {
    const neo4j = require('neo4j-driver');

    const uri = `${process.env.NEO4J_CONNECTIONSTRING}`
    const user = `${process.env.NEO4J_USER}`;
    const password = `${process.env.NEO4J_PASSWORD}`

    // To learn more about the driver: https://neo4j.com/docs/javascript-manual/current/client-applications/#js-driver-driver-object
    const driver = neo4j.driver(uri, neo4j.auth.basic(user, password));

    const session = driver.session();

    // try {
    //     const result = await session.run(
    //         'CREATE (a:Person {firstname: $firstname, lastname: $lastname }) RETURN a',
    //         {
    //             firstname: firstname,
    //             lastname: lastname,
    //             email: email,
    //             address: address,
    //             zipcode: postal,
    //             phone: number,
    //             password: password
    //         }
    //     )

    //     const singleRecord = result.records[0]
    //     const node = singleRecord.get(0)

    //     console.log(node.properties.name)
    // } catch (error) {
    //     console.log(error)
    // } finally {
    //     await session.close()
    // }

    return session

    // on application exit:
    // await driver.close()
};

module.exports = connectNeo4j;


