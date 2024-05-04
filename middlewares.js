// middlewares.js

const express = require('express');

// Create a middleware function to parse JSON data
const jsonParser = express.json();

module.exports = {
  jsonParser
};
