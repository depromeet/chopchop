import * as types from '../actions/ActionTypes';

const initialState = {
  authed: false,
  messageVisibility: false,
  signInVisibility: true,
  signUpVisibility: false,
  message: '',
  userInfo: {
    user_id : -1,
    user_name : "",
    user_nickname : "",
    user_image : "",
    user_token : ""
  },
  signUpInfo: {
    verifiedEmail : false
  }
};

export default function auth(state = initialState, action) {

	switch(action.type) {
    case types.AUTH_HIDE_MESSAGE:
      return {
        ...state,
        messageVisibility: false
      }
    case types.AUTH_SHOW_MESSAGE:
      return {
        ...state,
        messageVisibility: true,
        message: action.message
      }
    case types.MAKE_SIGN_IN_VISIBLE:
      return {
        ...state,
        signInVisibility: true,
        signUpVisibility: false
      }
    case types.MAKE_SIGN_IN_UNVISIBLE:
      return {
        ...state,
        signInVisibility: false
      }
    case types.MAKE_SIGN_UP_VISIBLE:
      return {
        ...state,
        signUpVisibility: true,
        signInVisibility: false
      }
    case types.MAKE_SIGN_UP_UNVISIBLE:
      return {
        ...state,
        signUpVisibility: false
      }
    case types.ADD_USER_INFO:
      return {
        ...state,
        authed: true,
        userInfo: action.userInfo
      }
    case types.SET_VERIFIED_EMAIL:
      return {
        ...state,
        signUpInfo: {
          ...state.signUpInfo,
          verifiedEmail: action.success
        }
      }
    

		default:
			return state;
    }
}
