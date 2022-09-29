const express = require('express');
const eventsRouter = require('../routes/events');
const helloWorldRouter = require('../routes/helloWorld');

module.exports = function (app: any) {
  app.use(express.json());
  app.use('/', helloWorldRouter);
  app.use('/api/allEvents', eventsRouter);
};

export {};
