const http = require('http');
const test = require('ava');
const listen = require("test-listen");
const got = require('got');
const app = require("../index.js");

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

// This test is needed so that error "No tests found in tests\initServer.js" does not occur
test('A test that passes', async (t) => {
    t.pass()
});
