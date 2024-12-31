'use strict';

// Import necessary modules
var utils = require('../utils/writer.js');
var Journey = require('../service/JourneyService');

// Function to plan a user's journey
module.exports.planJourney = function planJourney (res, body) {
  // Call service function to plan a user's journey
  Journey.planJourney(body)
    .then(function (response) {
      // Write client response
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      // Write client error response
      utils.writeJson(res, response);
    });
};
