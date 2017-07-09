import { combineReducers } from 'redux';
import rooms from './rooms';
import home from './home';
import auth from './auth';
import message from './message';
import router from './router';
import room from './room';
import review from './review';
import myPage from './myPage';

const reducers = combineReducers({
	roomsReducer: rooms,
	homeReducer: home,
	authReducer: auth,
	messageReducer: message,
	routerReducer: router,
	roomReducer: room,
	reviewReducer: review,
	myPageReducer: myPage,
})

export default reducers;
