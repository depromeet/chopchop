import * as types from './ActionTypes';


export const hideMessage = () => ({
  type: types.HIDE_MESSAGE
});

export const showMessage = (message) => ({
  type: types.SHOW_MESSAGE,
  message
});
