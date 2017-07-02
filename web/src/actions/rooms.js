import * as types from './ActionTypes';


export const getAllRooms = (userId) => ({
  type: types.GET_ALL_ROOMS,
  userId
});

export const addAllRoomsToState = (roomsData) => ({
  type: types.ADD_ALL_ROOMS_TO_STATE,
  roomsData
});

export const getFollowingRooms = (userId) => ({
  type: types.GET_FOLLOWING_ROOMS,
  userId
});

export const addFollowingRoomsToState = (roomsData) => ({
  type: types.ADD_FOLLOWING_ROOMS_TO_STATE,
  roomsData
});

export const makeNewRoom = (roomName, userId) => ({
  type: types.MAKE_NEW_ROOM,
  roomName,
  userId
});