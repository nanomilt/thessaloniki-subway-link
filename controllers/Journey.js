'use strict';

var utils = require('../utils/writer.js');
var Journey = require('../service/JourneyService');

module.exports.planJourney = function planJourney (_, res, body, depStation, arrStation, depTime) {
  Journey.planJourney(body, depStation, arrStation, depTime)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
