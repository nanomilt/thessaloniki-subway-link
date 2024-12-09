const http = require('http');
const test = require('ava');
const listen = require('test-listen');
const got = require('got');
const app = require('../index.js'); 
const { cartEntity } = require('../service/CartService.js'); 
const { getCartEntity } = require('../service/CartService.js');
const { setCartAttributes} = require('../service/CartService.js');

test.before(async (t) => {
	t.context.server = http.createServer(app);
    t.context.prefixUrl = await listen(t.context.server);
    // const server = t.context.server.listen();
    // const { port } = server.address();
	t.context.got = got.extend({ 
        responseType: "json", 
        prefixUrl: t.context.prefixUrl,
    });
});

test.after.always((t) => {
  t.context.server.close();
});
test('POST /cart should create a cart page', async (t) => {
  const newCart = {
     "userID" : 4221,
     "totalPrice":26.97,
     "cartBody": "This is the costumer's cart",
     "products" : [ {
      "quantity" : 3,
      "productID" : 14,
      "price" : 8.99,
      "name" : "3-day ticket"
    }
  ]
  };
  const response = await cartEntity(newCart);
  console.log('Create Cart test:', response);

  t.truthy(response);
  t.is(response.userID, 4221);
  t.is(response.cartBody, "This is the costumer's cart");
  t.is(response.totalPrice, 26.97);
  t.is(response.products[0].productID, 14);
  t.is(response.products[0].name, "3-day ticket");
  t.is(response.products[0].price, 8.99);
  t.is(response.products[0].quantity, 3);
});

test('POST /cart should handle empty cart', async (t) => {
  const emptyCart = {};
  
  const response = await cartEntity(emptyCart);
  console.log('Empty Cart test:', response);

  t.is(response, undefined);
});
test('GET /CartEntity/{userId} should return the cart', async (t) => {
  const CartEntity = await getCartEntity(4221); 
  
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

test('GET /CartEntity/{userID} should return 404 if cart not found', async (t) => {
  const cartNotFound = await getCartEntity(4222);
  console.log("Cart not found:", cartNotFound);

  t.is(cartNotFound.status, 404);
  t.is(cartNotFound.body.message, "Cart not found");
});
test('PUT /cart should update the cart', async (t) => {
  const updatedCart = {
      "userID" : 4221,
      "cartBody" : "This is the costumer's cart",
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
  t.is(response.body.cartBody, "This is the costumer's cart");
});

test('PUT /cart should return 404 if cart not found', async (t) => {
  const updatedCart = {
      "userID" : 4222,
      "totalPrice":26.97,
      "cartBody" : "This is the costumer's cart",
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