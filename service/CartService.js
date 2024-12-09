'use strict';


/**
 * Create a user''s cart
 * Create a user''s cart
 *
 * body Userid_cart_body_1 
 * userId Integer The ID of the user
 * returns inline_response_200
 **/
exports.cartEntity = function(body,userId) {
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


/**
 * Generate QR codes for pruchased items
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
exports.confirmPOST = function(body,userId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "userId" : 4221,
  "totalprice" : 26.97,
  "paymentBody" : "Correct Payment Process",
  "products" : [ {
    "quantity" : 3,
    "productId" : 14,
    "price" : 8.99,
    "name" : "3-day ticket"
  }, {
    "quantity" : 3,
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
exports.getCartEntity = function(userId) {
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


/**
 * Edit a user''s cart
 * Edit a user''s cart
 *
 * body Userid_cart_body 
 * userId Integer The ID of the user
 * returns inline_response_200
 **/
exports.setCartAttributes = function(body,userId) {
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


/**
 * Edit a user''s product quantity in the cart
 * Edit a user''s product quantity in the cart
 *
 * body Product_productid_body_1 
 * userId Integer 
 * productId Integer 
 * returns inline_response_200
 **/
exports.setCartProductAttributes = function(body,userId,productId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      "userId" : 4221,
      "cartBody" : "This is the product's quantity cart",
      "totalprice" : 26.97,
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

