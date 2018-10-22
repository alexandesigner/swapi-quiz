import HTTP from '../../../api';
import { 
  SET_CHARACTERS, 
  ERROR_CHARACTERS,
  SET_MODAL_DETAILS,
  SET_CHARACTERS_THUMBNAILS,
  SET_CURRENT_DETAILS,
  SET_CURRENT_INDEX
} from '../../types';

/*
  Set characters
*/
export const setCharacters = characters => ({
  type: SET_CHARACTERS,
  payload: characters.results
});

/*
  Get characters
*/
export const getCharacters = () => dispatch => {
  HTTP.get(`/people`)
    .then(res => {
      const characters = res.data;
      dispatch(setCharacters(characters))
    })
    .catch(err => {
      const error = err.message
      dispatch(errorCharacters(error));
    });
 }

/*
  Error characters
*/  
export const errorCharacters = error => ({
  type: ERROR_CHARACTERS,
  payload: { error }
});

/*
  Set modal details
*/
export const setModalDetails = visible => ({
  type: SET_MODAL_DETAILS,
  payload: visible
});

/*
  Get modal details
*/
export const getModalDetails = (visible) => dispatch => {
  dispatch(setModalDetails(visible))
}

/*
  Set Thumbnails
*/
export const setCharacterThumbnails = thumbnails => ({
  type: SET_CHARACTERS_THUMBNAILS,
  payload: thumbnails
})

/*
  Set Current Details
*/
export const setCurrentDetails = character => ({
  type: SET_CURRENT_DETAILS,
  payload: character
});

/*
  Get Current Details
*/
export const getCurrentDetails = (character) => dispatch => {
  dispatch(setCurrentDetails(character))
}

/*
  Set Current Index
*/
export const setCurrentIndex = (currentIndex) => ({
  type: SET_CURRENT_INDEX,
  payload: currentIndex
});