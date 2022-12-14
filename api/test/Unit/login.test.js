const signin = require('../../service/middleware/signin')
const User = require("../../Model/User")
require('dotenv').config();

describe('Validate user login', () => {
    test("Test if token can be generated",()=>{

        const user = new User({
            // _id: "123454324132213", 
            firstname: "Andreas",
            lastname: "Pedersen",
            email: "AA@AA.dk",
            address: "holmvej 42A",
            postal: "4200",
            number: "12345678",
            password: "1234"
        })

        body = {
            email: user.email,
            password: user.password,
            key: process.env.JWT_PRIVATE_KEY
            
        }

        const test = signin.generateToken(user.id, body);
        expect(test.length).toBe(171);
    })
});
