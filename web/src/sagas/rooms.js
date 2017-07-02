import { delay } from 'redux-saga';
import { call, put, takeEvery, fork } from 'redux-saga/effects';
import * as actions from  '../actions/rooms';
import * as types from '../actions/ActionTypes';
import axios from 'axios';
import config from '../config/config.json'


function* getAllRooms(action){
  const url = config.server.url;
  const userId = action.userId;
  const req = "http://" + url + "/boards/lists/" + userId;
  console.log(req);
  try{
    let roomsData = {};

    yield axios.get(req)
    .then( res => { roomsData = res.data } )
    console.log(roomsData);
    yield put(actions.addAllRoomsToState(roomsData));
  } catch(e){
    console.log(e);

  }
}

function* watchGetAllRooms(){
  yield takeEvery(types.GET_ALL_ROOMS, getAllRooms);
}

export default function* postSaga(){
  yield fork(watchGetAllRooms);
}
