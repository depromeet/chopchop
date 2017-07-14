// import { delay } from 'redux-saga';
// import { call, put, takeEvery, fork } from 'redux-saga/effects';
import { put, takeEvery, fork } from 'redux-saga/effects';
import * as actions from  '../actions/review';
import * as messageActions from  '../actions/message';
import * as types from '../actions/ActionTypes';
import axios from 'axios';
import config from '../config/config.json'

function* getReviewDataInTheReview(action){
  const url = config.server.url;
  const reviewId = action.reviewId;
  try{
    let req = "http://" + url + "/reviews/" + reviewId;
    let reviewData = {};
    yield axios.get(req)
          .then( res => { reviewData = res.data.values[0] } )
    yield put(actions.addReviewDataInTheReviewToState(reviewData));
  } catch(e){
    yield put(messageActions.showMessage(e.message));
  }
}

function* watchGetReviewDataInTheReview(){
  yield takeEvery(types.GET_REVIEW_DATA_IN_THE_REVIEW, getReviewDataInTheReview);
}

export default function* reviewSaga(){
  yield fork(watchGetReviewDataInTheReview);

}
