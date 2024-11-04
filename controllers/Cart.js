'use strict';

var utils = require('../utils/writer.js');
var Cart = require('../service/CartService');

module.exports.cartEntity = function cartEntity (req, res, next, body, userId) {
  Cart.cartEntity(body, userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.confirmGeneratePOST = function confirmGeneratePOST (req, res, next, body, userId) {
  Cart.confirmGeneratePOST(body, userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.confirmPOST = function confirmPOST (req, res, next, body, userId) {
  Cart.confirmPOST(body, userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getCartEntity = function getCartEntity (req, res, next, userId) {
  Cart.getCartEntity(userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.setCartAttributes = function setCartAttributes (req, res, next, body, userId) {
  Cart.setCartAttributes(body, userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.setCartProductAttribute = function setCartProductAttribute (req, res, next, body, userId, productId) {
  Cart.setCartProductAttribute(body, userId, productId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
