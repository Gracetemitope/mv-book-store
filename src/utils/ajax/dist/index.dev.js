"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.appID = exports.BASE_URL = exports.deleteData = exports.getData = exports.sendData = exports.sendHttpRequest = void 0;

var sendHttpRequest = function sendHttpRequest(method, url, data) {
  var _response, err, _contentType, response, _err, contentType;

  return regeneratorRuntime.async(function sendHttpRequest$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!(method === 'GET' || method === 'DELETE')) {
            _context.next = 15;
            break;
          }

          _context.next = 3;
          return regeneratorRuntime.awrap(fetch(url, {
            method: method,
            headers: {
              'Accept': 'application/json'
            }
          }));

        case 3:
          _response = _context.sent;

          if (!(_response.status >= 400)) {
            _context.next = 9;
            break;
          }

          _context.next = 7;
          return regeneratorRuntime.awrap(_response.json());

        case 7:
          err = _context.sent;
          throw err;

        case 9:
          _contentType = _response.headers.get("content-type");

          if (!(_contentType && _contentType.indexOf("application/json") !== -1)) {
            _context.next = 14;
            break;
          }

          return _context.abrupt("return", _response.json());

        case 14:
          return _context.abrupt("return", _response.text());

        case 15:
          _context.next = 17;
          return regeneratorRuntime.awrap(fetch(url, {
            method: method,
            body: JSON.stringify(data),
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            }
          }));

        case 17:
          response = _context.sent;

          if (!(response.status >= 400)) {
            _context.next = 23;
            break;
          }

          _context.next = 21;
          return regeneratorRuntime.awrap(response.json());

        case 21:
          _err = _context.sent;
          throw _err;

        case 23:
          contentType = response.headers.get("content-type");

          if (!(contentType && contentType.indexOf("application/json") !== -1)) {
            _context.next = 28;
            break;
          }

          return _context.abrupt("return", response.json());

        case 28:
          return _context.abrupt("return", response.text());

        case 29:
        case "end":
          return _context.stop();
      }
    }
  });
};

exports.sendHttpRequest = sendHttpRequest;
var appID = 'n2gePywOhjdVEWf2vIlI';
exports.appID = appID;
var BASE_URL = "https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi";
exports.BASE_URL = BASE_URL;

var getData = function getData(url) {
  return sendHttpRequest('GET', url, null);
};

exports.getData = getData;

var sendData = function sendData(url, data) {
  return sendHttpRequest('POST', url, data);
};

exports.sendData = sendData;

var deleteData = function deleteData(url) {
  return sendHttpRequest('DELETE', url, null);
};

exports.deleteData = deleteData;