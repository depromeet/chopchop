import * as types from '../actions/ActionTypes';

const initialState = {
	roomId: -1,
  reviews: [
    
  ]
};

export default function room(state = initialState, action) {

	switch(action.type) {
		case types.ADD_ALL_REVIEWS_IN_THE_ROOM_TO_STATE:
			return {
				...state,
				roomId: action.roomId,
				reviews: action.reviewsData.values
			 };
		default:
			return state;
	}
}
