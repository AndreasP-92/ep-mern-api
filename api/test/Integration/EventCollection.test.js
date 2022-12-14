const axios = require('axios');
require('dotenv').config();


describe('Check if /api/allEvents returns 200', () => {
    test('Get successful result of the API call', async () => {
        await axios.get('http://localhost:8080/api/allEvents')
            .then(r => {
                expect(r.status).toBe(200);
            })
            .catch(e => {
                throw new Error;
            });
    });
});

describe('Check if /api/searchEvent returns 200', () => {
    test('Get successful result of the API call', async () => {
        await axios.post('http://localhost:8080/api/searchEvents', {"zipcode": "4200"})
            .then(r => {
                expect(r.status).toBe(200);
            })
            .catch(e => {
                throw new Error;
            });
    });
});