import {applyMiddleware, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import logger from './middleware/logger';
import reducer from './reducers';

const middleware = [thunkMiddleware, logger];

const store = createStore(reducer, applyMiddleware(...middleware));
export default store;
