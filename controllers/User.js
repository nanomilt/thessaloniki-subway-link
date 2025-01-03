'use strict';

// Import necessary modules 
var utils = require('../utils/writer.js');
var User = require('../service/UserService');

// Function to get a user
module.exports.getUserEntity = function getUserEntity (_, res, userId) {
  // Call service function to get the user
  User.getUserEntity(userId)
    .then(function (response) {
      // Write client response
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      // Write client error response
      utils.writeJson(res, response);
    });
};

// Function to login as a user
module.exports.login = function login (_, res, body) {
  // Call service function to login as a user
  User.login(body)
    .then(function (response) {
      // Write client response
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      // Write client error response
      utils.writeJson(res, response);
    });
};

// Function to set a user's attributes
module.exports.setUserAttributes = function setUserAttributes (_, res, body, userId) {
  // Call service function to set user attributes
  User.setUserAttributes(body, userId)
    .then(function (response) {
      // Write client response
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      // Write client error response
      utils.writeJson(res, response);
    });
};

// Function to signup as a user
module.exports.signup = function signup (_, res, body) {
  // Call service function to signup as a user
  User.signup(body)
    .then(function (response) {
      // Write client response
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      // Write client error response
      utils.writeJson(res, response);
    });
};
