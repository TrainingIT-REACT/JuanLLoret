import actionTypes from '../actions/types';

export const initialState = {
  signedIn: false,
  nickname: '',
  token: '',
  loading: false
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.LOGIN_REQUEST:
      return {...state, loading: true};
    case actionTypes.LOGIN_SUCCESS:
      return {...state, signedIn: true, nickname: action.nickname, token: action.token, loading: false};
    default:
      return state;
  }
};

export default reducer;
