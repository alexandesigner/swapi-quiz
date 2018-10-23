import * as HTTP from '../../../api'
import { 
  SET_FILMS, 
  ERROR_FILMS
} from '../../types'

/*
  Set Films
*/
export const setSpecies = films => ({
  type: SET_FILMS,
  payload: films
})

/*
  Get Films
*/
export const getFilms = () => dispatch => {
    new Promise((resolve, reject) => {
      HTTP.getFilms('https://swapi.co/api/films', [], resolve, reject)
    })
    .then(res => {
      dispatch(setSpecies(res))
    })
    .catch(err => {
      const error = err.message
      dispatch(errorFilms(error))
    })
}

/*
  Error Films
*/  
export const errorFilms = error => ({
  type: ERROR_FILMS,
  payload: { error }
})
