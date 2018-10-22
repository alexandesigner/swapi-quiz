import { 
  SET_USER_INFO,
  RESET_USER_INFO
} from '../../types'

// Set initial state array
const initialState = {
  userInfo: {}
}

/*
  Rank Reducer
*/
export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_INFO:
      return {
        ...state,
        userInfo: action.payload
      }
    case RESET_USER_INFO:
      return {
        ...state,
        userInfo: {}
      }
    default:
      return state
  }
}