import { put, takeEvery, fork } from 'redux-saga/effects';
import * as actions from  '../actions/myPage';
import * as messageActions from  '../actions/message';
import * as types from '../actions/ActionTypes';
import axios from 'axios';
import config from '../config/config.json'

function* getMyData(action){
  const url = config.server.url;
  const userId = action.userId;
  try{
    let req = url + "/reviews?user_id=" + userId;
    let reviewsData = [];
    yield axios.get(req)
          .then( res => { 
            if(res.data.status==="Success")
              reviewsData = res.data.values 
          } )
    yield put(actions.addMyDataToState(reviewsData));
  } catch(e){
    yield put(messageActions.showMessage(e.message));
  }
}

function* watchGetMyData(){
  yield takeEvery(types.GET_MY_DATA, getMyData);
}

export default function* myPageSaga(){
  yield fork(watchGetMyData);

}
