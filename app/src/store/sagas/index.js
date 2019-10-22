import {all, call, put, select, takeLatest} from 'redux-saga/effects'
//import {Creators as fooActions, Types as fooTypes} from './ducks/foo'
import {PodcastsTypes} from '@store/ducks/podcasts'
import {load} from './podcasts'

export default function* rootSaga() {
  return yield all([takeLatest(PodcastsTypes.LOAD_REQUEST, load)])
}
