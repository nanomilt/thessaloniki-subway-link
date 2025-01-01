'use strict';

/**
 * Create a user''s cart
 * Create a user''s cart
 *
 * body Userid_cart_body_1 
 * userId Integer The ID of the user
 * returns inline_response_200
 **/
exports.cartEntity = function(body) {
  return new Promise(function(resolve, _) {
    var examples = {};
    examples['application/json'] = {
      "userID": 4221,
      "totalPrice":26.97,
      "cartBody": "This is the customer's cart",
      "products" : [ {
      "quantity" : 3,
      "productID" : 14,
      "price" : 8.99,
      "name" : "3-day ticket"}, 
      { "quantity" : 3,
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
exports.confirmGeneratePOST = function(body) {
  return new Promise(function(resolve, _) {
    var examples = {};
    examples['application/json'] = {
      "isGuest" : false,
      "password" : "SoftEng2024!",
      "userId" : 4221,
      "email" : "klpanagi@ece.auth.gr",
      "username" : "klpanagi"  
  };

   // QR Code cannot be generated
     if (Object.keys(body).length === 0) {
      resolve(undefined);
    return;
    }

    resolve({
      userId: body.userId,
      isGuest: body.isGuest,
      password: body.password,
      email: body.email,
      username: body.username
    });
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
exports.confirmPOST = function(body) {
  return new Promise(function(resolve, _) {
    var examples = {};
    examples['application/json'] = {
      "userId" : 4221,
      "totalprice" : 26.97,
      "paymentBody" : "Correct Payment Process",
      "products" : [ {
      "quantity" : 3,
      "productId" : 14,
      "price" : 8.99,
      "name" : "3-day ticket"}, 
      { "quantity" : 3,
        "productId" : 14,
        "price" : 8.99,
        "name" : "3-day ticket"
    } ]
  };

    // Payment is rejected
    if (Object.keys(body).length === 0) {
      resolve(undefined);
      return;
    }

    resolve({
      userId: body.userId,
      totalprice: body.totalprice,
      paymentBody: body.paymentBody,
      products: body.products.map(product => ({
        productId: product.productId,
        quantity: product.quantity,
        price: product.price,
        name: product.name
      }))
    });
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
  return new Promise(function(resolve, _) {
    var examples = {};
    examples['application/json'] = { 
      "userID": 4221,
      "totalPrice":26.97,
      "cartBody": "This is the customer's cart",
      "products" : [ {
      "quantity" : 3,
      "productID" : 14,
      "price" : 8.99,
      "name" : "3-day ticket"}, 
      { "quantity" : 3,
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
exports.setCartAttributes = function(body) {
  return new Promise(function(resolve, _) {
    var examples = {};
    examples['application/json'] = {
      "userID": 4221,
      "totalPrice":26.97,
      "cartBody": "This is the customer's cart",
      "products" : [ {
      "quantity" : 3,
      "productID" : 14,
      "price" : 8.99,
      "name" : "3-day ticket"}, 
      { "quantity" : 3,
        "productID" : 14,
        "price" : 8.99,
        "name" : "3-day ticket"
    } ]  
  };
    if (
      body.userID !== 4221 || 
      body.totalPrice !== 26.97 ||
      body.cartBody !=="This is the customer's cart"||
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
exports.setCartProductAttributes = function(body) {
  return new Promise(function(resolve, _) {
    var examples = {};
    examples['application/json'] = {
      "userId" : 4221,
      "cartBody" : "This is the product's quantity cart",
      "totalprice" : 26.97,
      "products" : [ {
    "quantity" : 3,
    "product-id" : 14,
    "price" : 8.99,
    "name" : "3-day ticket"}, 
    { "quantity" : 3,
      "product-id" : 14,
      "price" : 8.99,
      "name" : "3-day ticket"
    } ]
  };
    if (body.userId !== 4221 && body.productId !== 14) {
      resolve({
        status: 404,
        body: {
          message: "Wrong Quantity"
        }
      });
    }

    // Success
    resolve({
      status: 200,
      body: {
        userId : body.userID,
        cartBody: body.cartBody,
        totalprice : body.totalprice,
        products : [
        {
        productId : body.productId,
        name : body.name,
        price : body.price,
        quantity : body.quantity
        }
        ]
      }
      });
  });
}

