const User = require("../Model/User")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")




test('adds 1 + 2 to equal 3', () => {
  const test = User.findOne = jest.fn().mockReturnValueOnce({
    name: "Amy's"
  });
  const test2 = test.getMockName()
  
    expect(sum(1, 2)).toBe(3);
  });

  function sum(a, b) {
    return a + b;
  }