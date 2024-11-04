'use strict';


/**
 * Return an existing product
 * Return an existing product
 *
 * productId Integer The ID of the product
 * returns product_body
 **/
exports.getProductEntity = function(productId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "quantity" : 3,
  "product-id" : 14,
  "price" : 8.99,
  "name" : "3-day ticket"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create a new product
 * Create a new product
 *
 * body Product_body 
 * returns product_body
 **/
exports.productEntity = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "quantity" : 3,
  "product-id" : 14,
  "price" : 8.99,
  "name" : "3-day ticket"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Edit an existing product
 * Edit an existing product
 *
 * body Product_productid_body 
 * productId Integer The ID of the product to be modified
 * returns product_productid_body
 **/
exports.setProductAttributes = function(body,productId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "quantity" : 3,
  "product-id" : 14,
  "price" : 8.99,
  "name" : "3-day ticket"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete an existing product
 * Delete an existing product
 *
 * productId Integer The ID of the product to be deleted
 * returns product_productid_body
 **/
exports.~ProductEntity = function(productId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "quantity" : 3,
  "product-id" : 14,
  "price" : 8.99,
  "name" : "3-day ticket"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

