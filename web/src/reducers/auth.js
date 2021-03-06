import * as types from '../actions/ActionTypes';

const initialState = {
  authed: false,
  authedLoading: true,
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
  signUpInfoWithEmail: {
    verifiedEmail : false,
    userSignUpInfo: {
      "user_tokenid" : "NULL",
      "user_name" : "",
      "user_nickname" : "",
      "user_email" : "",
      "user_password" : "",
      "user_source" : "direct"
    }
  }
};

export default function auth(state = initialState, action) {

	switch(action.type) {
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
        authedLoading: false,
        userInfo: action.userInfo
      }
    case types.REMOVE_USER_INFO:
      return {
        ...state,
        authed: false,
        authedLoading: false,
        userInfo: {
          user_id : -1,
          user_name : "",
          user_nickname : "",
          user_image : "",
          user_token : ""
        }
      }
    case types.DETECT_NO_SESSION:
      return {
        ...state,
        authedLoading: false
      }
    case types.SAVE_SIGN_UP_USER_INFO:
      return {
        ...state,
        signUpInfoWithEmail: {
          ...state.signUpInfoWithEmail,
          userSignUpInfo: action.userSignUpInfo
        }
      }
    case types.SET_VERIFIED_EMAIL:
      return {
        ...state,
        signUpInfoWithEmail: {
          ...state.signUpInfoWithEmail,
          verifiedEmail: action.success
        }
      }
    

		default:
			return state;
    }
}
