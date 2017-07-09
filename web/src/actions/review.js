import * as types from './ActionTypes';

export const getReviewDataInTheReview = (reviewId) => ({
  type: types.GET_REVIEW_DATA_IN_THE_REVIEW,
  reviewId
});

export const addReviewDataInTheReviewToState = (reviewData) => ({
  type: types.ADD_REVIEW_DATA_IN_THE_REVIEW_TO_STATE,
  reviewData
});
