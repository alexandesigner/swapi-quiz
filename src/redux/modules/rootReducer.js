import { combineReducers } from 'redux'

/*
 Import all reducers to combine
*/
import quiz from './quiz'
import characters from './characters'
import countdown from './countdown'
import score from './score'
import rank from './rank'
import species from './species'
import planets from './planets'

export default combineReducers({
  quiz,
  characters,
  countdown,
  score,
  rank,
  species,
  planets
})