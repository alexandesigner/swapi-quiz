import { SET_SECONDS_TO_TIME } from '../../types';

// Set initial state array
const initialState = {
  time: {}
}

/*
  Countdown Reducer
*/
export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SECONDS_TO_TIME:
      return {
        ...state,
        time: action.payload
      }
    default:
      return state
  }
}