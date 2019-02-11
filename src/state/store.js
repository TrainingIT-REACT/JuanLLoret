import {applyMiddleware, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';
import reducer from './reducers';

const middleware = [thunkMiddleware, createLogger()];

const store = createStore(reducer, applyMiddleware(...middleware));
export default store;
