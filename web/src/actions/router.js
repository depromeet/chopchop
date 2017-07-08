import * as types from './ActionTypes';

export const setUpTargetPath = (targetPath) => ({
  type: types.SET_UP_TARGET_PATH,
  targetPath
});

export const setUpCurrentPath = (currentPath) => ({
  type: types.SET_UP_CURRENT_PATH,
  currentPath
});
