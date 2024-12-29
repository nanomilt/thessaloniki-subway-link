'use strict';


/**
 * Create a new announcement
 * Create a new announcement
 *
 * body Announcement_body 
 * returns announcement_body
 **/
exports.announcementEntity = function(body) {
  return new Promise(function(resolve, _) {
    var examples = {};
    examples['application/json'] = {
      "announcementID" : 154,
      "upload-date" : "2000-01-23T04:56:07.000+00:00",
      "announcementTitle" : "Venizelou station",
      "announcementBody" : "Venizelou station will remain closed due to maintenance"
    };
    
    // Announcement doesn't exist
    if (Object.keys(body).length === 0) {
      resolve(undefined);
      return;
    }

    if (body.announcementTitle === undefined) {
      resolve({
        status: 400,
        body: {
          message: "Announcement without a title"
        }
      });
    }

    // Success
    resolve({
      announcementID: body.announcementID,
      announcementTitle: body.announcementTitle,
      announcementBody: body.announcementBody
    });
  });
}


/**
 * Return an existing announcement
 * Return an existing announcement
 *
 * announcementID Integer The ID ot the announcement
 * returns announcement_body
 **/
exports.getAnnouncementEntity = function(announcementID) {
  return new Promise(function(resolve, _) {
    var examples = {};
    examples['application/json'] = {
      "announcementID" : 154,
      "upload-date" : "2000-01-23T04:56:07.000+00:00",
      "announcementTitle" : "Venizelou station",
      "announcementBody" : "Venizelou station will remain closed due to maintenance"
    };
    
    if (announcementID !== 154 || !Object.keys(examples).length) {
      resolve({
        status: 404,
        body: {
          message: "Announcement not found"
        }
      });
    }
    
    // Success
    resolve({
      status: 200,
      body: examples[Object.keys(examples)[0]]
    });
  });
}


/**
 * Edit an existing announcement
 * Edit an existing announcement
 *
 * body Announcement_announcementID_body 
 * announcementID Integer The ID of the announcement to be modified
 * returns announcement_announcementID_body
 **/
exports.setAnnouncementAttributes = function(body) {
  return new Promise(function(resolve, _) {
    var examples = {};
    examples['application/json'] = {
      "announcementID" : 154,
      "upload-date" : "2000-01-23T04:56:07.000+00:00",
      "announcementTitle" : "Venizelou station",
      "announcementBody" : "Venizelou station will remain closed due to maintenance"
    };

    if (body.announcementID === undefined) {
      resolve({
        status: 404,
        body: {
          message: "Announcement ID is empty"
        }
      });
    }

    if (body.announcementID !== 154) {
      resolve({
        status: 404,
        body: {
          message: "Announcement not found"
        }
      });
    }

    // Success
    resolve({
      status: 200,
      body: {
        announcementID: body.announcementID,
        announcementTitle: body.announcementTitle,
        announcementBody: body.announcementBody
      }
    });
  });
}


/**
 * Delete an existing announcement
 * Delete an existing announcement
 *
 * announcementID Integer The ID of the announcement to be deleted
 * returns announcement_announcementID_body
 **/
exports.deleteAnnouncementEntity = function(body) {
  return new Promise(function(resolve, _) {
    var examples = {};
    examples['application/json'] = {
      "announcementID" : 154,
      "upload-date" : "2000-01-23T04:56:07.000+00:00",
      "announcementTitle" : "Venizelou station",
      "announcementBody" : "Venizelou station will remain closed due to maintenance"
    };
    
    if (body.announcementID !== 154 ||
        body.announcementTitle !== "Venizelou station" ||
        body.announcementBody !== "Venizelou station will remain closed due to maintenance") {
      resolve({
        status: 404,
        body: {
          message: "Announcement not found"
        }
      });
    }

    // Success
    resolve({
      status: 200,
      message: "Announcement deleted",
      body: {
        announcementID: body.announcementID,
        announcementTitle: body.announcementTitle,
        announcementBody: body.announcementBody
      }
    });
  });
}
