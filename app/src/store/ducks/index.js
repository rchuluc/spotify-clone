import {combineReducers} from 'redux'
import {reducer as podcasts} from './podcasts'
import {reducer as player} from './player'
//Import reducers here

export default combineReducers({
  podcasts,
  player,
  //export then here
})
