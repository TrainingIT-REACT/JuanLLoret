import actionTypes from './types';

export const APP_USER_NAME = 'APP_USER_NAME';
export const APP_TOKEN = 'APP_TOKEN';

export const loginRequest = () => ({
  type: actionTypes.LOGIN_REQUEST
});

export const loginSuccess = (nickname, password) => ({
  type: actionTypes.LOGIN_SUCCESS,
  nickname,
  password
});

export const login = (nickname, password) => {
  return (dispatch) => {
    dispatch(loginRequest());
    // faked fetch
    setTimeout(() => {
      localStorage.setItem(APP_USER_NAME, nickname);
      localStorage.setItem(APP_TOKEN, btoa(password));
      dispatch(loginSuccess(nickname, password));
    }, 2000);
  }
};

export const restoreSession = () => {
  return (dispatch) => {
    const nickname = localStorage.getItem(APP_USER_NAME);
    const token = localStorage.getItem(APP_TOKEN);
    if (nickname && token) {
      dispatch(loginSuccess(nickname, token))
    }
  }
};
