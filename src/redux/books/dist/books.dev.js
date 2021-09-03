"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bookSagas = bookSagas;
exports["default"] = exports.getBooksSuccess = exports.getBooksRequest = exports.removeBookSuccess = exports.removeBookRequest = exports.addBookSuccess = exports.addBookRequest = void 0;

var _effects = require("@redux-saga/core/effects");

var _utils = require("../../utils");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var _marked =
/*#__PURE__*/
regeneratorRuntime.mark(addBook),
    _marked2 =
/*#__PURE__*/
regeneratorRuntime.mark(removeBook),
    _marked3 =
/*#__PURE__*/
regeneratorRuntime.mark(getBooks),
    _marked4 =
/*#__PURE__*/
regeneratorRuntime.mark(addBookWatcher),
    _marked5 =
/*#__PURE__*/
regeneratorRuntime.mark(removeBookWatcher),
    _marked6 =
/*#__PURE__*/
regeneratorRuntime.mark(getBooksWatcher),
    _marked7 =
/*#__PURE__*/
regeneratorRuntime.mark(bookSagas);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ADD_BOOK_REQUEST = 'ADD_BOOK_REQUEST';
var ADD_BOOK_SUCCESS = 'ADD_BOOK_SUCCESS';
var REMOVE_BOOK_REQUEST = 'REMOVE_BOOK_REQUEST';
var REMOVE_BOOK_SUCCESS = 'REMOVE_BOOK_SUCCESS';
var GET_BOOKS_REQUEST = 'GET_BOOKS_REQUEST';
var GET_BOOKS_SUCCESS = 'GET_BOOKS_SUCCESS';
var initialState = [];

var addBookRequest = function addBookRequest(payload) {
  return {
    type: ADD_BOOK_REQUEST,
    payload: payload
  };
};

exports.addBookRequest = addBookRequest;

var addBookSuccess = function addBookSuccess(payload) {
  return {
    type: ADD_BOOK_SUCCESS,
    payload: payload
  };
};

exports.addBookSuccess = addBookSuccess;

var removeBookRequest = function removeBookRequest(payload) {
  return {
    type: REMOVE_BOOK_REQUEST,
    payload: payload
  };
};

exports.removeBookRequest = removeBookRequest;

var removeBookSuccess = function removeBookSuccess(payload) {
  return {
    type: REMOVE_BOOK_SUCCESS,
    payload: payload
  };
};

exports.removeBookSuccess = removeBookSuccess;

var getBooksRequest = function getBooksRequest() {
  return {
    type: GET_BOOKS_REQUEST
  };
};

exports.getBooksRequest = getBooksRequest;

var getBooksSuccess = function getBooksSuccess(payload) {
  return {
    type: GET_BOOKS_SUCCESS,
    payload: payload
  };
}; // async functions


exports.getBooksSuccess = getBooksSuccess;

var addBookAsync = function addBookAsync(payload) {
  var response;
  return regeneratorRuntime.async(function addBookAsync$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap((0, _utils.sendData)("".concat(_utils.BASE_URL, "/apps/").concat(_utils.appID, "/books"), payload));

        case 2:
          response = _context.sent;
          return _context.abrupt("return", response);

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
};

var removeBookAsync = function removeBookAsync(payload) {
  var response;
  return regeneratorRuntime.async(function removeBookAsync$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap((0, _utils.deleteData)("".concat(_utils.BASE_URL, "/apps/").concat(_utils.appID, "/books/").concat(payload.id)));

        case 2:
          response = _context2.sent;
          return _context2.abrupt("return", response);

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  });
};

var getBookAsync = function getBookAsync() {
  var response;
  return regeneratorRuntime.async(function getBookAsync$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap((0, _utils.getData)("".concat(_utils.BASE_URL, "/apps/").concat(_utils.appID, "/books")));

        case 2:
          response = _context3.sent;
          return _context3.abrupt("return", response);

        case 4:
        case "end":
          return _context3.stop();
      }
    }
  });
}; // Redux Saga Generators


function addBook(_ref) {
  var payload;
  return regeneratorRuntime.wrap(function addBook$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          payload = _ref.payload;
          _context4.prev = 1;
          _context4.next = 4;
          return (0, _effects.call)(addBookAsync, payload);

        case 4:
          _context4.next = 6;
          return (0, _effects.put)(addBookSuccess(_objectSpread({}, payload)));

        case 6:
          _context4.next = 11;
          break;

        case 8:
          _context4.prev = 8;
          _context4.t0 = _context4["catch"](1);
          console.log(_context4.t0);

        case 11:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked, null, [[1, 8]]);
}

function removeBook(_ref2) {
  var payload;
  return regeneratorRuntime.wrap(function removeBook$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          payload = _ref2.payload;
          _context5.prev = 1;
          _context5.next = 4;
          return (0, _effects.call)(removeBookAsync, payload);

        case 4:
          _context5.next = 6;
          return (0, _effects.put)(removeBookSuccess({
            id: payload.id
          }));

        case 6:
          _context5.next = 11;
          break;

        case 8:
          _context5.prev = 8;
          _context5.t0 = _context5["catch"](1);
          console.log(_context5.t0);

        case 11:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked2, null, [[1, 8]]);
}

function getBooks() {
  var books;
  return regeneratorRuntime.wrap(function getBooks$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return (0, _effects.call)(getBookAsync);

        case 3:
          books = _context6.sent;
          _context6.next = 6;
          return (0, _effects.put)(getBooksSuccess(books));

        case 6:
          _context6.next = 11;
          break;

        case 8:
          _context6.prev = 8;
          _context6.t0 = _context6["catch"](0);
          console.log(_context6.t0);

        case 11:
        case "end":
          return _context6.stop();
      }
    }
  }, _marked3, null, [[0, 8]]);
} // Redux Saga Wathcers


function addBookWatcher() {
  return regeneratorRuntime.wrap(function addBookWatcher$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return (0, _effects.takeLatest)(ADD_BOOK_REQUEST, addBook);

        case 2:
        case "end":
          return _context7.stop();
      }
    }
  }, _marked4);
}

function removeBookWatcher() {
  return regeneratorRuntime.wrap(function removeBookWatcher$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.next = 2;
          return (0, _effects.takeLatest)(REMOVE_BOOK_REQUEST, removeBook);

        case 2:
        case "end":
          return _context8.stop();
      }
    }
  }, _marked5);
}

function getBooksWatcher() {
  return regeneratorRuntime.wrap(function getBooksWatcher$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          _context9.next = 2;
          return (0, _effects.takeLatest)(GET_BOOKS_REQUEST, getBooks);

        case 2:
        case "end":
          return _context9.stop();
      }
    }
  }, _marked6);
}

function bookSagas() {
  return regeneratorRuntime.wrap(function bookSagas$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          _context10.next = 2;
          return (0, _effects.spawn)(addBookWatcher);

        case 2:
          _context10.next = 4;
          return (0, _effects.spawn)(removeBookWatcher);

        case 4:
          _context10.next = 6;
          return (0, _effects.spawn)(getBooksWatcher);

        case 6:
        case "end":
          return _context10.stop();
      }
    }
  }, _marked7);
}

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;

  var _ref3 = arguments.length > 1 ? arguments[1] : undefined,
      type = _ref3.type,
      payload = _ref3.payload;

  switch (type) {
    case GET_BOOKS_SUCCESS:
      var books = Object.keys(payload).map(function (key) {
        return _objectSpread({
          item_id: key
        }, payload[key][0]);
      });
      state = books;
      return state;

    case ADD_BOOK_SUCCESS:
      return [].concat(_toConsumableArray(state), [payload]);

    case REMOVE_BOOK_SUCCESS:
      return state.filter(function (book) {
        return book.item_id !== payload.id;
      });

    default:
      return state;
  }
};

var _default = reducer;
exports["default"] = _default;