import * as types from '../actions/ActionTypes';

const initialState = {
	reviews: [

  ]
};

export default function myPage(state = initialState, action) {

	switch(action.type) {
		case types.ADD_MY_DATA_TO_STATE:
			return {
				...state,
				reviews: action.reviewsData
			 };
		default:
			return state;
	}
}
