import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import logger from './middleware/logger';
import reducer from './reducers';
import {restoreSession} from './actions/UserActions';

const middleware = [thunk, promise, logger];

const store = createStore(reducer, applyMiddleware(...middleware));
store.dispatch(restoreSession());

export default store;
