// Import AVA framework
const test = require('ava');

// Import service functions from Cart service
const { cartEntity } = require('../service/CartService.js'); 
const { getCartEntity } = require('../service/CartService.js');
const { setCartAttributes} = require('../service/CartService.js');
const { confirmGeneratePOST} = require('../service/CartService.js');
const { setCartProductAttributes} = require('../service/CartService.js');
const { confirmPOST} = require('../service/CartService.js');

// Test case for creating a new Cart
test('POST /cart should create a cart page', async (t) => {
  const newCart = {  // create a new Cart instance
     "userID" : 4221,
     "totalPrice":26.97,
     "cartBody": "This is the customer's cart",
     "products" : [ {
      "quantity" : 3,
      "productID" : 14,
      "price" : 8.99,
      "name" : "3-day ticket"
    }
  ]
  };
  const response = await cartEntity(newCart); // call the cartEntity function with the new Cart instance
  console.log('Create Cart test:', response);

  t.truthy(response);
  t.is(response.userID, 4221);
  t.is(response.cartBody, "This is the customer's cart");
  t.is(response.totalPrice, 26.97);
  t.is(response.products[0].productID, 14);
  t.is(response.products[0].name, "3-day ticket");
  t.is(response.products[0].price, 8.99);
  t.is(response.products[0].quantity, 3);
});

// Test case for getting a cart with a specific userID
test('GET /CartEntity/{userId} should return the cart', async (t) => {
  const CartEntity = await getCartEntity(4221); // calls the getCartEntity function with the correct userID
  
  console.log(CartEntity);

  t.is(CartEntity.status, 200);
  t.truthy(CartEntity.body.userID == 4221);
  t.truthy(CartEntity.body.totalPrice == 26.97);
  CartEntity.body.products.forEach(product => {
    t.truthy(product.quantity == 3);  
    t.truthy(product.productID == 14);
    t.truthy(product.price == 8.99);
    t.truthy(product.name == "3-day ticket");
  });
});

// Test case for getting a cart not found error message
test('GET /CartEntity/{userID} should return 404 if cart not found', async (t) => {
  const cartNotFound = await getCartEntity(4222); // Calls function with incorrect userID
  console.log("Cart not found:", cartNotFound);

  t.is(cartNotFound.status, 404);
  t.is(cartNotFound.body.message, "Cart not found");
});

// Test case for updating the cart
test('PUT /cart should update the cart', async (t) => {
  const updatedCart = { // Create a new cart instance to update the cart
      "userID" : 4221,
      "cartBody" : "This is the customer's cart",
      "totalPrice":26.97,
      "products" : [ {
      "quantity" : 3,
      "productID" : 14,
      "price" : 8.99,
      "name" : "3-day ticket"
    }
  ]
  };

  const response = await setCartAttributes(updatedCart);
  
  t.is(response.status, 200);
  t.is(response.body.cartBody, "This is the customer's cart");
});

// Test case for an updated cart that wasn't found 
test('PUT /cart should return 404 if cart not found', async (t) => {
  const updatedCart = {
      "userID" : 4222,
      "totalPrice":26.97,
      "cartBody" : "This is the customer's cart",
      "products" : [ {
      "quantity" : 3,
      "productID" : 14,
      "price" : 8.99,
      "name" : "3-day ticket"
    }
  ]
  };

  const response = await setCartAttributes(updatedCart);
   console.log('Edit Cart test:', response);

  t.is(response.status, 404);
  t.is(response.body.message, "Cart not found");
});

/*==================== ANDREAS ====================*/

// Test case for updating the product quantity in the cart
test('PUT /should update the product quantity in the cart', async (t) => {
    const updatedProductCart = {  // Create a new product instance to update the product quantity in the cart
        "userId" : 4221,
        "cartBody" : "This is the product's quantity in the cart",
        "totalprice" : 26.97,
        "products" : [
            {
                "productId" : 14,
                "name" : "3-day ticket",
                "price" : 8.99,
                "quantity" : 3
            }
        ]
    };
  
    const response = await setCartProductAttributes(updatedProductCart);
    
    t.is(response.status, 200);
    t.is(response.body.cartBody, "This is the product's quantity in the cart");
  });
  
  // Test case for an updated product quantity in the cart that wasn't found
  test('PUT /cart should return wrong quantity if there is not enough quantity of the product', async (t) => {
    const updatedProductCart = {
        "userId" : 4222,
        "cartBody" : "This is the product's quantity cart",
        "totalprice" : 29.98,
        "products" : [
            {
                "productId" : 15,
                "name" : "5-day ticket",
                "price" : 14.99,
                "quantity" : 2
            }
        ]
    };
  
    const response = await setCartProductAttributes(updatedProductCart); // Call function with updated product instance with wrong quantity attribute
     console.log('Edit Cart test:', response);
  
    t.is(response.status, 404);
    t.is(response.body.message, "Wrong Quantity");

});

// Test case for confirming a payment process
test('POST /should confirm a payment process', async (t) => {
    const newPayment = { // Create a new payment instance to confirm the payment process
       "userId" : 4221,
       "totalprice" : 26.97,
       "paymentBody" : "Correct Payment Process",
       "products" : [
        {
         "quantity" : 3,
         "productId" : 14,
         "price" : 8.99,
         "name" : "3-day ticket"
       }
     ]
    };
    const response = await confirmPOST(newPayment);
    console.log('Confirm Payment Process:', response);
  
    t.truthy(response);
    t.is(response.userId, 4221);
    t.is(response.totalprice, 26.97);
    t.is(response.paymentBody, "Correct Payment Process");
    t.is(response.products[0].quantity, 3);
    t.is(response.products[0].productId, 14);
    t.is(response.products[0].price, 8.99);
    t.is(response.products[0].name, "3-day ticket");
});

// Test case for a rejected payment request
test('POST /payment page should handle a rejected payment', async (t) => {
    const rejectPayment = {}; // Create an empty object for a rejected payment request
    
    const response = await confirmPOST(rejectPayment);
    console.log('Reject Payment test:', response);

    t.is(response, undefined);
});

// Test case for successful QR Code generation
test('POST /should generate QR codes for purchased items', async (t) => {
    const newQRCode = {   // Create a new QR Code instance
        "isGuest" : false,
        "password" : "SoftEng2024!",
        "userId" : 4221,
        "email" : "klpanagi@ece.auth.gr",
        "username" : "klpanagi"
    };
    
    const response = await confirmGeneratePOST(newQRCode);
    console.log('Generate QR Code test:', response);
    
    t.truthy(response);
    t.is(response.userId, 4221);
    t.is(response.isGuest, false);
    t.is(response.password, "SoftEng2024!");
    t.is(response.email, "klpanagi@ece.auth.gr");
    t.is(response.username, "klpanagi");

});

// Test case for unsuccessful QR Code generation
test('POST /QR Code could not be generated', async (t) => {
    const rejectQRCode = {}; // Create a new empty QR Code instance
    
    const response = await confirmGeneratePOST(rejectQRCode);
    console.log('QR Code could not generate test:', response);

    t.is(response, undefined);
});
