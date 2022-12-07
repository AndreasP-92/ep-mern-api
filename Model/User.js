const mongoose = require('mongoose');
require('dotenv').config();

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50
  },
  lastname: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50
  },
  address: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50
  },
  postal: {
    type: Number,
    required: true,
    minlength: 3,
    maxlength: 4
  },
  number: {
    type: Number,
    required: false,
    minlength: 8,
    maxlength: 8
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minlength: 3,
    maxlength: 255,
  },
  password: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 1024
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User