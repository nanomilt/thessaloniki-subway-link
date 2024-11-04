'use strict';

var utils = require('../utils/writer.js');
var Product = require('../service/ProductService');

module.exports.getProductEntity = function getProductEntity (req, res, next, productId) {
  Product.getProductEntity(productId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.productEntity = function productEntity (req, res, next, body) {
  Product.productEntity(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.setProductAttributes = function setProductAttributes (req, res, next, body, productId) {
  Product.setProductAttributes(body, productId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.~ProductEntity = function ~ProductEntity (req, res, next, productId) {
  Product.~ProductEntity(productId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
