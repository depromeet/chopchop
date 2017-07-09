import * as types from './ActionTypes';

export const getAllReviewsInTheRoom = (roomId) => ({
  type: types.GET_ALL_REVIEWS_IN_THE_ROOM,
  roomId
});
export const addAllReviewsInTheRoomToState = (reviewsData) => ({
  type: types.ADD_ALL_REVIEWS_IN_THE_ROOM_TO_STATE,
  reviewsData
});
