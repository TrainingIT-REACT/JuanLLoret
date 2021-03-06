import {getAlbums} from '../actions/AlbumsActions';

export const initialState = {
  list: [],
  byId: new Map(),
  loading: false,
  error: false
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case String(getAlbums.pending):
      return {...state, loading: true, error: false};
    case String(getAlbums.fulfilled):
      const byId = action.payload.reduce((prev, album) => {
        return prev.set(album.id, album);
      }, new Map());
      return {...state, loading: false, list: action.payload, byId};
    case String(getAlbums.rejected):
      return {...state, loading: false, error: true};
    default:
      return state;
  }
};

export default reducer;
