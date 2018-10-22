import { SET_SECONDS_TO_TIME } from '../../types';

/*
  Set seconds to time
*/
export const setSecondsToTime = seconds => ({
  type: SET_SECONDS_TO_TIME,
  payload: seconds
});

/*
  Get seconds
*/
export const getSeconds = (seconds) => dispatch => {
  dispatch(setSecondsToTime(seconds))
}