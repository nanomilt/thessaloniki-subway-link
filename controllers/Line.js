'use strict';

var utils = require('../utils/writer.js');
var Line = require('../service/LineService');

module.exports.getLineEntity = function getLineEntity (_, res, lineId) {
  Line.getLineEntity(lineId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getLineLiveTracking = function getLineLiveTracking (_, res, lineId) {
  Line.getLineLiveTracking(lineId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getLineStations = function getLineStations (_, res, lineId) {
  Line.getLineStations(lineId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getLineStationsMap = function getLineStationsMap (_, res, lineId) {
  Line.getLineStationsMap(lineId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getLineTimetable = function getLineTimetable (_, res, lineId) {
  Line.getLineTimetable(lineId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.lineEntity = function lineEntity (_, res, body) {
  Line.lineEntity(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.setLineAttributes = function setLineAttributes (_, res, body, lineId) {
  Line.setLineAttributes(body, lineId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteLineEntity = function deleteLineEntity (_, res, lineId) {
  Line.deleteLineEntity(lineId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
