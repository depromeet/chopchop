// import { delay } from 'redux-saga';
// import { call, put, takeEvery, fork } from 'redux-saga/effects';
import { put, takeEvery, fork } from 'redux-saga/effects';
import * as actions from  '../actions/home';
import * as types from '../actions/ActionTypes';
import axios from 'axios';
import config from '../config/config.json'

function* getPopularRooms(action){
  const url = config.server.url;
  const req = "http://" + url + "/boards/populars";
  try{
    let roomsData = {};
    yield axios.get(req)
          .then( res => { roomsData = res.data } )
    yield console.log(roomsData);
    yield put(actions.addPopularRoomsToState(roomsData));
  } catch(e){
    console.log(e);
  }
}

function* watchGetPopularRooms(){
  yield takeEvery(types.GET_POPULAR_ROOMS, getPopularRooms);
}

export default function* homeSaga(){
  yield fork(watchGetPopularRooms);
}
