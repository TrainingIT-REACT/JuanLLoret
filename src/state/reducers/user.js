import actionTypes from '../actions/types';

const initialState = {
  signedIn: false,
  nickname: ''
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.LOGIN:
      return {...state, signedIn: true, nickname: action.nickname};
    default:
      return state;
  }
};

export default reducer;
