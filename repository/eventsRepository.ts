// ===== IMPORTS ====
import Events from '../types/events';
const axios = require('axios');
require('dotenv').config();

// ===== OTHER ====
type GetEventsResponse = {
  data: Events[];
};

const allEvents = async function (req: any, res: any) {
  const header = {
    Accept: 'application/json',
    'Content-Type': 'application/json;charset=UTF-8',
  };

  try {
    const response = (await axios(
      `https://app.ticketmaster.com/discovery/v2/events?apikey=${process.env.API_KEY}&locale=da-dk&page=1`,
      header
    )) as GetEventsResponse;

    res.status(200).json(response.data);
  } catch (err) {
    res.status(500).json({message: err});
  }
};

const searchEvents = async function (req: any, res: any) {
  const body = req.body;
  console.log(body)
  const header = {
    Accept: 'application/json',
    'Content-Type': 'application/json;charset=UTF-8',
  };

  try {
    const response = (await axios(
      `https://app.ticketmaster.com/discovery/v2/events?apikey=${process.env.API_KEY}&postalCode=${body.zipcode}&locale=da-dk`,
      header
    )) as GetEventsResponse;

    res.status(200).json(response.data);
  } catch (err) {
    res.status(500).json({message: err});
  }
};

const fetchEventDetails = async function (req: any, res: any) {
  const eventId = req.params.id
  console.log(eventId)

  const header = {
    Accept: 'application/json',
    'Content-Type': 'application/json;charset=UTF-8',
  };

  try {
    const response = (await axios(
      `https://app.ticketmaster.com/discovery/v2/events/${eventId}?apikey=${process.env.API_KEY}`,
      header
    )) as GetEventsResponse;
    console.log(response);
    res.status(200).json(response.data);
  } catch (err) {
    res.status(500).json({message: err});
  }
};

const getNextEventPage = async function (req: any, res: any) {
  const body = req.body;
  console.log(body)
  const header = {
    Accept: 'application/json',
    'Content-Type': 'application/json;charset=UTF-8',
  };

  try {
    const response = (await axios(
      `https://app.ticketmaster.com/discovery/v2/events?apikey=${process.env.API_KEY}&locale=da-dk&page=${body.page}`,
      header
    )) as GetEventsResponse;

    res.status(200).json(response.data);
  } catch (err) {
    res.status(500).json({message: err});
  }
};

const getEventsByCategory = async function (req: any, res: any) {
  const body = req.body;

  const header = {
    Accept: 'application/json',
    'Content-Type': 'application/json;charset=UTF-8',
  };

  try {
    const response = (await axios(
      `https://app.ticketmaster.com/discovery/v2/classifications/segments/${body.category}.json?apikey=${process.env.API_KEY}`,
      header
    )) as GetEventsResponse;

    res.status(200).json(response.data);
  } catch (err) {
    res.status(500).json({message: err});
  }
};

module.exports = {
  searchEvents,
  allEvents,
  fetchEventDetails,
  getNextEventPage,
  getEventsByCategory
};
