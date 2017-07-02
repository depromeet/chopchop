import * as types from '../actions/ActionTypes';

const initialState = {
    allBoards: [

    ],
	followingBoards: [

	]
};

export default function rooms(state = initialState, action) {

	switch(action.type) {
		case types.ADD_ALL_ROOMS_TO_STATE:
			return {
				...state,
                allBoards: action.roomsData.board
			 };
		case types.ADD_FOLLOWING_ROOMS_TO_STATE:
			return {
				...state,
                followingBoards: action.roomsData.board
			 };
		default:
			return state;
	}
}
