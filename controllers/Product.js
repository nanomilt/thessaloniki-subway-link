'use strict';

// Import necessary modules
var utils = require('../utils/writer.js');
var Product = require('../service/ProductService');

// Function to get a product entity
module.exports.getProductEntity = function getProductEntity (_, res, productId) {
  // Call service function to get product entity
  Product.getProductEntity(productId)
    .then(function (response) {
      // Write client response
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      // Write client error response
      utils.writeJson(res, response);
    });
};

// Function to create a product entity
module.exports.productEntity = function productEntity (_, res, body) {
  // Call service function to create a product entity
  Product.productEntity(body)
    .then(function (response) {
      // Write client response
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      // Write client error response
      utils.writeJson(res, response);
    });
};

// Function to set a product's attributes
module.exports.setProductAttributes = function setProductAttributes (_, res, body, productId) {
  // Call service function to set attributes
  Product.setProductAttributes(body, productId)
    .then(function (response) {
      // Write client response
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      // Write client error response
      utils.writeJson(res, response);
    });
};

// Function to delete a product
module.exports.deleteProductEntity = function deleteProductEntity (_, res, productId) {
  // Call service function to delete the product
  Product.deleteProductEntity(productId)
    .then(function (response) {
      // Write client response
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      // Write client error response
      utils.writeJson(res, response);
    });
};