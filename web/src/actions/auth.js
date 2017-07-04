import * as types from './ActionTypes';


export const signInWithEmail = (userSignInInfo) => ({
  type: types.SIGN_IN_WITH_EMAIL,
  userSignInInfo
});

export const signUpWithEmail = (userSignUpInfo) => ({
  type: types.SIGN_UP_WITH_EMAIL,
  userSignUpInfo
});

export const verifyEmail = (emailAddress) => ({
  type: types.VERIFY_EMAIL,
  emailAddress
});

export const setVerifiedEmail = (success) => ({
  type: types.SET_VERIFIED_EMAIL,
  success
});

export const getUserInfo = (userId) => ({
  type: types.GET_USER_INFO,
  userId
});

export const addUserInfo = (userInfo) => ({
  type: types.ADD_USER_INFO,
  userInfo
});

export const authHideMessage = () => ({
  type: types.AUTH_HIDE_MESSAGE
});

export const authShowMessage = (message) => ({
  type: types.AUTH_SHOW_MESSAGE,
  message
});

export const makeSignInVisible = () => ({
  type: types.MAKE_SIGN_IN_VISIBLE
});

export const makeSignInUnvisible = () => ({
  type: types.MAKE_SIGN_IN_UNVISIBLE
});

export const makeSignUpVisible = () => ({
  type: types.MAKE_SIGN_UP_VISIBLE
});

export const makeSignUpUnvisible = () => ({
  type: types.MAKE_SIGN_UP_UNVISIBLE
});

