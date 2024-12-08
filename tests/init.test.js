const http = require('http');
const test = require('ava');
const got = require('got');

test("A test that passes", (t) => {
	t.pass();
});

// test("A test that fails", (t) => {
// 	t.fail();
// });

// test("Throws error", (t) => {
// 	t.throws(() => {
// 		throw new Error("Test failed");
// 	})
// });

// const addNumbers = (a, b) => a + b;

// test("Test addNumbers", (t) => {
// 	t.is(addNumbers(1, 2), 3);
// 	t.is(addNumbers(3, 5), 8);
// 	t.is(addNumbers(999, 111), 1110);
// 	t.is(addNumbers(-3, -12), -15);
// 	t.is(addNumbers(0, 0), 0);
// 	t.is(addNumbers(3, -1), 2);
// 	t.is(addNumbers(1, "2"), "12");
// 	t.is(addNumbers("1", "2"), "12");
// 	t.is(addNumbers(undefined, 2), NaN);
// 	t.is(addNumbers(), NaN);

// });



// test.before((t) => {
// 	t.context.server = http.createServer(app);
// 	const server = t.context.server.listen();
// 	const { port } = server.address();
// 	t.context.got = got.extend({ responseType: "json", prefixUrl: `http://localhost:${port}` });
// });

// test.after.always((t) => {
// 	t.context.server.close();
// });

// test("GET /api", async (t) => {
// 	const response = await t.context.got("api");
// 	console.log(response);
// 	t.is(response.statusCode, 200);
// 	t.is(response.body.message, "It works!");
	
// });