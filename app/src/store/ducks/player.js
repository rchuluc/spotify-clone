import {createReducer, createActions} from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* Types & Action Creators */

const {Types, Creators} = createActions({
  // actionType: ['dataPassed'],
  setPodcastRequest: ['podcast', 'episodeId'],
  setPodcastSuccess: ['podcast'],
  setCurrent: ['episodeId'],
  play: null,
  pause: null,
  next: null,
  prev: null,
  reset: null,
})

export const PlayerTypes = Types
export default Creators

/* Initial State */

export const INITIAL_STATE = Immutable({
  podcast: null,
  current: null,
  playing: false,
})

/* Reducers */

// export const reducer = state =>
//   state.merge({ data: [] });

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_PODCAST_SUCCESS]: (state, {podcast}) =>
    state.merge({podcast, current: podcast.tracks[0].id}),
  [Types.SET_CURRENT]: (state, {episodeId}) =>
    state.merge({current: episodeId}),
  [Types.PLAY]: state => state.merge({playing: true}),
  [Types.PAUSE]: state => state.merge({playing: false}),
  [Types.RESET]: state =>
    state.merge({podcast: null, current: null, playing: false}),
})
