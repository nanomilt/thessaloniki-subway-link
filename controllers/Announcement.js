'use strict';

var utils = require('../utils/writer.js');
var Announcement = require('../service/AnnouncementService');

module.exports.announcementEntity = function announcementEntity (_, res, _, body) {
  Announcement.announcementEntity(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAnnouncementEntity = function getAnnouncementEntity (_, res, _, announcementId) {
  Announcement.getAnnouncementEntity(announcementId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.setAnnouncementAttributes = function setAnnouncementAttributes (_, res, _, body, announcementId) {
  Announcement.setAnnouncementAttributes(body, announcementId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteAnnouncementEntity = function deleteAnnouncementEntity (_, res, _, announcementId) {
  Announcement.deleteAnnouncementEntity(announcementId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
