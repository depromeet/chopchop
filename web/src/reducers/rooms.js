import * as types from '../actions/ActionTypes';

const initialState = {
    allBoards: [

    ],
	onesBoards: [

	]
};

export default function counter(state = initialState, action) {

	switch(action.type) {
		case types.ADD_ALL_ROOMS_TO_STATE:
			return {
				...state,
                allBoards: action.roomsData.board
			 };
		case types.ADD_ONES_ROOMS_TO_STATE:
			return {
				...state,
                onesBoards: action.roomsData.board
			 };
		default:
			return state;
	}
}
