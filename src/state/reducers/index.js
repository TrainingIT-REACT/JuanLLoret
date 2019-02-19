import {combineReducers} from 'redux';
import user from './UserReducer';
import albums from './AlbumsReducer';

export default combineReducers({
  user,
  albums
});
