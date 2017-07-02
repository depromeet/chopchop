import { combineReducers } from 'redux';
import rooms from './rooms';
import home from './home';
import ui from './ui';

const reducers = combineReducers({
	roomsReducer: rooms,
	homeReducer: home,
})

export default reducers;
