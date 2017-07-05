import * as types from '../actions/ActionTypes';

const initialState = {
  allBoards: [

    ],
	followingBoards: [

	],
	roomMakerVisibility: false,

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
		case types.MAKE_ROOM_MAKER_VISIBLE:
			return {
				...state,
				roomMakerVisibility: true
			}
		case types.MAKE_ROOM_MAKER_UNVISIBLE:
			return {
				...state,
				roomMakerVisibility: false
			}

		default:
			return state;
	}
}
