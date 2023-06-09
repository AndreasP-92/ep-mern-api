const axios = require('axios');
require('dotenv').config();


describe('Check if /api/allEvents returns 200', () => {
    test('Get successful result of the API call', async () => {
        const testUser = {
            "email" : "a@a.dk",
            "password" : "1234",
            "key" : process.env.JWT_PRIVATE_KEY
        }
        await axios.post('http://207.154.228.42:3001/api/login', testUser)
            .then(r => {
                expect(r.status).toBe(202);
            })
            .catch(e => {
                throw new Error;
            });
    });
});

// test('tmp test', () => {

  
//     expect(5).toEqual(5);
//   });