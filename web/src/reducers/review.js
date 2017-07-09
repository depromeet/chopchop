import * as types from '../actions/ActionTypes';

const initialState = {
	review: {
	}
};

export default function review(state = initialState, action) {

	switch(action.type) {
		case types.ADD_REVIEW_DATA_IN_THE_REVIEW_TO_STATE:
			return {
				...state,
				review: action.reviewData
			 };
		default:
			return state;
	}
}
