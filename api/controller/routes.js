const express = require('express');
const authJwt = require('.././service/middleware/authJwt');
// TODO ==> Move repositories to service/middleware/routeService

const eventsRepository = require('.././repository/eventsRepository');
const sliderImageRepository = require('.././repository/sliderImagesRepository');
const userRepository = require('.././repository/userRepository');
const contactRepository = require('.././repository/contactRepository')

// === MIDDLEWARE ==
const rabbitMQService = require("../service/middleware/routeServices/rabbitMQService")

module.exports = function (app) {
  app.get('/api/', (req,res)=>{
    res.send("Welcome to API")
  })

  // Events
  app.post('/api/searchEvents', eventsRepository.searchEvents);
  app.get('/api/allEvents', eventsRepository.allEvents);
  app.post('/api/nextEventPage', eventsRepository.getNextEventPage);
  app.post('/api/eventsByCategory', eventsRepository.getEventsByCategory);

  app.post('/api/create/sliderImage', sliderImageRepository.insertSliderImage);
  app.get('/api/getAll/sliderImage', sliderImageRepository.getAllSliderImage);
  app.get('/api/fetchEvent/:id', eventsRepository.fetchEventDetails);

  // Users
  app.post('/api/users', userRepository.createUser);
  app.get('/api/users', userRepository.getAllUsers);
  app.get('/api/users/:id', userRepository.getUserById);
  app.delete('/api/users/:id', userRepository.deleteUser);
  app.put('/api/user', userRepository.updateUser);

  // Contact us
  // Message Queue
  app.post('/api/contact', rabbitMQService.createTicketService)

  // Login
  app.post('/api/login/verify', authJwt.verify, userRepository.verifyedUser)
  app.post('/api/login', userRepository.login);
  

  

  // Setup
  require('../test/TicketMasterStub/TMStubMain')(app);
};

