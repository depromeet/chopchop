import * as types from '../actions/ActionTypes';

const initialState = {
	board: {
	
	},
  reviews: [
    
  ]
};

export default function room(state = initialState, action) {

	switch(action.type) {
		case types.ADD_ROOM_DATA_IN_THE_ROOM_TO_STATE:
			return {
				...state,
				board: action.roomData.board,
				reviews: action.reviewsData.values
			 };
		default:
			return state;
	}
}
