const db = require('../../startup/neo4j')
const bcrypt = require('bcrypt')
const User = db.users

module.exports = {
    createUser : async(body)=>{
        const salt = await bcrypt.genSalt(10);
        body.password = await bcrypt.hash(body.password, salt);



        try {
            const user = {
                firstname: body.firstname,
                lastname: body.lastname,
                email: body.email,
                address: body.address,
                zipcode: body.postal,
                phone: body.number,
                password: body.password
            }
            async function createUsers (driver, user) {

            }

            return {
                success: true,
                object: data,
                msg: "",
                status: 200
            }
        } catch (error) {
            console.error(`Something went wrong: ${error}`);
        } finally {
            // Close down the session if you're not using it anymore.
            await session.close();
        }
    }   
}