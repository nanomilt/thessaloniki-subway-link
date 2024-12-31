'use strict';

var utils = require('../utils/writer.js');
var Journey = require('../service/JourneyService');

module.exports.planJourney = function planJourney (res, body) {
  Journey.planJourney(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
