import * as types from '../actions/ActionTypes';

const initialState = {
  userInfo: {

  },
	reviews: [

  ]
};

export default function profile(state = initialState, action) {

	switch(action.type) {
		case types.ADD_USER_DATA_TO_STATE:
			return {
				...state,
				userInfo: action.userInfo,
				reviews: action.reviewsData
			 };
		default:
			return state;
	}
}
