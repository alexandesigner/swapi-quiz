import { 
  SET_MODAL_SCORE, 
  INCREMENT_MAX_SCORE, 
  INCREMENT_MIN_SCORE,
  SET_CURRENT_SCORE,
  RESET_SCORE
} from '../../types'

// Set initial state array
const initialState = {
  modalScore: false,
  currentScore: 0,
  maxScore: 0,
  minScore: 0
}

/*
  Score Reducer
*/
export default (state = initialState, action) => {
  switch (action.type) {
    case SET_MODAL_SCORE:
      return {
        ...state,
        modalScore: action.payload
      }
    case SET_CURRENT_SCORE:
      return {
        ...state,
        currentScore: action.payload
      }
    case INCREMENT_MAX_SCORE:
      return {
        ...state,
        maxScore: state.maxScore + 10
      }
    case INCREMENT_MIN_SCORE:
      return {
        ...state,
        minScore: state.minScore + 5
      }
    case RESET_SCORE:
      return initialState
    default:
      return state
  }
}