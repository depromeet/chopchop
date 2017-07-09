import * as types from './ActionTypes';

export const getRoomDataInTheRoom = (roomId) => ({
  type: types.GET_ROOM_DATA_IN_THE_ROOM,
  roomId
});

export const addRoomDataInTheRoomToState = (roomData, roomOwnerData, reviewsData) => ({
  type: types.ADD_ROOM_DATA_IN_THE_ROOM_TO_STATE,
  roomData,
  roomOwnerData,
  reviewsData
});
