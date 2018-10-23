import { 
  SET_SPECIES
} from '../../types'

// Set initial state array
const initialState = {
  speciesList: []
}

/*
  Species Reducer
*/
export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SPECIES:
      return {
        ...state,
        speciesList: action.payload
      }
    default:
      return state
  }
}