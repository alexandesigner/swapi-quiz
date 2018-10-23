import { 
  SET_VEHICLES
} from '../../types'

// Set initial state array
const initialState = {
  vehiclesList: []
}

/*
  Vehicles Reducer
*/
export default (state = initialState, action) => {
  switch (action.type) {
    case SET_VEHICLES:
      return {
        ...state,
        vehiclesList: action.payload
      }
    default:
      return state
  }
}