import { 
  SET_MODAL_START, 
  SET_STARTED_QUIZ, 
  SET_FINISHED_QUIZ 
} from '../../types';

/*
  Set set visible modal start
*/
export const setModalStart = visible => ({
  type: SET_MODAL_START,
  payload: visible
});

/*
  Get visible modal start
*/
export const getModalStart = (visible) => dispatch => {
  dispatch(setModalStart(visible))
}

/*
  Set status started quiz
*/
export const setStartedQuiz = status => ({
  type: SET_STARTED_QUIZ,
  payload: status
});

/*
  Get status started quiz
*/
export const getStartedQuiz = (status) => dispatch => {
  dispatch(setStartedQuiz(status))
}

/*
  Set status finished quiz
*/
export const setFinishedQuiz = status => ({
  type: SET_FINISHED_QUIZ,
  payload: status
});

/*
  Get status finished quiz
*/
export const getFinishedQuiz = (status) => dispatch => {
  dispatch(setFinishedQuiz(status))
}