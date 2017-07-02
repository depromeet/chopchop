import * as types from './ActionTypes';


export const getPopularRooms = () => ({
  type: types.GET_POPULAR_ROOMS
});

export const addPopularRoomsToState = (roomsData) => ({
  type: types.ADD_POPULAR_ROOMS_TO_STATE,
  roomsData
});