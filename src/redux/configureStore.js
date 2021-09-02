import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import booksReducer, { bookSagas } from './books/books';

const reducer = combineReducers({
    booksReducer
    // additional reducers could be added here
});
const sagaMiddleWare = createSagaMiddleware();
const middlewares = [sagaMiddleWare, logger]
export const store = createStore(
    reducer,
    applyMiddleware(...middlewares)
);
sagaMiddleWare.run(bookSagas);