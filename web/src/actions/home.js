import * as types from './ActionTypes';


export const getPopularReviews = () => ({
  type: types.GET_POPULAR_REVIEWS
});

export const addPopularReviewsToState = (reviewsData) => ({
  type: types.ADD_POPULAR_REVIEWS_TO_STATE,
  reviewsData
});