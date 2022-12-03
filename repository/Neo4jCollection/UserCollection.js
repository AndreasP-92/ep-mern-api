const driver = require('../../startup/neo4j')
const session = driver.session();
const bcrypt = require('bcrypt')
const uuid = require('node-uuid')
// const session = db()


module.exports = {
    createUser: async (body) => {
        const salt = await bcrypt.genSalt(10);

        const firstname = body.firstname
        const lastname = body.lastname
        const email = body.email
        const address = body.address
        const zipcode = body.zipcode
        const phone = body.phone
        const password = await bcrypt.hash(body.password, salt);

        try {
            const result = await session.run(
                'CREATE (a:User {id: $id, firstname: $firstname, lastname: $lastname, email: $email, address: $address, zipcode: $zipcode, phone: $phone, password: $password}) RETURN a',
                {
                    id: uuid.v4(),
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
        }
    },
    getAllUsers: async () => {
        try {
            const result = await session.readTransaction(x => (
                x.run('MATCH (user: User) return user')
            ))

            return {
                success: true,
                object: result.records,
                msg: "",
                status: 200
            }
        }
        catch (error) {
            return {
                success: false,
                object: {},
                msg: "OOPS, something went wrong in getAllUsers " + error,
                status: 405
            }
        }
    },
    deleteUser: async (userId) => {
        try {
            const result = await session.writeTransaction(x => (
                x.run('MATCH (u:User {id: $id}) DELETE u',
                    {id: userId}
                )
            ))

            return {
                success: true,
                object: result,
                msg: "",
                status: 200
            }
        }
        catch (error) {
            return {
                success: false,
                Object: {},
                msg: "OOPS, something went wrong DeleteUser " + error,
                status: 405
            }
        }
    },

    getUserById: async (userId) => {
        try {
            const result = await session.readTransaction(txc => txc.run('MATCH (user:User {id: $id}) RETURN user',
                {id: userId})
            )
            return {
                success: true,
                object: result.records,
                msg: "",
                status: 200
            }
        } catch (error) {
            return {
                success: false,
                Object: {},
                msg: "OOPS, something went wrong getUserById " + error,
                status: 405
            }
        }
    },

    updateUser: async (body, userId) => {
        const salt = await bcrypt.genSalt(10);

        const firstname = body.firstname
        const lastname = body.lastname
        const email = body.email
        const address = body.address
        const zipcode = body.zipcode
        const phone = body.phone
        const password = await bcrypt.hash(body.password, salt);
        const id = userId

        try {
            const update = await session.run(
                `MATCH (a:User {id: $id}) SET a.firstname= $firstname, a.lastname= $lastname, a.email= $email, a.address= $address, a.zipcode= $zipcode, a.phone= $phone, a.password= $password RETURN a`,
                {
                    firstname: firstname,
                    id: id,
                    firstname: firstname,
                    lastname: lastname,
                    email: email,
                    address: address,
                    zipcode: zipcode,
                    phone: phone,
                    password: password
                }
            )
            const singleRecord = update.records[0]
            const node = singleRecord.get(0)

            return {
                success: true,
                object: node,
                msg: "",
                status: 200
            }

        } catch (error) {
            return {
                success: false,
                Object: {},
                msg: "OOPS, something went wrong updateUser " + error,
                status: 405
            }
        }
    }
}