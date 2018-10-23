import * as HTTP from '../../../api'
import { 
  SET_VEHICLES, 
  ERROR_VEHICLES
} from '../../types'

/*
  Set Vehicles
*/
export const setVehicles = vehicles => ({
  type: SET_VEHICLES,
  payload: vehicles
})

/*
  Get Vehicles
*/
export const getVehicles = () => dispatch => {
    new Promise((resolve, reject) => {
      HTTP.getVehicles('https://swapi.co/api/vehicles', [], resolve, reject)
    })
    .then(res => {
      dispatch(setVehicles(res))
    })
    .catch(err => {
      const error = err.message
      dispatch(errorVehicles(error))
    })
}

/*
  Error Vehicles
*/  
export const errorVehicles = error => ({
  type: ERROR_VEHICLES,
  payload: { error }
})
