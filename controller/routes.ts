const express = require('express');
const eventsRepository = require('../repository/eventsRepository');
const sliderImageRepository = require('../repository/sliderImagesRepository');
const userRepository = require('../repository/userRepository');

module.exports = function (app: any) {
  // Events
  app.post('/api/searchEvents', eventsRepository.searchEvents);
  app.get('/api/allEvents', eventsRepository.allEvents);
  app.post('/api/create/sliderImage', sliderImageRepository.insertSliderImage);
  app.get('/api/getAll/sliderImage', sliderImageRepository.getAllSliderImage);

  // Users
  app.post('/api/users', userRepository.createUser);
  app.get('/api/users', userRepository.getAllUsers);
  app.update('/api/users/:id', userRepository.updateUser);
  app.delete('/api/users/:id', userRepository.deleteUser);
};
