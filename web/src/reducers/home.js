import * as types from '../actions/ActionTypes';

const initialState = {
    popularBoards: [

    ]
};

export default function home(state = initialState, action) {

	switch(action.type) {
		case types.ADD_POPULAR_ROOMS_TO_STATE:
			return {
				...state,
                popularBoards: action.roomsData.board
			 };
		default:
			return state;
	}
}
