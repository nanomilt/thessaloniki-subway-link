'use strict';

// Import modules 
var utils = require('../utils/writer.js');
var Cart = require('../service/CartService');

// Function to create a new cart
module.exports.cartEntity = function cartEntity (_, res, body, userId) {
  // Call service function to create a new Cart
  Cart.cartEntity(body, userId)
    .then(function (response) {
      // Write client response
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      // Write client error response
      utils.writeJson(res, response);
    });
};

// Function to confirm and generate POST data for a cart
module.exports.confirmGeneratePOST = function confirmGeneratePOST (_, res, body, userId) {
  // Call service function to confirm and generate POST data for a cart
  Cart.confirmGeneratePOST(body, userId)
    .then(function (response) {
      // Write client response
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      // Write client error response
      utils.writeJson(res, response);
    });
};

// Function to confirm POST data 
module.exports.confirmPOST = function confirmPOST (_, res, body, userId) {
  // Call service function to confirm POST data
  Cart.confirmPOST(body, userId)
    .then(function (response) {
      // Write client response
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      // Write client error response
      utils.writeJson(res, response);
    });
};

// Function to get a cart entity
module.exports.getCartEntity = function getCartEntity (_, res, userId) {
  // Call service function to get a cart 
  Cart.getCartEntity(userId)
    .then(function (response) {
      // Write client response
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      // Write client error response
      utils.writeJson(res, response);
    });
};

// Function to set cart attributes
module.exports.setCartAttributes = function setCartAttributes (_, res, body, userId) {
  // Call service function to set cart attributes
  Cart.setCartAttributes(body, userId)
    .then(function (response) {
      // Write client response
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      // Write client error response
      utils.writeJson(res, response);
    });
};

// Function to delete a cart entity
module.exports.setCartProductAttribute = function setCartProductAttribute (res, body, userId, productId) {
  // Call service function to set cart product attribute
  Cart.setCartProductAttribute(body, userId, productId)
    .then(function (response) {
      // Write client response
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      // Write client error response
      utils.writeJson(res, response);
    });
};