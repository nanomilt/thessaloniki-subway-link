'use strict';

var utils = require('../utils/writer.js');
var User = require('../service/UserService');

module.exports.getUserEntity = function getUserEntity (req, res, next, userId) {
  User.getUserEntity(userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.login = function login (req, res, next, body) {
  User.login(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.setUserAttributes = function setUserAttributes (req, res, next, body, userId) {
  User.setUserAttributes(body, userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.signup = function signup (req, res, next, body) {
  User.signup(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
