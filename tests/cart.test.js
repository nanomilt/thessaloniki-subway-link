const http = require('http');
const test = require('ava');
const got = require('got');
const app = (req, res) => {
    if (req.method === 'POST' && req.url === '/api') {
      let data = '';
  
      // Collect the request data
      req.on('data', chunk => {
        data += chunk;
      });
  
      // Handle the end of the request
      req.on('end', () => {
        const parsedData = JSON.parse(data);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({
          message: 'Data received successfully!',
          receivedData: parsedData, // Echo the received data
        }));
      });
  
    } else if (req.method === 'GET' && req.url === '/api') {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ message: 'It works!' }));
    } else {
      res.statusCode = 404;
      res.end();
    }
  };

test.before(async (t) => {
  // Create the server and listen on a random available port
  t.context.server = http.createServer(app);
  
  // Promisify the server.listen so we can wait for it to be ready
  await new Promise((resolve, reject) => {
    t.context.server.listen(0, () => {
      const { port } = t.context.server.address();
      t.context.got = got.extend({ responseType: 'json', prefixUrl: `http://localhost:${port}/` });
      resolve();
    });
  });
});

test.after.always((t) => {
  // Close the server after the tests
  t.context.server.close();
});

test("GET /api", async (t) => {
  const response = await t.context.got("api");
  console.log(response.body);  // Log the response body for debugging
  t.is(response.statusCode, 200);
  t.is(response.body.message, "It works!");
});
test("POST /api", async (t) => {
    const postData = { name: 'John Doe', age: 30 };
  
    const response = await t.context.got.post('api', {
      json: postData, // Send the data as JSON
      responseType: 'json', // Expect JSON in the response
    });
  
    console.log(response.body);  // Log the response body for debugging
    t.is(response.statusCode, 200);
    t.is(response.body.message, 'Data received successfully!');
    t.deepEqual(response.body.receivedData, postData); // Verify the data received matches
  });