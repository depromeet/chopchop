import { combineReducers } from 'redux';
import rooms from './rooms';
import home from './home';
import auth from './auth';
import message from './message';

const reducers = combineReducers({
	roomsReducer: rooms,
	homeReducer: home,
	authReducer: auth,
	messageReducer: message,
})

export default reducers;
