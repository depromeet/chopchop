import * as types from './ActionTypes';


export const signInWithEmail = (userSignInInfo) => ({
  type: types.SIGN_IN_WITH_EMAIL,
  userSignInInfo
});

export const signUpWithEmail = (userSignUpInfo) => ({
  type: types.SIGN_UP_WITH_EMAIL,
  userSignUpInfo
});

export const verifyEmail = (userSignUpInfo) => ({
  type: types.VERIFY_EMAIL,
  userSignUpInfo
});

export const setVerifiedEmail = (success) => ({
  type: types.SET_VERIFIED_EMAIL,
  success
});

export const getUserInfo = (userId) => ({
  type: types.GET_USER_INFO,
  userId
});

export const getUserInfoWithSession = (userId, targetPath) => ({
  type: types.GET_USER_INFO_WITH_SESSION,
  userId,
  targetPath
});

export const detectNoSession = () => ({
  type: types.DETECT_NO_SESSION,
});

export const addUserInfo = (userInfo) => ({
  type: types.ADD_USER_INFO,
  userInfo
});

export const signOut = () => ({
  type: types.SIGN_OUT
});

export const removeUserInfo = () => ({
  type: types.REMOVE_USER_INFO
});

export const saveSignUpUserInfo = (userSignUpInfo) => ({
  type: types.SAVE_SIGN_UP_USER_INFO,
  userSignUpInfo
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

