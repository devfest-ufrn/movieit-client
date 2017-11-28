import _ from 'lodash';
import { takeLatest } from 'redux-saga';
import { call, put, select } from 'redux-saga/effects';

import { types as moviesTypes } from 'ducks/movies';
import { actions as sessionsActions } from 'ducks/sessions';

const INGRESSO_PARTNERSHIP = process.env.INGRESSO_PARTNERSHIP;

export function request(resource, options) {
  return fetch(resource, options)
    .then((response) => response.json())
    .then((json) => json);
}

const generateURL = (movieId) => {
  return `http://api-content.ingresso.com/v0/sessions/city/48/event/${ movieId }/partnership/${ INGRESSO_PARTNERSHIP }`;
};

function* loadSessions() {
  const movies = yield select(state => state.movies);
  const moviesIds = _.map(movies, movie => movie.ingressoId);

  const moviesRequests = _.map(moviesIds, (movieId) => {
    return call(request, generateURL(movieId));
  });
  const moviesSessionsResult = yield moviesRequests; 

  const filteredSessions = {};
  _.each(moviesSessionsResult, (resultItem, index) => {
    filteredSessions[moviesIds[index]] = _.first(_.filter(resultItem, { isToday: true }));
  });

  yield put(sessionsActions.set(filteredSessions));
}

export default function* watch() {
  yield [
    takeLatest(moviesTypes.SET, loadSessions)
  ];
}
