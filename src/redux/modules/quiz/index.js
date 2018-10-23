import { 
  SET_MODAL_START, 
  SET_STARTED_QUIZ, 
  SET_FINISHED_QUIZ 
} from '../../types';

// Set initial state array
const initialState = {
  modalStart: false,
  firstGame: true,
  started: false,
  finished: false
}

/*
  Countdown Reducer
*/
export default (state = initialState, action) => {
  switch (action.type) {
    case SET_STARTED_QUIZ:
      return {
        ...state,
        started: action.payload,
        finished: false
      }
    case SET_FINISHED_QUIZ:
      return {
        ...state,
        started: false,
        finished: action.payload
      }
    case SET_MODAL_START:
      return {
        ...state,
        modalStart: action.payload,
        firstGame: false
      }
    default:
      return state
  }
}