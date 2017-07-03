// import { delay } from 'redux-saga';
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
    yield axios.post(req,
            {"user" : {
                "user_tokenid"  : "null",
                "user_name"     : action.userSignInInfo.user_name,
                "user_nickname" : action.userSignInInfo.user_nickname,
                "user_email"    : action.userSignInInfo.user_email,
                "user_password" : action.userSignInInfo.user_password,
                "user_source"   : action.userSignInInfo.user_source
                }   
            })
  } catch(e){
    console.log(e);
  }
}

function* watchSignInWithEmail(){
  yield takeEvery(types.SIGN_IN_WITH_EMAIL, signInWithEmail);
}

function* signUpWithEmail(action){
  const url = config.server.url;
  const req = "http://" + url + "/users";
  try{
    yield axios.post(req,
            {"user" : {
                "user_tokenid"  : "null",
                "user_name"     : action.userSignUpInfo.user_name,
                "user_nickname" : action.userSignUpInfo.user_nickname,
                "user_email"    : action.userSignUpInfo.user_email,
                "user_password" : action.userSignUpInfo.user_password,
                "user_source"   : action.userSignUpInfo.user_source
                }   
            })
  } catch(e){
    console.log(e);
  }
}

function* watchSignUpWithEmail(){
  yield takeEvery(types.SIGN_UP_WITH_EMAIL, signUpWithEmail);
}

export default function* authSaga(){
  yield fork(watchSignInWithEmail);
  yield fork(watchSignUpWithEmail);
}
