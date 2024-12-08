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
     "userID" : 24,
     "cartBody": "This is the costumer's cart"
  };
  const response = await cartEntity(newCart);
  console.log('Create Cart test:', response);

  t.truthy(response);
  t.is(response.userID, 24);
  t.is(response.cartBody, "This is the costumer's cart");
});

test('POST /cart should handle empty cart', async (t) => {
  const emptyCart = {};
  
  const response = await cartEntity(emptyCart);
  console.log('Empty Cart test:', response);

  t.is(response, undefined);
});
test('GET /CartEntity/{userId} should return the cart', async (t) => {
  const CartEntity = await getCartEntity(34); 
  
  console.log(CartEntity);

  t.is(CartEntity.status, 200);
  t.truthy(CartEntity.body.userID == 34);
  t.truthy(CartEntity.body.cartBody ==  "This is the costumer's cart");
});

test('GET /CartEntity/{userID} should return 404 if cart not found', async (t) => {
  const cartNotFound = await getCartEntity(35);
  console.log("Cart not found:", cartNotFound);

  t.is(cartNotFound.status, 404);
  t.is(cartNotFound.body.message, "Cart not found");
});
test('PUT /cart should update the cart', async (t) => {
  const updatedCart = {
      "userID" : 64,
      "cartBody" : "This is the costumer's cart"
  };

  const response = await setCartAttributes(updatedCart);
  

  t.is(response.status, 200);
  t.is(response.body.cartBody, "This is the costumer's cart");
});

test('PUT /cart should return 404 if cart not found', async (t) => {
  const updatedCart = {
      "userID" : 65,
      "cartBody" : "This is the costumer's cart"
  };

  const response = await setCartAttributes(updatedCart);
   console.log('Edit Cart test:', response);

  t.is(response.status, 404);
  t.is(response.body.message, "Cart not found");
});