import { delay } from 'redux-saga';
import { call, put, takeEvery, fork } from 'redux-saga/effects';
import * as actions from  '../actions';


function* testtest2(action){
  yield delay(500);
  yield console.log("TEST2!!");
  yield put(actions.test1());
}

function* test2(){
  yield takeEvery('TEST2', testtest2);
}

function* testtest1(action){
  yield delay(1500);
  yield console.log("TEST1!!");
  yield put(actions.test2());
}

function* test1(){
  yield takeEvery('TEST1', testtest1);
}

export default function* test(){
  yield fork(test1);
  yield fork(test2);
}
