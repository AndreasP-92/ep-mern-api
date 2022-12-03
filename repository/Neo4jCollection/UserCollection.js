const driver = require('../../startup/neo4j')
const session = driver.session();
const bcrypt = require('bcrypt')
// const session = db()


module.exports = {
    createUser: async (body) => {
        const salt = await bcrypt.genSalt(10);

        const firstname = body.firstname
        const lastname = body.lastname
        const email = body.email
        const address = body.address
        const zipcode = body.postal
        const phone = body.number
        const password = await bcrypt.hash(body.password, salt);

        try {
            const result = await session.run(
                'CREATE (a:User {firstname: $firstname, lastname: $lastname, email: $email, address: $address, zipcode: $zipcode, phone: $phone, password: $password}) RETURN a',
                {
                    firstname: firstname,
                    lastname: lastname,
                    email: email,
                    address: address,
                    zipcode: zipcode,
                    phone: phone,
                    password: password
                }
            )
            const singleRecord = result.records[0]
            const node = singleRecord.get(0)

            return {
                success: true,
                object: node,
                msg: "",
                status: 200
            }

        } catch (error) {
            console.error(`Something went wrong: ${error}`);
        } finally {
            // Close down the session if you're not using it anymore.
            await session.close();
        }
        // await driver.close()
    }

}