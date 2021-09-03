import { call, put, spawn, takeLatest } from "@redux-saga/core/effects";
import { appID, BASE_URL, deleteData, getData, sendData } from "../../utils";

const ADD_BOOK_REQUEST = 'ADD_BOOK_REQUEST';
const ADD_BOOK_SUCCESS = 'ADD_BOOK_SUCCESS';
const REMOVE_BOOK_REQUEST = 'REMOVE_BOOK_REQUEST';
const REMOVE_BOOK_SUCCESS = 'REMOVE_BOOK_SUCCESS';
const GET_BOOKS_REQUEST = 'GET_BOOKS_REQUEST';
const GET_BOOKS_SUCCESS = 'GET_BOOKS_SUCCESS';


const initialState = [];

export const addBookRequest = payload => ({
  type: ADD_BOOK_REQUEST,
  payload
})
export const addBookSuccess = payload => ({
  type: ADD_BOOK_SUCCESS,
  payload
})

export const removeBookRequest = payload => ({
  type: REMOVE_BOOK_REQUEST,
  payload
});

export const removeBookSuccess = payload => ({
  type: REMOVE_BOOK_SUCCESS,
  payload
});

export const getBooksRequest = () => ({
  type: GET_BOOKS_REQUEST,
});

export const getBooksSuccess = payload => ({
  type: GET_BOOKS_SUCCESS,
  payload
});

// async functions
const addBookAsync = async (payload) => {
  const response = await sendData(`${BASE_URL}/apps/${appID}/books`, payload)
  return response
}

const removeBookAsync = async (payload) => {
  const response = await deleteData(`${BASE_URL}/apps/${appID}/books/${payload.id}`)
  return response
}

const getBookAsync = async () => {
  const response = await getData(`${BASE_URL}/apps/${appID}/books`)
  return response
}

// Redux Saga Generators
function* addBook({ payload }) {
  try {
    yield call(addBookAsync, payload);
    yield put(addBookSuccess({ ...payload }));
  } catch (err) {
    console.log(err);
  }
}

function* removeBook({ payload }) {
  try {
    yield call(removeBookAsync, payload);
    yield put(removeBookSuccess({ id: payload.id }));
  } catch (err) {
    console.log(err);
  }
}

function* getBooks() {
  try {
    const books = yield call(getBookAsync);
    yield put(getBooksSuccess(books));
  } catch (err) {
    console.log(err);
  }
}

// Redux Saga Wathcers
function* addBookWatcher() {
  yield takeLatest(ADD_BOOK_REQUEST, addBook);
}

function* removeBookWatcher() {
  yield takeLatest(REMOVE_BOOK_REQUEST, removeBook);
}

function* getBooksWatcher() {
  yield takeLatest(GET_BOOKS_REQUEST, getBooks);
}

export function* bookSagas() {
  yield spawn(addBookWatcher)
  yield spawn(removeBookWatcher)
  yield spawn(getBooksWatcher)
}

const reducer =  (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_BOOKS_SUCCESS:
      const books = Object.keys(payload).map((key) => {
        return { item_id: key, ...payload[key][0] }
      })
      state = books;
      return state;
      case ADD_BOOK_SUCCESS:
          return [ ...state, payload];
      case REMOVE_BOOK_SUCCESS:
          return state.filter(book => book.item_id !== payload.id);
      default:
          return state;
      }
  };
  
  export default reducer;