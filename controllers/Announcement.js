'use strict';

// Import necessary modules 
var utils = require('../utils/writer.js');
var Announcement = require('../service/AnnouncementService');

// Function to create a new announcement
module.exports.announcementEntity = function announcementEntity (_, res, body) {
  // Call service function to create a new announcement
  Announcement.announcementEntity(body)
    .then(function (response) {
      // Write client response
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      // Write client error response
      utils.writeJson(res, response);
    });
};

// Function to get an announcement
module.exports.getAnnouncementEntity = function getAnnouncementEntity (_, res, announcementId) {
  // Call service function to get an announcement
  Announcement.getAnnouncementEntity(announcementId)
    .then(function (response) {
      // Write client response
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      // Write client error response
      utils.writeJson(res, response);
    });
};

// Function to set announcement attributes
module.exports.setAnnouncementAttributes = function setAnnouncementAttributes (_, res, body, announcementId) {
  // Call service function to set announcement attributes
  Announcement.setAnnouncementAttributes(body, announcementId)
    .then(function (response) {
      // Write client response
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      // Write client error response
      utils.writeJson(res, response);
    });
};

// Function to delete an announcement
module.exports.deleteAnnouncementEntity = function deleteAnnouncementEntity (_, res, announcementId) {
  // Call service function to delete the announcement
  Announcement.deleteAnnouncementEntity(announcementId)
    .then(function (response) {
      // Write client response
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      // Write client error response
      utils.writeJson(res, response);
    });
};
