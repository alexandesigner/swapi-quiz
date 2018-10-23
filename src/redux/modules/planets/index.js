import { 
  SET_PLANETS
} from '../../types'

// Set initial state array
const initialState = {
  planetsList: []
}

/*
  Planets Reducer
*/
export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PLANETS:
      return {
        ...state,
        planetsList: action.payload
      }
    default:
      return state
  }
}