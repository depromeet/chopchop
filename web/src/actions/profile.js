import * as types from './ActionTypes';

export const getUserData = (userId) => ({
  type: types.GET_USER_DATA,
  userId
});

export const addUserDataToState = (userInfo, reviewsData) => ({
  type: types.ADD_USER_DATA_TO_STATE,
  userInfo,
  reviewsData
});
