import * as types from '../actions/ActionTypes';

const initialState = {
    popularReviews: [

    ]
};

export default function home(state = initialState, action) {

	switch(action.type) {
		case types.ADD_POPULAR_REVIEWS_TO_STATE:
			return {
				...state,
                popularReviews: action.reviewsData.values
			 };
		default:
			return state;
	}
}
