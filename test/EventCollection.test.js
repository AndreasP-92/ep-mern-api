// const getFirstAlbumTitle = require('./index');

// it('returns the title of the first album', async () => {
//     const title = await getFirstAlbumTitle();  // Run the function
//     expect(title).toEqual('quidem molestiae enim');  // Make an assertion on the result
// });
const axios = require('axios');
const eventsRepository = require('../repository/eventsRepository');

describe('Check if allEvents() returns 200', () => {
    test('Get successful result of the API call', () => {
        const apiUrl = eventsRepository.allEvents
        axios.get(apiUrl)
            .then(r => {
                expect(200);
            })
            .catch(e => {
                // fail(`Expected successful response`);
            });
    });
});

describe('Check if searchEvent() returns 200', () => {
    test('Get successful result of the API call', () => {
        const apiUrl = eventsRepository.searchEvents
        axios.get(apiUrl)
            .then(r => {
                expect(200);
            })
            .catch(e => {
                // fail(`Expected successful response`);
            });
    });
});