import actionTypes from './types';

export const login = (nickname) => ({
  type: actionTypes.LOGIN,
  nickname
});
