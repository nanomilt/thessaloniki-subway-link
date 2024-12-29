'use strict';

var utils = require('../utils/writer.js');
var Product = require('../service/ProductService');

module.exports.getProductEntity = function getProductEntity (_, res, productId) {
  Product.getProductEntity(productId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.productEntity = function productEntity (_, res, body) {
  Product.productEntity(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.setProductAttributes = function setProductAttributes (_, res, body, productId) {
  Product.setProductAttributes(body, productId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteProductEntity = function deleteProductEntity (_, res, productId) {
  Product.deleteProductEntity(productId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};