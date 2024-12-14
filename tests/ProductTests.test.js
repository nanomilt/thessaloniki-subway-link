const test = require('ava');

const { getProductEntity } = require("../service/ProductService.js");
const { deleteProductEntity } = require("../service/ProductService.js");
const { setProductAttributes } = require("../service/ProductService.js");
const { productEntity } = require("../service/ProductService.js");


test('GET /product/{productId} should return a product', async (t) => {  
    // Test with valid attributes
    const ProductEntity = await getProductEntity(14, 3); 
    
    console.log(ProductEntity);

    t.is(ProductEntity.status, 200);
    t.truthy(ProductEntity.body.productId === 14);
    t.truthy(ProductEntity.body.quantity === 3);
    t.truthy(ProductEntity.body.price === 8.99);
    t.truthy(ProductEntity.body.name === "3-day ticket");
});

test('GET /product/{productId} should return 404 for non-existent product', async (t) => {
    // Test with invalid productID (e.g., 999)
    const nonExistentProduct = await getProductEntity(999, 3);
    console.log('Non-existent product test:', nonExistentProduct);
    
    t.is(nonExistentProduct.status, 404);
    t.is(nonExistentProduct.body.message, "Product not found");
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


test('DELETE /product/{productId} should delete a product', async (t) => {
    // Test with valid attributes
    const response = await deleteProductEntity(14, "3-day ticket", 3, 8.99); 
        
    console.log(response);

    t.is(response.status, 200);
    t.is(response.message, "Product deleted successfully");
});

test('DELETE /product/{productId} should return 404 for non-existent productID', async (t) => {
    // Test with invalid productID (e.g., 999)
    const response = await deleteProductEntity(999, "3-day ticket", 3, 8.99); 

    console.log(response);

    t.is(response.status, 404);
    t.is(response.body.message, "Product not found");
});

test('DELETE /product/{productId} should return 404 for valid productID but invalid product attributes', async (t) => {
    // Test with valid productID but invalid product attributes
    const response = await deleteProductEntity(14, "2-day ticket", 5, 15.99); 

    console.log(response);

    t.is(response.status, 404);
    t.falsy(response.body.name === "3-day ticket");
    t.falsy(response.body.quantity === 3);
    t.falsy(response.body.price === 8.99);
    t.is(response.body.message, "Product not found");
});


test('PUT /product/{productId} should update product attributes', async (t) => {
    // Test with new attributes
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
    // Test with invalid productID (e.g., 10)
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

test('PUT /product/{productId} with invalid product name format', async (t) => {
    // Test with invalid product name format
    const updatedProduct = {
        "quantity": 5,
        "price": 10.99,
        "name": "2.5-day ticket"
    };

    const response = await setProductAttributes(updatedProduct, 14);
    console.log('Update product test:', response);

    t.is(response.status, 400);
    t.is(response.body.message, "Invalid product name format");
});

test('PUT /product/{productId} with invalid product price', async (t) => {
    // Test with invalid product price
    const updatedProduct = {
        "quantity": 5,
        "price": -10.99,
        "name": "3-day ticket"
    };

    const response = await setProductAttributes(updatedProduct, 14);
    console.log('Update product test:', response);

    t.is(response.status, 400);
    t.is(response.body.message, "Price cannot be negative");
});

test('POST /product should create a new product', async (t) => {
    // Test with new attributes
    const newProduct = {
        "quantity": 3,
        "productId": 14,
        "price": 8.99,
        "name": "3-day ticket"
    };
    
    const response = await productEntity(newProduct);
    console.log('Create product test:', response);

    t.truthy(response);
    t.is(response.status, 200);
    t.is(response.body.quantity, 3);
    t.is(response.body.productId, 14);
    t.is(response.body.price, 8.99);
    t.is(response.body.name, "3-day ticket");
});

test('POST /product should handle empty examples', async (t) => {
    // Test with empty product attributes
    const emptyProduct = {};
    
    const response = await productEntity(emptyProduct);
    console.log('Empty product test:', response);

    t.is(response, undefined);
});

test('POST /product should handle invalid product price', async (t) => {
    // Test with new attributes, but invalid product price
    const newProduct = {
        "quantity": 3,
        "productId": 14,
        "price": 20.99,
        "name": "3-day ticket"
    };
    
    const response = await productEntity(newProduct);
    console.log('Invalid price test:', response);

    t.is(response.status, 400);
    t.is(response.body.message, "Price cannot exceed 20");
})