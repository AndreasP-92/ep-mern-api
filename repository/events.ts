
// ===== IMPORTS ====
import Events from '../types/events';
const axios = require('axios');
require('dotenv').config();

// ===== OTHER ====
type GetEventsResponse = {
  data: Events[];
};



const searchEvents = async function (req: any, res: any) {
  const body = req.body;

  const header = {
    Accept: 'application/json',
    'Content-Type': 'application/json;charset=UTF-8'
  }

  try {
    const response = (await axios(
      `https://app.ticketmaster.com/discovery/v2/events?apikey=${process.env.API_KEY}&postalCode=${body.zipcode}&locale=da-dk`, header
    )) as GetEventsResponse;

    res.status(200).json(response.data);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

module.exports = {
  searchEvents
}
