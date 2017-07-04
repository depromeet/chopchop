import { delay } from 'redux-saga';
// import { call, put, takeEvery, fork } from 'redux-saga/effects';
import { put, takeEvery, fork } from 'redux-saga/effects';
import * as actions from  '../actions/auth';
import * as types from '../actions/ActionTypes';
import axios from 'axios';
import config from '../config/config.json'

function* signInWithEmail(action){
  const url = config.server.url;
  const req = "http://" + url + "/users/login";
  try{
    let userId = null;
    yield axios.post(req,{"user" : action.userSignInInfo})
            .then( res => userId = res.message);
    yield put(actions.getUserInfo(userId));
  } catch(e){
    yield put(actions.authShowMessage(e.message));

  }
}

function* watchSignInWithEmail(){
  yield takeEvery(types.SIGN_IN_WITH_EMAIL, signInWithEmail);
}

function* signUpWithEmail(action){
  const url = config.server.url;
  const req = "http://" + url + "/users";
  try{
    yield axios.post(req,{"user" : action.userSignUpInfo})
            .then( res => console.log(res));
    yield put(actions.authShowMessage(`Success`));
  } catch(e){
    yield put(actions.authShowMessage(e.message));
  }
}

function* watchSignUpWithEmail(){
  yield takeEvery(types.SIGN_UP_WITH_EMAIL, signUpWithEmail);
}

function* getUserInfo(action){
  const url = config.server.url;
  const offset = action.userId-1;
  const req = "http://" + url + "/users?limit=1&offset="+offset;
  try{
    let userInfo = {};
    yield axios.get(req)
            .then( res => userInfo = res.value);
    yield put(actions.addUserInfo(userInfo));
    yield put(actions.authShowMessage(`Success`));
  } catch(e){
    yield put(actions.authShowMessage(e.message));
  }
}

function* watchGetUserInfo(){
  yield takeEvery(types.GET_USER_INFO, getUserInfo);
}

function* showMessageAndHide(){
  yield delay(1500);
  yield put(actions.authHideMessage());
}

function* watchShowMessage(){
  yield takeEvery(types.AUTH_SHOW_MESSAGE, showMessageAndHide);
}

export default function* authSaga(){
  yield fork(watchSignInWithEmail);
  yield fork(watchSignUpWithEmail);
  yield fork(watchShowMessage);
}
