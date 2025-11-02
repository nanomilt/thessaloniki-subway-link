import * as dotenv from 'dotenv';
dotenv.config();

'use strict';

var path = require('path');
var https = require('https');
var fs = require('fs');

var oas3Tools = require('oas3-tools');
var serverPort = 8443;

// swaggerRouter configuration
var options = {
    routing: {
        controllers: path.join(__dirname, './controllers')
    },
};

var expressAppConfig = oas3Tools.expressAppConfig(path.join(__dirname, 'api/openapi.yaml'), options);
var app = expressAppConfig.getApp();

// SSL/TLS certificate configuration
var httpsOptions = {
    key: fs.readFileSync(process.env.SSL_KEY_PATH || 'server-key.pem'),
    cert: fs.readFileSync(process.env.SSL_CERT_PATH || 'server-cert.pem')
};

// Initialize the Swagger middleware with HTTPS
https.createServer(httpsOptions, app).listen(serverPort, function () {
    console.log('Your server is listening on port %d (https://localhost:%d)', serverPort, serverPort);
    console.log('Swagger-ui is available on https://localhost:%d/docs', serverPort);
});