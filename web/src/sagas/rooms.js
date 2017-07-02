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
  try{
    let roomsData = {};
    yield axios.get(req)
          .then( res => { roomsData = res.data } )
    yield put(actions.addAllRoomsToState(roomsData));
  } catch(e){
    console.log(e);
  }
}

function* watchGetAllRooms(){
  yield takeEvery(types.GET_ALL_ROOMS, getAllRooms);
}

function* getOnesRooms(action){
  const url = config.server.url;
  const userId = action.userId;
  const req = "http://" + url + "/boards/ones/";
  try{
    let roomsData = {};
    yield axios.put(req,{
            "idx": userId
          })
          .then( res => { roomsData = res.data } )
    yield put(actions.addOnesRoomsToState(roomsData));
  } catch(e){
    console.log(e);
  }
}

function* watchGetOnesRooms(){
  yield takeEvery(types.GET_ONES_ROOMS, getOnesRooms);
}

function* makeNewRoom(action){
  const url = config.server.url;
  const userId = action.userId;
  const req = "http://" + url + "/boards/";
  try{
    let roomsData = {};
    yield axios.post(req,{
            "board_name": action.roomName,
            "board_uid": action.userId
          })
          .then( res => console.log(res));
  } catch(e){
    console.log(e);
  }
}

function* watchMakeNewRoom(){
  yield takeEvery(types.MAKE_NEW_ROOM, makeNewRoom);
}

export default function* postSaga(){
  yield fork(watchGetAllRooms);
  yield fork(watchGetOnesRooms);
  yield fork(watchMakeNewRoom);
}
