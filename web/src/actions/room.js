import * as types from './ActionTypes';

export const getRoomDataInTheRoom = (roomId) => ({
  type: types.GET_ROOM_DATA_IN_THE_ROOM,
  roomId
});
export const addRoomDataInTheRoomToState = (roomId, roomData, reviewsData) => ({
  type: types.ADD_ROOM_DATA_IN_THE_ROOM_TO_STATE,
  roomId,
  roomData,
  reviewsData
});
