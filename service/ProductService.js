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
  "productId" : 14,
  "price" : 8.99,
  "name" : "3-day ticket"
}; // add this everywhere on product service
  if (Object.keys(examples).length > 0) {
    resolve({
      status: 200,
      body: examples[Object.keys(examples)[0]]
  });
  } else {
    resolve({
      status: 404,
      body: {
        message: "Product not found"
        }
      });
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
  "productId" : 14,
  "price" : 8.99,
  "name" : "3-day ticket"
};
  if (Object.keys(examples).length > 0) {
    resolve({
      status: 200,
      body: examples[Object.keys(examples)[0]]
  });
  } else {
    resolve({
      status: 404,
      body: {
        message: "Product not found"
        }
      });
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
  "productId" : 14,
  "price" : 8.99,
  "name" : "3-day ticket"
};
  if (Object.keys(examples).length > 0) {
    resolve({
      status: 200,
      body: examples[Object.keys(examples)[0]]
  });
  } else {
    resolve({
      status: 404,
      body: {
        message: "Product not found"
        }
      });
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
exports.deleteProductEntity = function(productId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "quantity" : 3,
  "productId" : 14,
  "price" : 8.99,
  "name" : "3-day ticket"
};
  if (Object.keys(examples).length > 0) {
    resolve({
      status: 200,
      body: examples[Object.keys(examples)[0]]
  });
  } else {
    resolve({
      status: 404,
      body: {
        message: "Product not found"
        }
      });
    }
  });
}

