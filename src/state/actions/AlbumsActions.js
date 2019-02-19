import { createAsyncAction } from 'redux-promise-middleware-actions';

export const getAlbums = createAsyncAction('ALBUMS', async () => {
  const res = await fetch('/albums');
  return await res.json();
});

export const getSongs = createAsyncAction('SONGS', async () => {
  const res = await fetch('/songs');
  return await res.json();
});
