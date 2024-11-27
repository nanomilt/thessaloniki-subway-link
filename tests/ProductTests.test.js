const http = require('http');
const test = require('ava');
const listen = require("test-listen");
const got = require('got');
const app = require("../index.js");

const { getProductEntity } = require("../service/ProductService.js");

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



test('GET /product/{productId} should return a product', async (t) => {
    const ProductEntity = await getProductEntity(14); // 14: AnnouncementID TODO: generateTestID function
    
    t.is(ProductEntity.status, 200);
    t.truthy(ProductEntity.body.productID == 14);
    t.truthy(ProductEntity.body.quantity == 3);
    t.truthy(ProductEntity.body.price == 8.99);
});