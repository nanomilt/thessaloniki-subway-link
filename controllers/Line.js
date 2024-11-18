'use strict';

var utils = require('../utils/writer.js');
var Line = require('../service/LineService');

module.exports.getLineEntity = function getLineEntity (req, res, next, lineId) {
  Line.getLineEntity(lineId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getLineLiveTracking = function getLineLiveTracking (req, res, next, lineId) {
  Line.getLineLiveTracking(lineId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getLineStations = function getLineStations (req, res, next, lineId) {
  Line.getLineStations(lineId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getLineStationsMap = function getLineStationsMap (req, res, next, lineId) {
  Line.getLineStationsMap(lineId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getLineTimetable = function getLineTimetable (req, res, next, lineId) {
  Line.getLineTimetable(lineId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.lineEntity = function lineEntity (req, res, next, body) {
  Line.lineEntity(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.setLineAttributes = function setLineAttributes (req, res, next, body, lineId) {
  Line.setLineAttributes(body, lineId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteLineEntity = function deleteLineEntity (req, res, next, lineId) {
  Line.deleteLineEntity(lineId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
