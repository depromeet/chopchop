import { combineReducers } from 'redux';
import rooms from './rooms';
import home from './home';
import auth from './auth';

const reducers = combineReducers({
	roomsReducer: rooms,
	homeReducer: home,
	authReducer: auth,
})

export default reducers;
