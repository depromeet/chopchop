// import { delay } from 'redux-saga';
// import { call, put, takeEvery, fork } from 'redux-saga/effects';
import { put, takeEvery, fork } from 'redux-saga/effects';
import * as actions from  '../actions/rooms';
import * as messageActions from  '../actions/message';
import * as types from '../actions/ActionTypes';
import axios from 'axios';
import config from '../config/config.json'

function* getAllRooms(action){
  const url = config.server.url;
  const userId = action.userId;
  const req = url + "/boards/lists/" + userId;
  try{
    let roomsData = {};
    yield axios.get(req)
          .then( res => { roomsData = res.data } )
    yield put(actions.addAllRoomsToState(roomsData));
  } catch(e){
    yield put(messageActions.showMessage(e.message));
  }
}

function* watchGetAllRooms(){
  yield takeEvery(types.GET_ALL_ROOMS, getAllRooms);
}

function* getFollwingRooms(action){
  const url = config.server.url;
  const userId = action.userId;
  const req = url + "/boards/follow/" + userId;
  try{
    let roomsData = {};
    yield axios.get(req)
          .then( res => { roomsData = res.data } )
    yield put(actions.addFollowingRoomsToState(roomsData));
  } catch(e){
    yield put(messageActions.showMessage(e.message));
  }
}

function* watchGetFollwingRooms(){
  yield takeEvery(types.GET_FOLLOWING_ROOMS, getFollwingRooms);
}

function* makeNewRoom(action){
  const url = config.server.url;
  const req = url + "/boards/";
  const roomName = action.roomName;
  const userId = action.userId;
  try{
    let response = null;
    yield axios.post(req,{
            "board_name": roomName,
            "board_uid": userId
          })
          .then( res => response = res.data);
    if(response.status==="S"){
      yield put(actions.getAllRooms(userId));
      yield put(messageActions.showMessage(`방이 생성되었습니다.`));
    }else if(response.status==="F"){
      yield put(messageActions.showMessage(response.reason));
    }
  } catch(e){
    yield put(messageActions.showMessage(e.message));
  }
}

function* watchMakeNewRoom(){
  yield takeEvery(types.MAKE_NEW_ROOM, makeNewRoom);
}

export default function* roomsSaga(){
  yield fork(watchGetAllRooms);
  yield fork(watchGetFollwingRooms);
  yield fork(watchMakeNewRoom);
}
