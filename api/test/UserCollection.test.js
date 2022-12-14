const User = require("../Model/User")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
// const userRepository = require('../repository/userRepository');
const axios = require('axios')
jest.mock('axios')

test('Find one user', () => {
  const test = User.findOne = jest.fn().mockReturnValueOnce({
    name: "Amy's"
  });

  expect(test()).toEqual({name: "Amy's"});
});

test('Update one user', () => {
  const test = User.updateOne = jest.fn().mockReturnValueOnce({
    name: "Abdu"
  });

  expect(test()).toEqual({name: "Abdu"});
});

test('Delete one user', () => {
  const test = User.deleteOne = jest.fn().mockReturnValueOnce({
    name: "Abdu"
  });

  expect(test()).toEqual({name: "Abdu"});
});

test('Create a user', async () => {
  const service = {
    firstname: "spiderman2",
    lastname: "henffdsddsasrik",
    email: "abdu@gmail.com",
    address: "tårdndfdsfdasdssfvej 123",
    postal: "2610",
    number: "77304091",
    password: "1233542"
  }

  const test = User.create = jest.fn().mockReturnValueOnce(service);

  expect(test()).toEqual(service);

});