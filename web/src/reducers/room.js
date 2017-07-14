import * as types from '../actions/ActionTypes';

const initialState = {
	board: {
		boardData: {

		},
		boardOwnerData: {
			user_id: null
		}
	},
  reviews: [
    
  ]
};

export default function room(state = initialState, action) {

	switch(action.type) {
		case types.ADD_ROOM_DATA_IN_THE_ROOM_TO_STATE:
			return {
				...state,
				board: {
					boardData: action.roomData,
					boardOwnerData: action.roomOwnerData
				},
				reviews: action.reviewsData
			 };
		default:
			return state;
	}
}
