const express = require('express');
const eventsRepository = require('../repository/events');
const sliderImageRepository = require('../repository/sliderImages')

module.exports = function (app: any) {
  app.post('/api/searchEvents', eventsRepository.searchEvents);
  app.get('/api/allEvents', eventsRepository.allEvents);
  app.post('/api/create/sliderImage', sliderImageRepository.insertSliderImage);
  app.get('/api/getAll/sliderImage', sliderImageRepository.getAllSliderImage);
};
