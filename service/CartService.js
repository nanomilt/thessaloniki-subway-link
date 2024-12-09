'use strict';


/**
 * Create a user''s cart
 * Create a user''s cart
 *
 * body Userid_cart_body_1 
 * userId Integer The ID of the user
 * returns inline_response_200
 **/
exports.cartEntity = function(body,userID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
    "userID": 4221,
    "totalPrice":26.97,
    "cartBody": "This is the costumer's cart",
    "products" : [ {
    "quantity" : 3,
    "productID" : 14,
    "price" : 8.99,
    "name" : "3-day ticket"
  }, {
    "quantity" : 3,
    "productID" : 14,
    "price" : 8.99,
    "name" : "3-day ticket"
  } ]
    
  }
    // Cart doesn't exist
    if (Object.keys(body).length === 0) {
      resolve(undefined);
      return;
    }

    resolve({
      userID: body.userID,
      cartBody: body.cartBody,
      totalPrice:body.totalPrice,
      products: body.products.map(product => ({
        productID: product.productID,
        name: product.name,
        price: product.price,
        quantity: product.quantity
      }))
    });
  });
}



/**
 * Generate QR codes for purchased items
 * Generate QR codes for purchased items
 *
 * body Confirm_generate_body 
 * userId Integer The ID of the user defining the corresponding cart
 * returns userid_profile_body
 **/
exports.confirmGeneratePOST = function(body,userId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "is-guest" : false,
  "password" : "SoftEng2024!",
  "user-id" : 4221,
  "email" : "klpanagi@ece.auth.gr",
  "username" : "klpanagi"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Confirm a payment process
 * Confirm a payment process
 *
 * body Confirm_body 
 * userId Integer The ID of the user defining the corresponding cart
 * returns inline_response_200_1
 **/
exports.confirmPOST = function(body,userId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "user-id" : 0,
  "total-price" : 32.5,
  "products" : [ {
    "quantity" : 3,
    "product-id" : 14,
    "price" : 8.99,
    "name" : "3-day ticket"
  }, {
    "quantity" : 3,
    "product-id" : 14,
    "price" : 8.99,
    "name" : "3-day ticket"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Return a user''s cart
 * Return a user''s cart
 *
 * userId Integer The ID of a user
 * returns inline_response_200
 **/
exports.getCartEntity = function(userID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = { 
    "userID": 4221,
    "totalPrice":26.97,
    "cartBody": "This is the costumer's cart",
    "products" : [ {
    "quantity" : 3,
    "productID" : 14,
    "price" : 8.99,
    "name" : "3-day ticket"
  }, {
    "quantity" : 3,
    "productID" : 14,
    "price" : 8.99,
    "name" : "3-day ticket"
  } ]
    
    };
    if (userID !== 4221 || !Object.keys(examples).length) {
      resolve({
        status: 404,
        body: {
          message: "Cart not found"
        }
      });
    }
    else {
      // Success
      resolve({
        status: 200,
        body: examples[Object.keys(examples)[0]]
      });
    }
    });
    }
/**
 * Edit a user''s cart
 * Edit a user''s cart
 *
 * body Userid_cart_body 
 * userId Integer The ID of the user
 * returns inline_response_200
 **/
exports.setCartAttributes = function(body,userID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      "userID": 4221,
      "totalPrice":26.97,
      "cartBody": "This is the costumer's cart",
      "products" : [ {
      "quantity" : 3,
      "productID" : 14,
      "price" : 8.99,
      "name" : "3-day ticket"
    }, {
      "quantity" : 3,
      "productID" : 14,
      "price" : 8.99,
      "name" : "3-day ticket"
    } ]  
    };

    if (
      body.userID !== 4221 || 
      body.totalPrice !== 26.97 ||
      body.cartBody !=="This is the costumer's cart"||
      !body.products.every(product =>
        product.quantity === 3 &&
        product.productID === 14 &&
        product.price === 8.99 &&
        product.name === "3-day ticket"
      )

       ) {
      resolve({
        status: 404,
        body: {
          message: "Cart not found"
        }
      });
    }

    // Success
    resolve({
      status: 200,
      body:{
        userID : body.userID,
        cartBody: body.cartBody,
        totalPrice:body.totalPrice,
        products: body.products.map(product => ({
        productID: product.productID,
        name: product.name,
        price: product.price,
        quantity: product.quantity
      }))
    }
      });
  });
}


/**
 * Edit a user''s product quantity in the cart
 * Edit a user''s product quantity in the cart
 *
 * body Product_productid_body_1 
 * userId Integer 
 * productId Integer 
 * returns inline_response_200
 **/
exports.setCartProductAttribute = function(body,userId,productId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

