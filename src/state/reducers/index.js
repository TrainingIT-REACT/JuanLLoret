import {combineReducers} from 'redux';
import user from './UserReducer';
import albums from './AlbumsReducer';
import songs from './SongsReducer';

export default combineReducers({
  user,
  albums,
  songs
});
