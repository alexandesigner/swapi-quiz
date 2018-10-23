import { 
  SET_FILMS
} from '../../types'

// Set initial state array
const initialState = {
  filmsList: []
}

/*
  Films Reducer
*/
export default (state = initialState, action) => {
  switch (action.type) {
    case SET_FILMS:
      return {
        ...state,
        filmsList: action.payload
      }
    default:
      return state
  }
}