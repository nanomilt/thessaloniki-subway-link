'use strict';

// Import necessary modules
var utils = require('../utils/writer.js');
var Line = require('../service/LineService');

// Function to get a line entity
module.exports.getLineEntity = function getLineEntity (_, res, lineId) {
  // Call service function to get a line entity
  Line.getLineEntity(lineId)
    .then(function (response) {
      // Write client response
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      // Write client error response
      utils.writeJson(res, response);
    });
};

// Function to get a line's train's live position
module.exports.getLineLiveTracking = function getLineLiveTracking (_, res, lineId) {
  // Call service function to get the tracking of a line's train
  Line.getLineLiveTracking(lineId)
    .then(function (response) {
      // Write client response
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      // Write client error response
      utils.writeJson(res, response);
    });
};

// Function to get a line's stations 
module.exports.getLineStations = function getLineStations (_, res, lineId) {
  // Call service function to get stations of a line
  Line.getLineStations(lineId)
    .then(function (response) {
      // Write client response
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      // Write client error response
      utils.writeJson(res, response);
    });
};

// Function to get the line's stations map  
module.exports.getLineStationsMap = function getLineStationsMap (_, res, lineId) {
  // Call service function to get the stations map of a line
  Line.getLineStationsMap(lineId)
    .then(function (response) {
      // Write client response
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      // Write client error response
      utils.writeJson(res, response);
    });
};

// Function to get the line's timetable
module.exports.getLineTimetable = function getLineTimetable (_, res, lineId) {
  // Call service function to get the timetable
  Line.getLineTimetable(lineId)
    .then(function (response) {
      // Write client response
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      // Write client error response
      utils.writeJson(res, response);
    });
};

// Function to create a line entity
module.exports.lineEntity = function lineEntity (_, res, body) {
  // Call service function to create a line entity
  Line.lineEntity(body)
    .then(function (response) {
      // Write client response 
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      // Write client error response
      utils.writeJson(res, response);
    });
};

// Function to set a line's attributes
module.exports.setLineAttributes = function setLineAttributes (_, res, body, lineId) {
  // Call service function to set line attributes
  Line.setLineAttributes(body, lineId)
    .then(function (response) {
      // Write client response
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      // Write client error response
      utils.writeJson(res, response);
    });
};

// Function to delete a line entity
module.exports.deleteLineEntity = function deleteLineEntity (_, res, lineId) {
  // Call service function to delete a line entity
  Line.deleteLineEntity(lineId)
    .then(function (response) {
      // Write client response
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      // Write client error response
      utils.writeJson(res, response);
    });
};
