import * as types from './ActionTypes';

export const getMyData = (userId) => ({
  type: types.GET_MY_DATA,
  userId
});

export const addMyDataToState = (reviewsData) => ({
  type: types.ADD_MY_DATA_TO_STATE,
  reviewsData
});
