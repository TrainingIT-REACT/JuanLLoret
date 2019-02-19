import {getAlbums} from '../actions/AlbumsActions';

export const initialState = {
  list: [],
  loading: false,
  error: false
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case String(getAlbums.pending):
      return {...state, loading: true, error: false};
    case String(getAlbums.fulfilled):
      return {...state, loading: false, list: action.payload};
    case String(getAlbums.rejected):
      return {...state, loading: false, error: true};
    default:
      return state;
  }
};

export default reducer;
