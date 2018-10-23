import * as HTTP from '../../../api'
import { 
  SET_SPECIES, 
  ERROR_SPECIES
} from '../../types'

/*
  Set Species
*/
export const setSpecies = species => ({
  type: SET_SPECIES,
  payload: species
})

/*
  Get Species
*/
export const getSpecies = () => dispatch => {
    new Promise((resolve, reject) => {
      HTTP.getSpecies('https://swapi.co/api/species', [], resolve, reject)
    })
    .then(res => {
      dispatch(setSpecies(res))
    })
    .catch(err => {
      const error = err.message
      dispatch(errorSpecies(error))
    })
}

/*
  Error Species
*/  
export const errorSpecies = error => ({
  type: ERROR_SPECIES,
  payload: { error }
})
