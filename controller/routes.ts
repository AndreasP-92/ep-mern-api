const express = require('express');
const authJwt = require('../service/middleware/authJwt');
const eventsRepository = require('../repository/eventsRepository');
const sliderImageRepository = require('../repository/sliderImagesRepository');
const userRepository = require('../repository/userRepository');
const contactRepository = require('../repository/ContactRepository')

module.exports = function (app: any) {
  // Events
  app.post('/api/searchEvents', eventsRepository.searchEvents);
  app.get('/api/allEvents', eventsRepository.allEvents);
  app.post('/api/nextEventPage', eventsRepository.getNextEventPage);

  app.post('/api/create/sliderImage', sliderImageRepository.insertSliderImage);
  app.get('/api/getAll/sliderImage', sliderImageRepository.getAllSliderImage);
  app.get('/api/fetchEvent/:id', eventsRepository.fetchEventDetails);

  // Users
  app.post('/api/users', userRepository.createUser);
  app.get('/api/users', userRepository.getAllUsers);
  app.get('/api/users/:id', userRepository.getUserById);
  app.delete('/api/users/:id', userRepository.deleteUser);

  // Contact us
  app.post('/api/contact', contactRepository.createRequest)

  // Login
  app.post('/api/login/verify', authJwt.verify, userRepository.verifyedUser)
  app.post('/api/login', userRepository.login);
};
