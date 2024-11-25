'use strict';


/**
 * Create a new announcement
 * Create a new announcement
 *
 * body Announcement_body 
 * returns announcement_body
 **/
exports.announcementEntity = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "announcement-id" : 154,
  "upload-date" : "2000-01-23T04:56:07.000+00:00",
  "title" : "Venizelou station",
  "body" : "Venizelou station will remain closed due to maintenance"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Return an existing announcement
 * Return an existing announcement
 *
 * announcementId Integer The ID ot the announcement
 * returns announcement_body
 **/
exports.getAnnouncementEntity = function(announcementID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      "announcementID" : 154,
      "upload-date" : "2000-01-23T04:56:07.000+00:00",
      "title" : "Venizelou station",
      "body" : "Venizelou station will remain closed due to maintenance"
    };
    if (Object.keys(examples).length > 0) {
      resolve({
        status: 200,
        body: examples[Object.keys(examples)[0]]
    });
    } else {
      resolve({
        status: 404,
        body: {
          message: "Announcement not found"
        }
      });
    }
  });
}


/**
 * Edit an existing announcement
 * Edit an existing announcement
 *
 * body Announcement_announcementid_body 
 * announcementId Integer The ID of the announcement to be modified
 * returns announcement_announcementid_body
 **/
exports.setAnnouncementAttributes = function(body,announcementId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "announcement-id" : 154,
  "upload-date" : "2000-01-23T04:56:07.000+00:00",
  "title" : "Venizelou station",
  "body" : "Venizelou station will remain closed due to maintenance"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete an existing announcement
 * Delete an existing announcement
 *
 * announcementId Integer The ID of the announcement to be deleted
 * returns announcement_announcementid_body
 **/
exports.deleteAnnouncementEntity = function(announcementId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "announcement-id" : 154,
  "upload-date" : "2000-01-23T04:56:07.000+00:00",
  "title" : "Venizelou station",
  "body" : "Venizelou station will remain closed due to maintenance"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

