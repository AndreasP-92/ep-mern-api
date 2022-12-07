const User = require("../Model/User")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")




test('adds 1 + 2 to equal 3', () => {

    expect(sum(1, 2)).toBe(3);
  });

  function sum(a, b) {
    return a + b;
  }