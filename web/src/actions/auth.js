import * as types from './ActionTypes';


export const signInWithEmail = (userSignInInfo) => ({
  type: types.SIGN_IN_WITH_EMAIL,
  userSignInInfo
});

export const signUpWithEmail = (userSignUpInfo) => ({
  type: types.SIGN_UP_WITH_EMAIL,
  userSignUpInfo
});

export const getUserInfo = (userId) => ({
  type: types.GET_USER_INFO,
  userId
});

export const authHideMessage = () => ({
  type: types.AUTH_HIDE_MESSAGE
});

export const authShowMessage = (message) => ({
  type: types.AUTH_SHOW_MESSAGE,
  message
});