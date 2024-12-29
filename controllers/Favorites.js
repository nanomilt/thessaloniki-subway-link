'use strict';

var utils = require('../utils/writer.js');
var Favorites = require('../service/FavoritesService');

module.exports.userUser_idFavoritesDELETE = function userUser_idFavoritesDELETE (_, res, userId) {
  Favorites.userUser_idFavoritesDELETE(userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
