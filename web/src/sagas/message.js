import { delay } from 'redux-saga';
import { put, takeEvery, fork, call } from 'redux-saga/effects';
import * as actions from  '../actions/message';
import * as types from '../actions/ActionTypes';

function* showMessageAndHide(){
  yield call(delay,1500);
  yield put(actions.hideMessage());
}

function* watchShowMessage(){
  yield takeEvery(types.SHOW_MESSAGE, showMessageAndHide);
}

export default function* messageSaga(){
  yield fork(watchShowMessage);
}
