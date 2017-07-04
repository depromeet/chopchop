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
    // yield axios.post(req,{"user" : action.userSignInInfo})
    //         .then( res => userId = res.message);
    userId = 1; //tmp userId setup
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
function* verifyEmail(action){
  const url = config.server.url;
  const req = "http://" + url + "/users/email?email=" + action.emailAddress;
  try{
    let verifiedEmail = false;
    yield axios.get(req)
          .then( function(res){
            if (res.data.status === "Success") verifiedEmail = true;
          });
    yield put(actions.setVerifiedEmail(verifiedEmail));
  } catch(e){
    yield put(actions.setVerifiedEmail(false));
  }
}

function* watchSignUpWithEmail(){
  yield takeEvery(types.SIGN_UP_WITH_EMAIL, signUpWithEmail);
  yield takeEvery(types.VERIFY_EMAIL, verifyEmail);
}

function* getUserInfo(action){
  const url = config.server.url;
  const req = "http://" + url + "/users/"+action.userId;
  try{
    let userInfo = {};
    yield axios.get(req)
            .then( res => userInfo = res.data.values[0]);
    yield put(actions.addUserInfo(userInfo));
    yield put(actions.authShowMessage(userInfo.user_name + `님 환영합니다`));
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
  yield fork(watchGetUserInfo);
  yield fork(watchShowMessage);
}
