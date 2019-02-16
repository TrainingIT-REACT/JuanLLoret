import actionTypes from './types';

export const APP_USER_NAME = 'APP_USER_NAME';
export const APP_TOKEN = 'APP_TOKEN';

export const loginRequest = () => ({
  type: actionTypes.LOGIN_REQUEST
});

export const loginSuccess = (nickname, token) => ({
  type: actionTypes.LOGIN_SUCCESS,
  nickname,
  token
});

export const login = (nickname, password) => {
  return (dispatch) => {
    dispatch(loginRequest());
    // faked fetch
    setTimeout(() => {
      const token = btoa(password);
      sessionStorage.setItem(APP_USER_NAME, nickname);
      sessionStorage.setItem(APP_TOKEN, token);
      dispatch(loginSuccess(nickname, token));
    }, 2000);
  }
};

export const restoreSession = () => {
  return (dispatch) => {
    const nickname = sessionStorage.getItem(APP_USER_NAME);
    const token = sessionStorage.getItem(APP_TOKEN);
    if (nickname && token) {
      dispatch(loginSuccess(nickname, token))
    }
  }
};
