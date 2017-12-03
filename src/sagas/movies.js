import { takeLatest } from 'redux-saga';
import { put } from 'redux-saga/effects';

import { actions as moviesActions } from 'ducks/movies';
import { types as appTypes } from 'ducks/app';

import MOVIES from 'data/sample-movies';

function* loadMovies() {
  yield put(moviesActions.set(MOVIES));
}

export default function* watch() {
  yield [
    takeLatest(appTypes.LOAD, loadMovies)
  ];
}
