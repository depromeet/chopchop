import * as types from '../actions/ActionTypes';

const initialState = {
    board: [

    ]
};

export default function counter(state = initialState, action) {

	switch(action.type) {
		case types.ADD_ALL_ROOMS_TO_STATE:
			return {
				...state,
                board: action.roomsData.board
			 };
		default:
			return state;
	}
}
