import {getSongs} from '../actions/AlbumsActions';

export const initialState = {
  list: [],
  byId: new Map(),
  byAlbumId: new Map(),
  loading: false,
  error: false
};

const reducer = (state = initialState, action) => {
  switch(action.type) {

    case String(getSongs.pending):
      return {...state, loading: true, error: false};

    case String(getSongs.fulfilled):

      const byId = action.payload.reduce((prev, song) => {
        return prev.set(song.id, song);
      }, new Map());

      const byAlbumId = action.payload.reduce((prev, song) => {
        if (prev.has(song['album_id'])) {
          prev.get(song['album_id']).push(song);
        } else {
          prev.set(song['album_id'], [song])
        }
        return prev;
      }, new Map());

      return {...state, loading: false, list: action.payload, byId, byAlbumId};

    case String(getSongs.rejected):
      return {...state, loading: false, error: true};

    default:
      return state;
  }
};

export default reducer;
