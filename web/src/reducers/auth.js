import * as types from '../actions/ActionTypes';

const initialState = {
  authed: true,
  authedLoading: true,
  requested: false,
  messageVisibility: false,
  message: '',
  userInfo: {}
};

export default function auth(state = initialState, action) {

	switch(action.type) {
    case types.AUTH_LOGIN_REQUESTED:
      return {
        ...state,
        authedLoading: true,
      }
    case types.AUTH_LOGIN_GET_USER_INFO:
      return {
        ...state,
        authed: true,
        authedLoading: false,
        userInfo: action.userInfo,
      }
    case types.AUTH_LOGOUT_DETECTED:
      return {
        ...state,
        authed: false,
        authedLoading: false
      }
    case types.AUTH_LOGOUT_FULFILLED:
      return {
        ...state,
        requested: false,
      }
    case types.HIDE_AUTH_MESSAGE:
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

		default:
			return state;
    }
}