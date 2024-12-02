const http = require('http');
const test = require('ava');
const listen = require("test-listen");
const got = require('got');
const app = require("../index.js");

const { getProductEntity } = require("../service/ProductService.js");
const { deleteProductEntity } = require("../service/ProductService.js");
const { setProductAttributes } = require("../service/ProductService.js");
const { productEntity } = require("../service/ProductService.js");

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
    const ProductEntity = await getProductEntity(14, 3); // 14: Can combine these tests into one test with more dynamic productId
    
    console.log(ProductEntity);

    t.is(ProductEntity.status, 200);
    t.truthy(ProductEntity.body.productId === 14);
    t.truthy(ProductEntity.body.quantity === 3);
    t.truthy(ProductEntity.body.price === 8.99);
    t.truthy(ProductEntity.body.name === "3-day ticket");
});

test('GET /product/{productId} should return 404 for non-existent product', async (t) => {
    // Test with invalid product ID (e.g., 999)
    const nonExistentProduct = await getProductEntity(999, 3);
    console.log('Non-existent product test:', nonExistentProduct);
    
    t.is(nonExistentProduct.status, 404);
    t.is(nonExistentProduct.body.message, "Product not found");
});


test('DELETE /product/{productId} should delete a product', async (t) => {
        const response = await deleteProductEntity(14, "3-day ticket", 3, 8.99); // Assuming 14 is the productId to delete
        
        console.log(response);

        t.is(response.status, 200);
        t.is(response.message, "Product deleted successfully");
});

test('DELETE /product/{productId} should return 404 for non-existent product ID', async (t) => {
    const response = await deleteProductEntity(999, "3-day ticket", 3, 8.99); // Assuming 999 is the productId to delete

    console.log(response);

    t.is(response.status, 404);
    t.is(response.body.message, "Product not found");
});

test('DELETE /product/{productId} should return 404 for valid Id but invalid product data', async (t) => {
    const response = await deleteProductEntity(14, "2-day ticket", 5, 15.99); // Assuming 999 is the productId to delete

    console.log(response);

    t.is(response.status, 404);
    t.falsy(response.body.name === "3-day ticket");
    t.falsy(response.body.quantity === 3);
    t.falsy(response.body.price === 8.99);
    t.is(response.body.message, "Product not found");
});


test('GET /product/{productId} should handle different quantities', async (t) => {
    // Test valid quantity
    const validProduct = await getProductEntity(14, 3);
    console.log('Valid quantity test:', validProduct);
    t.is(validProduct.status, 200);
    t.is(validProduct.body.quantity, 3);

    // Test quantity over limit
    const invalidProduct = await getProductEntity(14, 51);
    console.log('Invalid quantity test:', invalidProduct);
    t.is(invalidProduct.status, 400);
    t.is(invalidProduct.message, "Quantity exceeds limit");
});

test('PUT /product/{productId} should update product attributes', async (t) => {
    const updatedProduct = {
        "quantity": 5,
        "price": 10.99,
        "name": "3-day ticket"
    };
    
    const response = await setProductAttributes(updatedProduct, 14);
    console.log('Update product test:', response);

    t.is(response.status, 200);
    t.is(response.body.quantity, 5);
    t.is(response.body.price, 10.99);
    t.is(response.body.productId, 14);
    t.is(response.body.name, "3-day ticket");
    t.is(response.message, "Product updated successfully");
});

test('PUT /product/{productId} with invalid productId', async (t) => {
    const updatedProduct = {
        "quantity": 5,
        "price": 10.99,
        "name": "3-day ticket"
    };
    
    const response = await setProductAttributes(updatedProduct, 10);
    console.log('Update product test:', response);

    t.is(response.status, 404);
    t.is(response.body.message, "Product not found");
});

test('POST /product should create a new product', async (t) => {
    const newProduct = {
        "quantity": 3,
        "productId": 14,
        "price": 8.99,
        "name": "3-day ticket"
    };
    
    const response = await productEntity(newProduct);
    console.log('Create product test:', response);

    t.truthy(response);
    t.is(response.quantity, 3);
    t.is(response.productId, 14);
    t.is(response.price, 8.99);
    t.is(response.name, "3-day ticket");
});

test('POST /product should handle empty examples', async (t) => {
    // Force examples to be empty
    const emptyProduct = {};
    
    const response = await productEntity(emptyProduct);
    console.log('Empty product test:', response);

    t.is(response, undefined);
});


/** 
 * TODO Test to update a product that doesn't exist
 * TODO Test to update a product with invalid attributes (need to update the service)
 * TODO Test to return a product with invalid attributes (???)
 * TODO Add more tests 
 */