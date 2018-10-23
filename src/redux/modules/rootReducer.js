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
import vehicles from './vehicles'
import planets from './planets'
import films from './films'

export default combineReducers({
  quiz,
  characters,
  countdown,
  score,
  rank,
  species,
  planets,
  films,
  vehicles
});