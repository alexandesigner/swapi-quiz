import { 
  SET_USER_INFO,
  RESET_USER_INFO
} from '../../types'

/*
  Set user info in state
*/
export const setUserInfo = (userData) => ({
  type: SET_USER_INFO,
  payload: userData
})

/*
  Save user information (name, email, score)
*/
export const saveUserInfo = (userData) => dispatch => {
  dispatch(setUserInfo(userData))
}

/*
  Reset User Info
*/
export const resetUserInfo = () => dispatch => {
  dispatch({
    type: RESET_USER_INFO
  })
}