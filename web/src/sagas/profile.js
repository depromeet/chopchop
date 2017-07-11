import { put, takeEvery, fork } from 'redux-saga/effects';
import * as actions from  '../actions/profile';
import * as messageActions from  '../actions/message';
import * as types from '../actions/ActionTypes';
import axios from 'axios';
import config from '../config/config.json'

function* getUserData(action){
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
    let userInfo = {};
    req = url + "/users/" + userId;
    yield axios.get(req)
          .then( res => { userInfo = res.data.values[0] } )

    yield put(actions.addUserDataToState(userInfo, reviewsData));
  } catch(e){
    yield put(messageActions.showMessage(e.message));
  }
}

function* watchGetUserData(){
  yield takeEvery(types.GET_USER_DATA, getUserData);
}

export default function* myPageSaga(){
  yield fork(watchGetUserData);

}
