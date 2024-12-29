'use strict';

var utils = require('../utils/writer.js');
var Station = require('../service/StationService');

module.exports.getStationArrivals = function getStationArrivals (_, res, stationId) {
  Station.getStationArrivals(stationId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getStationConnections = function getStationConnections (_, res, stationId) {
  Station.getStationConnections(stationId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getStationEntity = function getStationEntity (_, res, stationId) {
  Station.getStationEntity(stationId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.setStationAttributes = function setStationAttributes (_, res, body, stationId) {
  Station.setStationAttributes(body, stationId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.stationEntity = function stationEntity (_, res, body) {
  Station.stationEntity(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteStationEntity = function deleteStationEntity (_, res, stationId) {
  Station.deleteStationEntity(stationId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
