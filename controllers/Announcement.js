'use strict';

// Import modules 
var utils = require('../utils/writer.js');
var Announcement = require('../service/AnnouncementService');

// Function to create a new announcement
module.exports.announcementEntity = function announcementEntity (_, res, body) {
  // Create a new announcement
  Announcement.announcementEntity(body)
    .then(function (response) {
      // Write client response
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      // Write error response
      utils.writeJson(res, response);
    });
};

// Function to get all announcements
module.exports.getAnnouncementEntity = function getAnnouncementEntity (_, res, announcementId) {
  // Get all announcements
  Announcement.getAnnouncementEntity(announcementId)
    .then(function (response) {
      // Write client response
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      // Write error response
      utils.writeJson(res, response);
    });
};

// Function to set announcement attributes
module.exports.setAnnouncementAttributes = function setAnnouncementAttributes (_, res, body, announcementId) {
  // Set the announcement attributes
  Announcement.setAnnouncementAttributes(body, announcementId)
    .then(function (response) {
      // Write client response
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      // Write error response
      utils.writeJson(res, response);
    });
};

// Function to delete an announcement
module.exports.deleteAnnouncementEntity = function deleteAnnouncementEntity (_, res, announcementId) {
  // Delete the announcement
  Announcement.deleteAnnouncementEntity(announcementId)
    .then(function (response) {
      // Write client response
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      // Write error response
      utils.writeJson(res, response);
    });
};
