import {applyMiddleware, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import logger from './middleware/logger';
import reducer from './reducers';
import {restoreSession} from './actions/UserActions';

const middleware = [thunkMiddleware, logger];

const store = createStore(reducer, applyMiddleware(...middleware));
store.dispatch(restoreSession());

export default store;
