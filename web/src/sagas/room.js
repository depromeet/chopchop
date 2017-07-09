// import { delay } from 'redux-saga';
// import { call, put, takeEvery, fork } from 'redux-saga/effects';
import { put, takeEvery, fork } from 'redux-saga/effects';
import * as actions from  '../actions/room';
import * as messageActions from  '../actions/message';
import * as types from '../actions/ActionTypes';
import axios from 'axios';
import config from '../config/config.json'

function* getRoomDataInTheRoom(action){
  const url = config.server.url;
  const roomId = action.roomId;
  try{
    let req = "http://" + url + "/reviews?board_id=" + roomId;
    let reviewsData = {};
    yield axios.get(req)
          .then( res => { reviewsData = res.data } )
    req = "http://" + url + "/boards/" + roomId;
    let roomData = {};
    yield axios.get(req)
          .then( res => { roomData = res.data } )
    yield put(actions.addRoomDataInTheRoomToState(roomData, reviewsData));
  } catch(e){
    yield put(messageActions.showMessage(e.message));
  }
}

function* watchGetRoomDataInTheRoom(){
  yield takeEvery(types.GET_ROOM_DATA_IN_THE_ROOM, getRoomDataInTheRoom);
}

export default function* roomSaga(){
  yield fork(watchGetRoomDataInTheRoom);

}
