import * as types from '../actions/ActionTypes';

const initialState = {
	roomId: -1,
  reviews: [
    
  ]
};

export default function room(state = initialState, action) {

	switch(action.type) {
		default:
			return state;
	}
}
