const express = require('express');
const eventsRepository = require('../repository/events');

module.exports = function (app: any) {
  app.post('/api/searchEvents', eventsRepository.searchEvents);
  app.get('/api/allEvents', eventsRepository.allEvents);
};
