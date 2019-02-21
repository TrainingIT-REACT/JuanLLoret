import actionTypes from '../actions/types';

export const initialState = {
  signedIn: false,
  nickname: '',
  first: '',
  last: '',
  email: '',
  city: '',
  country: '',
  birthday: '',
  extract: '',
  token: '',
  loading: false
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.LOGIN_REQUEST:
      return {...state, loading: true};
    case actionTypes.LOGIN_SUCCESS:
      return {...state, signedIn: true, nickname: action.nickname, token: action.token, loading: false};
    case actionTypes.LOGOUT:
      return {...state};
    case actionTypes.USER_DATA:
      return {...state, ...action.user};
    default:
      return state;
  }
};

export default reducer;
