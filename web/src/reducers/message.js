import * as types from '../actions/ActionTypes';

const initialState = {
  messageVisibility: false,
  message: ''
};

export default function message(state = initialState, action) {

	switch(action.type) {
    case types.HIDE_MESSAGE:
      return {
        ...state,
        messageVisibility: false
      }
    case types.SHOW_MESSAGE:
      return {
        ...state,
        messageVisibility: true,
        message: action.message
      }
		default:
			return state;
    }
}
