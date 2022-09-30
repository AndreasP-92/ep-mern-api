import Events from '../types/events';

const express = require('express');
const router = express.Router();
var axios = require('axios');
require('dotenv').config();

type GetEventsResponse = {
  data: Events[];
};

router.use(express.json());

// Endpoint to Get a list of all events
router.get('/', async function (req: any, res: any) {
  res.set('Access-Control-Allow-Origin', '*');

  try {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
    const response = (await axios(
      `https://www.eventbriteapi.com/v3/organizations/${process.env.ORGANIZATION_ID}/events`,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json;charset=UTF-8',
          Authorization: `Bearer ${process.env.EVENT_TOKEN}`,
        },
      }
    )) as GetEventsResponse;
    res.status(200).json(response.data);
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

module.exports = router;

export {};
