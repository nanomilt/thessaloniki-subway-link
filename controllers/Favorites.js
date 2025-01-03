'use strict';

// Import necessary modules 
var utils = require('../utils/writer.js');
var Favorites = require('../service/FavoritesService');

// Function to remove a user's favorite item
module.exports.userUser_idFavoritesDELETE = function userUser_idFavoritesDELETE (_, res, userId) {
  // Call service function to remove a user's favorite item
  Favorites.userUser_idFavoritesDELETE(userId)
    .then(function (response) {
      // Write client response
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      // Write client error response
      utils.writeJson(res, response);
    });
};
