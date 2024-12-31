var ResponsePayload = function(code, payload) {
  this.code = code;
  this.payload = payload;
}

exports.respondWithCode = function(code, payload) {
  return new ResponsePayload(code, payload);
}

function determineResponseCode(arg1, arg2) {
  if (arg2 && Number.isInteger(arg2)) {
    return arg2;
  }
  if (arg1 && Number.isInteger(arg1)) {
    return arg1;
  }
  return 200; // default code
}

function determinePayload(arg1) {
  if (arg1 && typeof arg1 === 'object') {
    return JSON.stringify(arg1, null, 2);
  }
  return arg1;
}

function sendResponse(response, code, payload) {
  response.writeHead(code, {'Content-Type': 'application/json'});
  response.end(payload);
}

var writeJson = exports.writeJson = function(response, arg1, arg2) {
  if (arg1 && arg1 instanceof ResponsePayload) {
    writeJson(response, arg1.payload, arg1.code);
    return;
  }

  const code = determineResponseCode(arg1, arg2);
  const payload = determinePayload(arg1);

  sendResponse(response, code, payload);
}
