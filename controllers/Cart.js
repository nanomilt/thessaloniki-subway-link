'use strict';

var utils = require('../utils/writer.js');
var Cart = require('../service/CartService');

module.exports.cartEntity = function cartEntity (_, res, body, userId) {
  Cart.cartEntity(body, userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.confirmGeneratePOST = function confirmGeneratePOST (_, res, body, userId) {
  Cart.confirmGeneratePOST(body, userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.confirmPOST = function confirmPOST (_, res, body, userId) {
  Cart.confirmPOST(body, userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getCartEntity = function getCartEntity (_, res, userId) {
  Cart.getCartEntity(userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.setCartAttributes = function setCartAttributes (_, res, body, userId) {
  Cart.setCartAttributes(body, userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.setCartProductAttribute = function setCartProductAttribute (_, res, body, userId, productId) {
  Cart.setCartProductAttribute(body, userId, productId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
