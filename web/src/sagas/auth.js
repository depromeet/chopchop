// import { call, put, takeEvery, fork } from 'redux-saga/effects';
import { put, takeEvery, fork } from 'redux-saga/effects';
import * as actions from  '../actions/auth';
import * as messageActions from  '../actions/message';
import * as types from '../actions/ActionTypes';
import axios from 'axios';
import config from '../config/config.json'

function* signInWithEmail(action){
  const url = config.server.url;
  const req = "http://" + url + "/users/login";
  try{
    let userId = null;
    // yield axios.post(req,{"user" : action.userSignInInfo})
    //         .then( res => userId = res.data.message);
    userId = 4; //tmp userId setup
    yield put(actions.getUserInfo(userId));
  } catch(e){
    yield put(messageActions.showMessage(e.message));
  }
}

function* watchSignInWithEmail(){
  yield takeEvery(types.SIGN_IN_WITH_EMAIL, signInWithEmail);
}

function* signUpWithEmail(action){
  yield put(actions.saveSignUpUserInfo(action.userSignUpInfo))
  const url = config.server.url;
  const req = "http://" + url + "/users";
  try{
    yield axios.post(req,{"user" : action.userSignUpInfo})
            .then( res => console.log(res));
    yield put(messageActions.showMessage(`Success`));
  } catch(e){
    yield put(messageActions.showMessage(e.message));
  }
}
function* verifyEmail(action){
  yield put(actions.saveSignUpUserInfo(action.userSignUpInfo));
  const emailAddress = action.userSignUpInfo["user_email"];
  if(emailAddress.length===0){
      yield put(actions.setVerifiedEmail(false));
      yield put(messageActions.showMessage(`Write your email address`));
      return;
  }
      
  const url = config.server.url;
  const req = "http://" + url + "/users?email=" + emailAddress;
  let verifiedEmail = false;
  try{
    yield axios.get(req)
          .then( function(res){
            if (res.data.status === "Success") verifiedEmail = true;
          });
    yield put(actions.setVerifiedEmail(verifiedEmail));
  } catch(e){
    yield put(actions.setVerifiedEmail(false));
  }
  if(verifiedEmail===true){
    yield put(messageActions.showMessage(`Verified`));
  }else{
    yield put(messageActions.showMessage(`Not Verified`));
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
    yield window.sessionStorage.setItem("authed", "true");
    yield window.sessionStorage.setItem("userId", userInfo.user_id);
    yield put(messageActions.showMessage(userInfo.user_name + `님 환영합니다`));
  } catch(e){
    yield put(messageActions.showMessage(e.message));
    yield window.sessionStorage.removeItem("authed");
    yield window.sessionStorage.removeItem("userId");

  }
}

function* getUserInfoWithSession(action){
  const url = config.server.url;
  const req = "http://" + url + "/users/"+action.userId;
  try{
    let userInfo = {};
    yield axios.get(req)
            .then( res => userInfo = res.data.values[0]);
    yield put(actions.addUserInfo(userInfo));
    yield window.sessionStorage.setItem("authed", "true");
    yield window.sessionStorage.setItem("userId", userInfo.user_id);
  } catch(e){
    yield put(messageActions.showMessage(e.message));
    yield window.sessionStorage.removeItem("authed");
    yield window.sessionStorage.removeItem("userId");

  }
}

function* watchGetUserInfo(){
  yield takeEvery(types.GET_USER_INFO, getUserInfo);
  yield takeEvery(types.GET_USER_INFO_WITH_SESSION, getUserInfoWithSession);
}

function* signOut(action){
  yield window.sessionStorage.removeItem("authed");
  yield window.sessionStorage.removeItem("userId");
  yield put(actions.removeUserInfo());
  yield put(messageActions.showMessage(`로그아웃 되었습니다.`));

}

function* watchSignOut(){
  yield takeEvery(types.SIGN_OUT, signOut);
}

export default function* authSaga(){
  yield fork(watchSignInWithEmail);
  yield fork(watchSignUpWithEmail);
  yield fork(watchGetUserInfo);
  yield fork(watchSignOut);
}
