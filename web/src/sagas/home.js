// import { delay } from 'redux-saga';
// import { call, put, takeEvery, fork } from 'redux-saga/effects';
import { put, takeEvery, fork } from 'redux-saga/effects';
import * as actions from  '../actions/home';
import * as types from '../actions/ActionTypes';
import axios from 'axios';
import config from '../config/config.json'

function* getPopularReviews(action){
  const url = config.server.url;
  const req = url + "/reviews?popular=true";
  try{
    let reviewsData = {};
    yield axios.get(req)
          .then( res => { reviewsData = res.data } )
    yield put(actions.addPopularReviewsToState(reviewsData));
  } catch(e){
    console.log(e);
  }
}

function* watchGetPopularReviews(){
  yield takeEvery(types.GET_POPULAR_REVIEWS, getPopularReviews);
}

export default function* homeSaga(){
  yield fork(watchGetPopularReviews);
}
