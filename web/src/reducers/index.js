import { combineReducers } from 'redux';
import rooms from './rooms';
import ui from './ui';

const reducers = combineReducers({
	roomsReducer: rooms,
})

export default reducers;
