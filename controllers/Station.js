'use strict';

// Import necessary modules
var utils = require('../utils/writer.js');
var Station = require('../service/StationService');

// Function to get a station's arrivals 
module.exports.getStationArrivals = function getStationArrivals (_, res, stationId) {
  // Call service function to get station arrivals
  Station.getStationArrivals(stationId)
    .then(function (response) {
      // Write client response
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      // Write client error response
      utils.writeJson(res, response);
    });
};

// Function to get station connections 
module.exports.getStationConnections = function getStationConnections (_, res, stationId) {
  Station.getStationConnections(stationId)
  // Call service function to get station connections
    .then(function (response) {
      // Write client response
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      // Write client error response
      utils.writeJson(res, response);
    });
};

// Function to get a station entity
module.exports.getStationEntity = function getStationEntity (_, res, stationId) {
  // Call service function to get station entity
  Station.getStationEntity(stationId)
    .then(function (response) {
      // Write client response
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      // Write client error response
      utils.writeJson(res, response);
    });
};

// Function to set a station's attributes
module.exports.setStationAttributes = function setStationAttributes (_, res, body, stationId) {
  // Call service function to set station attributes
  Station.setStationAttributes(body, stationId)
    .then(function (response) {
      // Write client response
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      // Write client error response
      utils.writeJson(res, response);
    });
};

// Function to create a station entity
module.exports.stationEntity = function stationEntity (_, res, body) {
  // Call service function to create a station entity
  Station.stationEntity(body)
    .then(function (response) {
      // Write client response
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      // Write client error response
      utils.writeJson(res, response);
    });
};

// Function to delete a station entity
module.exports.deleteStationEntity = function deleteStationEntity (_, res, stationId) {
  // Call service function to delete a station entity
  Station.deleteStationEntity(stationId)
    .then(function (response) {
      // Write client response
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      // Write client error response
      utils.writeJson(res, response);
    });
};
