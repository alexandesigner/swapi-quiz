import * as HTTP from '../../../api'
import { 
  SET_PLANETS, 
  ERROR_PLANETS
} from '../../types'

/*
  Set Planets
*/
export const setPlanets = planets => ({
  type: SET_PLANETS,
  payload: planets
})

/*
  Get Planets
*/
export const getPlanets = () => dispatch => {
    new Promise((resolve, reject) => {
      HTTP.getPlanets('https://swapi.co/api/planets', [], resolve, reject)
    })
    .then(res => {
      dispatch(setPlanets(res))
    })
    .catch(err => {
      const error = err.message
      dispatch(errorPlanets(error))
    })
}

/*
  Error Planets
*/  
export const errorPlanets = error => ({
  type: ERROR_PLANETS,
  payload: { error }
})
