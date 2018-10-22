import { 
  SET_MODAL_SCORE, 
  INCREMENT_MAX_SCORE, 
  INCREMENT_MIN_SCORE,
  SET_CURRENT_SCORE
} from '../../types';

/*
  Set set visible modal score
*/
export const setModalScore = visible => ({
  type: SET_MODAL_SCORE,
  payload: visible
});

/*
  Get visible modal score
*/
export const getModalScore = (visible) => dispatch => {
  dispatch(setModalScore(visible))
}

/*
  Set max score
*/
export const setMaxScore = score => ({
  type: INCREMENT_MAX_SCORE,
  payload: score
})

/*
  Get max score
*/
export const getMaxScore = (score) => dispatch => {
  dispatch(setMaxScore(score))
}

/*
  Set set max score
*/
export const setMinScore = score => ({
  type: INCREMENT_MIN_SCORE,
  payload: score
});

/*
  Get min score
*/
export const getMinScore = (score) => dispatch => {
  dispatch(setMinScore(score))
}

/*
  Set set current score
*/
export const setCurrentScore = score => ({
  type: SET_CURRENT_SCORE,
  payload: score
});

/*
  Get current Score
*/
export const getCurrentScore = (score) => dispatch => {
  dispatch(setCurrentScore(score))
}