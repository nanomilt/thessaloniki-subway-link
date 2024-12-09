'use strict';

var utils = require('../utils/writer.js');
var Announcement = require('../service/AnnouncementService');

module.exports.announcementEntity = function announcementEntity (req, res, next, body) {
  Announcement.announcementEntity(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAnnouncementEntity = function getAnnouncementEntity (req, res, next, announcementId) {
  Announcement.getAnnouncementEntity(announcementId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.setAnnouncementAttributes = function setAnnouncementAttributes (req, res, next, body, announcementId) {
  Announcement.setAnnouncementAttributes(body, announcementId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteAnnouncementEntity = function deleteAnnouncementEntity (req, res, next, announcementId) {
  Announcement.deleteAnnouncementEntity(announcementId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
