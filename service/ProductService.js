'use strict';


/**
 * Return an existing product
 * Return an existing product
 *
 * productId Integer The ID of the product
 * returns product_body
 **/

exports.getProductEntity = function(productId, quantity) {
  return new Promise(function(resolve, _) {
    var examples = {};
    examples['application/json'] = {
      "quantity" : quantity,
      "productId" : 14,
      "price" : 8.99,
      "name" : "3-day ticket"
    };

    if (productId !== 14 || !Object.keys(examples).length) {
      resolve({
        status: 404,
        body: {
          message: "Product not found"
        }
      });
      return;
    }

    // Check quantity limit
    if (quantity > 50) {
      resolve({
        status: 400,
        message: "Quantity exceeds limit"
      });
      return;
    }

    // Success case
    resolve({
      status: 200,
      body: examples[Object.keys(examples)[0]]
    });
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
  return new Promise(function(resolve, _) {
    // Check if body has required properties
    if (Object.keys(body).length === 0) {
      resolve(undefined);
      return;
    }

    if (body.price > 20) {
      resolve({
        status: 400,
        body: {
          message: "Price cannot exceed 20"
        }
      });
      return;
    }

    // Handle valid product case
    resolve({
      status: 200,
      body: {
        quantity: body.quantity,
        productId: body.productId,
        price: body.price,
        name: body.name
      }
    });
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

exports.setProductAttributes = function(body, productId) {
  return new Promise(function(resolve, _) {
    if (productId === 14) { // Assuming we're working with product 14
      const namePattern = /^\d+-day ticket$/; // Regular expression to test if  *-day ticket where * is a positive integer

      if (!namePattern.test(body.name)) {
        resolve({
          status: 400,
          body: {
            message: "Invalid product name format"
          }
        });
        return;
      }

      if(body.price < 0) {
        resolve({
          status: 400,
          body: {
            message: "Price cannot be negative"
          }
        });
        return;
      }

      resolve({
        status: 200,
        message: "Product updated successfully",
        body: {
          quantity: body.quantity,
          productId: 14,
          price: body.price,
          name: body.name
        }
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

exports.deleteProductEntity = function(productId, name, quantity, price) {
  return new Promise(function(resolve, _) {
    var examples = {};
    examples['application/json'] = {
      "quantity": 3,
      "productId": 14,
      "price": 8.99,
      "name": "3-day ticket"
    };

    // Single error handling for all invalid cases
  if (productId !== 14 || 
      (name && name !== "3-day ticket") ||
      (quantity && quantity !== 3) ||
      (price && price !== 8.99)) {
    resolve({
      status: 404,
      body: {
        message: "Product not found"
      }
    });
  } else {
    resolve({
      status: 200,
      message: "Product deleted successfully",
      body: examples[Object.keys(examples)[0]]
      });
    }
  });
}








