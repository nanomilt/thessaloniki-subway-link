'use strict';

var utils = require('../utils/writer.js');
var Station = require('../service/StationService');

module.exports.getStationArrivals = function getStationArrivals (req, res, next, stationId) {
  Station.getStationArrivals(stationId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getStationConnections = function getStationConnections (req, res, next, stationId) {
  Station.getStationConnections(stationId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getStationEntity = function getStationEntity (req, res, next, stationId) {
  Station.getStationEntity(stationId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.setStationAttributes = function setStationAttributes (req, res, next, body, stationId) {
  Station.setStationAttributes(body, stationId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.stationEntity = function stationEntity (req, res, next, body) {
  Station.stationEntity(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteStationEntity = function deleteStationEntity (req, res, next, stationId) {
  Station.deleteStationEntity(stationId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
