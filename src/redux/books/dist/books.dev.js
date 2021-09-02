"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.removeBook = exports.addBook = void 0;

var _uuid = require("uuid");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var ADD_BOOK = 'bookStore/books/ADD_BOOK';
var REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
var initialState = {
  books: [{
    id: _uuid.v4,
    title: "",
    categories: ""
  }]
};

var addBook = function addBook(payload) {
  return {
    type: ADD_BOOK,
    payload: payload
  };
};

exports.addBook = addBook;

var removeBook = function removeBook(payload) {
  return {
    type: REMOVE_BOOK,
    payload: payload
  };
};

exports.removeBook = removeBook;

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case ADD_BOOK:
      return [].concat(_toConsumableArray(state.books), [action.payload]);

    case REMOVE_BOOK:
      return state.filter(function (book) {
        return book.id !== id;
      });

    default:
      return state;
  }
};

var _default = reducer;
exports["default"] = _default;