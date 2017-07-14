import * as types from '../actions/ActionTypes';

const initialState = {
  targetPath: "/chopchop/",
  currentPath: "/chopchop/",
};

export default function auth(state = initialState, action) {

	switch(action.type) {
    case types.GET_USER_INFO_WITH_SESSION:
      return {
        ...state,
        targetPath: action.targetPath,
      }
    case types.SET_UP_TARGET_PATH:
      return {
        ...state,
        targetPath: action.targetPath,
      }
    case types.SET_UP_CURRENT_PATH:
      return {
        ...state,
        currentPath: action.currentPath,
      }
		default:
			return state;
    }
}
