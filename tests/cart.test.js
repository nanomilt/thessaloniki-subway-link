const http = require('http');
const test = require('ava');
const listen = require('test-listen');
const got = require('got');
const { cartEntity } = require('../service/CartService.js'); 
const app = require('../index.js'); 
const { getCartEntity } = require('../service/CartService.js');

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
test('GET /CartEntity/{userId} should return the cart', async (t) => {
  const CartEntity = await getCartEntity(34); 
  
  console.log(CartEntity);

  t.is(CartEntity.status, 200);
  t.truthy(CartEntity.body.userID == 34);
  t.truthy(CartEntity.body.cartBody ==  "This is the costumer's cart");
});

test('GET /CartEntityy/{userID} should return 404 if cart not found', async (t) => {
  const cartNotFound = await getCartEntity(35);
  console.log("Cart not found:", cartNotFound);

  t.is(cartNotFound.status, 404);
  t.is(cartNotFound.body.message, "Cart not found");
});