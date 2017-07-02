import * as types from './ActionTypes';


export const getAllRooms = (userId) => ({
  type: types.GET_ALL_ROOMS,
  userId
});

export const addAllRoomsToState = (roomsData) => ({
  type: types.ADD_ALL_ROOMS_TO_STATE,
  roomsData
});

export const getOnesRooms = (userId) => ({
  type: types.GET_ONES_ROOMS,
  userId
});

export const addOnesRoomsToState = (roomsData) => ({
  type: types.ADD_ONES_ROOMS_TO_STATE,
  roomsData
});