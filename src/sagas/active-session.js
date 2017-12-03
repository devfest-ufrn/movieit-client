import { takeLatest } from 'redux-saga';
import { put } from 'redux-saga/effects';
import _ from 'lodash';

import {
  actions as activeSessionActions,
  types as activeSessionTypes
} from 'ducks/active-session';

import MOVIES from 'data/sample-movies';

function* loadActiveSession({ payload }) {
  console.log('payload', payload);
  const movie = _.find(MOVIES, { ingressoId: payload.movieId });
  console.log('movie', movie);

  yield put(activeSessionActions.set({
    movie,
    session: payload
  }));
}

export default function* watch() {
  yield [
    takeLatest(activeSessionTypes.LOAD, loadActiveSession)
  ];
}
