// Constructor for a response payload object
var ResponsePayload = function(code, payload) {
  this.code = code;
  this.payload = payload;
}

// Function to create a response payload object with the given code and payload
exports.respondWithCode = function(code, payload) {
  return new ResponsePayload(code, payload);
}

// Function to determine the response payload
function determineResponseCode(arg1, arg2) {
  if (arg2 && Number.isInteger(arg2)) {
    return arg2; // Return arg2 if it's a valid integer
  }
  if (arg1 && Number.isInteger(arg1)) {
    return arg1; // Return arg1 if it's a valid integer
  }
  return 200; // default code
}

// Function to determine the payload
function determinePayload(arg1) {
  if (arg1 && typeof arg1 === 'object') {
    return JSON.stringify(arg1, null, 2); // Return converted string arg1 if it's an object
  }
  return arg1; // Return arg1 if it's not an object
}

// Function to send the response
function sendResponse(response, code, payload) {
  response.writeHead(code, {'Content-Type': 'application/json'});
  response.end(payload);
}

// Function to write a JSON response
var writeJson = exports.writeJson = function(response, arg1, arg2) {
  if (arg1 && arg1 instanceof ResponsePayload) {
    writeJson(response, arg1.payload, arg1.code);
    return;
  }

  // Determine the response code and payload
  const code = determineResponseCode(arg1, arg2);
  const payload = determinePayload(arg1);

  // Send the response
  sendResponse(response, code, payload);
}
