const express = require('express');
const eventsRepository = require('../repository/events');

module.exports = function (app: any) {
  app.post('/api/allEvents', eventsRepository.searchEvents);
};