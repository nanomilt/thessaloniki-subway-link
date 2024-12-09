const http = require('http');
const test = require('ava');
const listen = require("test-listen");
const got = require('got');
const app = require("../index.js");

const { setCartProductAttributes } = require("../service/CartService.js");
const { confirmPOST } = require("../service/CartService.js");
const { confirmGeneratePOST } = require("../service/CartService.js");

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

test('PUT /should update the product quantity in the cart', async (t) => {
    const updatedProductCart = {
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
  
    const response = await setCartProductAttributes(updatedProductCart);
     console.log('Edit Cart test:', response);
  
    t.is(response.status, 404);
    t.is(response.body.message, "Wrong Quantity");

});

test('POST /should confirm a payment process', async (t) => {
    const newPayment = {
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

test('POST /payment page should handle a rejected payment', async (t) => {
    const rejectPayment = {};
    
    const response = await confirmPOST(rejectPayment);
    console.log('Reject Payment test:', response);

    t.is(response, undefined);
});


test('POST /should generate QR codes for purchased items', async (t) => {
    const newQRCode = {
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

test('POST /QR Code could not be generated', async (t) => {
    const rejectQRCode = {};
    
    const response = await confirmGeneratePOST(rejectQRCode);
    console.log('QR Code could not generate test:', response);

    t.is(response, undefined);
});