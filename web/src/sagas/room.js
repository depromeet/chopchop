// import { delay } from 'redux-saga';
// import { call, put, takeEvery, fork } from 'redux-saga/effects';
import { put, takeEvery, fork } from 'redux-saga/effects';
import * as actions from  '../actions/room';
import * as messageActions from  '../actions/message';
import * as types from '../actions/ActionTypes';
import axios from 'axios';
import config from '../config/config.json'

function* getAllReviewsInTheRoom(action){
  const url = config.server.url;
  const roomId = action.roomId;
  const req = "http://" + url + "/reviews?board_id=" + roomId;
  try{
    let reviewsData = {};
    yield axios.get(req)
          .then( res => { reviewsData = res.data } )
    yield put(actions.addAllReviewsInTheRoomToState(reviewsData));
  } catch(e){
    yield put(messageActions.showMessage(e.message));
  }
}

function* watchGetAllReviewsInTheRoom(){
  yield takeEvery(types.GET_ALL_REVIEWS_IN_THE_ROOM, getAllReviewsInTheRoom);
}

export default function* roomSaga(){
  yield fork(watchGetAllReviewsInTheRoom);

}
